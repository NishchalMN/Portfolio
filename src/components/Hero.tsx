import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Mail, MapPin, Phone } from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
  hoverScale,
  tapScale
} from '@/lib/animations';

const TYPING_STRINGS = [
  'Multimodal LLMs',
  'Computer Vision',
  'Production ML',
  'MLOps',
];

const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 2000;

// Neural Network Node Component
const NeuralNode = ({
  cx,
  cy,
  delay,
  size = 4
}: {
  cx: number;
  cy: number;
  delay: number;
  size?: number;
}) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r={size}
    fill="url(#nodeGradient)"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.9, 0.4],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Neural Network Connection Component
const NeuralConnection = ({
  x1,
  y1,
  x2,
  y2,
  delay
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="url(#lineGradient)"
    strokeWidth="1"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{
      pathLength: 1,
      opacity: [0.1, 0.4, 0.1],
    }}
    transition={{
      pathLength: { duration: 1.5, delay, ease: "easeOut" },
      opacity: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" }
    }}
  />
);

// Data Pulse Component - represents data flowing through the network
const DataPulse = ({
  startX,
  startY,
  endX,
  endY,
  delay
}: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
}) => (
  <motion.circle
    r="2"
    fill="hsl(163, 64%, 60%)"
    filter="url(#glow)"
    initial={{ cx: startX, cy: startY, opacity: 0 }}
    animate={{
      cx: [startX, endX],
      cy: [startY, endY],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 3,
    }}
  />
);

// Neural Network Visualization SVG
const NeuralNetworkVisualization = () => {
  // Define neural network layers
  const layers = useMemo(() => [
    // Input layer
    [
      { x: 50, y: 80 },
      { x: 50, y: 160 },
      { x: 50, y: 240 },
      { x: 50, y: 320 },
    ],
    // Hidden layer 1
    [
      { x: 150, y: 60 },
      { x: 150, y: 130 },
      { x: 150, y: 200 },
      { x: 150, y: 270 },
      { x: 150, y: 340 },
    ],
    // Hidden layer 2
    [
      { x: 250, y: 100 },
      { x: 250, y: 180 },
      { x: 250, y: 260 },
      { x: 250, y: 340 },
    ],
    // Hidden layer 3
    [
      { x: 350, y: 120 },
      { x: 350, y: 200 },
      { x: 350, y: 280 },
    ],
    // Output layer
    [
      { x: 450, y: 160 },
      { x: 450, y: 240 },
    ],
  ], []);

  // Generate connections between layers
  const connections = useMemo(() => {
    const conns: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = layers[i];
      const nextLayer = layers[i + 1];
      currentLayer.forEach((node, nodeIdx) => {
        nextLayer.forEach((nextNode, nextIdx) => {
          // Only connect some nodes for cleaner visualization
          if (Math.abs(nodeIdx - nextIdx) <= 2) {
            conns.push({
              x1: node.x,
              y1: node.y,
              x2: nextNode.x,
              y2: nextNode.y,
              delay: (i * 0.3) + (nodeIdx * 0.1),
            });
          }
        });
      });
    }
    return conns;
  }, [layers]);

  // Generate data pulses
  const pulses = useMemo(() => {
    const p: { startX: number; startY: number; endX: number; endY: number; delay: number }[] = [];
    // Select key paths through the network
    const paths = [
      [0, 1, 2, 3, 4], // Path through middle
      [1, 2, 1, 1, 0], // Path through top
      [3, 4, 3, 2, 1], // Path through bottom
    ];

    paths.forEach((path, pathIdx) => {
      for (let i = 0; i < layers.length - 1; i++) {
        const currentNode = layers[i][Math.min(path[i], layers[i].length - 1)];
        const nextNode = layers[i + 1][Math.min(path[i + 1], layers[i + 1].length - 1)];
        p.push({
          startX: currentNode.x,
          startY: currentNode.y,
          endX: nextNode.x,
          endY: nextNode.y,
          delay: pathIdx * 1.5 + i * 0.5,
        });
      }
    });
    return p;
  }, [layers]);

  return (
    <motion.svg
      viewBox="0 0 500 400"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <defs>
        {/* Gradient for nodes */}
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(163, 64%, 60%)" />
          <stop offset="100%" stopColor="hsl(220, 74%, 39%)" />
        </radialGradient>

        {/* Gradient for lines */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(163, 64%, 60%)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(210, 85%, 40%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(220, 74%, 39%)" stopOpacity="0.3" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {connections.map((conn, idx) => (
        <NeuralConnection key={`conn-${idx}`} {...conn} />
      ))}

      {/* Nodes */}
      {layers.map((layer, layerIdx) =>
        layer.map((node, nodeIdx) => (
          <NeuralNode
            key={`node-${layerIdx}-${nodeIdx}`}
            cx={node.x}
            cy={node.y}
            delay={layerIdx * 0.2 + nodeIdx * 0.1}
            size={layerIdx === 0 || layerIdx === layers.length - 1 ? 6 : 4}
          />
        ))
      )}

      {/* Data pulses */}
      {pulses.map((pulse, idx) => (
        <DataPulse key={`pulse-${idx}`} {...pulse} />
      ))}

      {/* Layer labels */}
      <motion.text
        x="50"
        y="370"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px] font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        INPUT
      </motion.text>
      <motion.text
        x="250"
        y="370"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px] font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.2 }}
      >
        HIDDEN
      </motion.text>
      <motion.text
        x="450"
        y="370"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px] font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.4 }}
      >
        OUTPUT
      </motion.text>
    </motion.svg>
  );
};

