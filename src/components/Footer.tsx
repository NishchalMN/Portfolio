const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Nishchal Marur. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