// Typing Effect Hook
const useTypingEffect = (strings: string[]) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? DELETE_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [displayText, stringIndex, isDeleting, strings]);

  return displayText;
};

// Stats Data
const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '50K+', label: 'Items Authenticated' },
  { value: '96%', label: 'TPR Achieved' },
];

const Hero = () => {
  const typedText = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 hero-mesh-bg" />

      {/* Grid overlay for tech aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 85% 40% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 85% 40% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* Left Side - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Terminal-style greeting */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Nishchal</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={staggerItem}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium"
            >
              Machine Learning Engineer II
            </motion.h2>

            {/* Typing Effect */}
            <motion.div
              variants={staggerItem}
              className="h-12 mb-6 flex items-center justify-center lg:justify-start"
            >
              <span className="text-lg sm:text-xl font-mono">
                <span className="text-muted-foreground">specializing in </span>
                <span className="text-secondary">{typedText}</span>
                <motion.span
                  className="inline-block w-0.5 h-6 bg-secondary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
                />
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-muted-foreground mb-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              MS in Machine Learning @ University of Maryland
              <br />
              <span className="text-foreground/70">Open to full-time roles starting May 2026</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div whileHover={hoverScale} whileTap={tapScale}>
                <Button size="lg" className="gradient-primary shadow-glow text-base" asChild>
                  <a href="#experience">View My Work</a>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={tapScale}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-transparent text-base group"
                  style={{
                    backgroundImage: 'linear-gradient(hsl(222 17% 11%), hsl(222 17% 11%)), linear-gradient(90deg, hsl(163, 64%, 60%) 0%, hsl(220, 74%, 39%) 50%, hsl(163, 64%, 60%) 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    backgroundSize: '200% 100%',
                  }}
                >
                  <a href="/Nishchal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex gap-4 justify-center lg:justify-start mb-6"
            >
              {[
                { href: "tel:+12404381916", icon: Phone, label: "Phone" },
                { href: "mailto:nmarur21@umd.edu", icon: Mail, label: "Email" },
                { href: "https://linkedin.com/in/nishchal-mn", icon: null, label: "LinkedIn", isLinkedIn: true },
                { href: "https://github.com/NishchalMN", icon: Github, label: "GitHub" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.isLinkedIn ? (
                    <span className="font-bold text-lg leading-none">in</span>
                  ) : link.icon ? (
                    <link.icon size={20} />
                  ) : null}
                </motion.a>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              variants={staggerItem}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">College Park, MD, USA</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Neural Network Visualization */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Glow effect behind visualization */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />

              {/* Neural Network */}
              <div className="relative z-10 w-full h-full p-4">
                <NeuralNetworkVisualization />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
        >
          <div className="flex items-center justify-center gap-6 sm:gap-12 py-4 px-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
