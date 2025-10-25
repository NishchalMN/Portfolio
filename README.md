# Nishchal Marur - ML Engineer Portfolio

A minimalist, responsive portfolio website showcasing production ML experience and projects.

## 🚀 Live Site

This portfolio is deployed on Lovable's platform with instant updates and optimized hosting.

**Lovable URL**: https://lovable.dev/projects/e03e292e-086e-45a1-962e-09045cfb7985

## 📋 Features

- **Responsive Design**: Optimized for all screen sizes
- **Fast Loading**: Built with React + Vite for optimal performance
- **Smooth Scrolling**: Seamless navigation between sections
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS
- **Component-Based**: Modular, maintainable code structure

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Lovable Platform (easier than GitHub Pages!)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation with smooth scroll
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # Professional summary
│   ├── Experience.tsx   # Work timeline
│   ├── Projects.tsx     # Featured projects
│   ├── Skills.tsx       # Technical skills
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer section
├── pages/
│   └── Index.tsx        # Main page layout
├── index.css            # Design system & global styles
└── App.tsx              # App configuration
```

## 🎨 Design System

The portfolio uses a professional tech aesthetic with:
- **Primary Color**: Deep blue (#3b82f6 / hsl(217, 91%, 60%))
- **Accent Color**: Purple (#a78bfa / hsl(270, 70%, 65%))
- **Background**: Dark theme (hsl(222, 47%, 11%))
- **Typography**: Inter font family
- **Animations**: Subtle fade-ins on scroll

All colors use HSL and semantic tokens defined in `src/index.css`.

## 📝 Adding Your Content

### Update Resume PDF
1. Add your resume PDF to the `public/` folder as `resume.pdf`
2. Links are already configured to point to `/resume.pdf`

### Add Project Images/Videos
1. Place images in `src/assets/` folder
2. Update image paths in `src/components/Projects.tsx`:
   ```tsx
   image: '/path-to-your-image.jpg'
   ```
3. For videos, replace the image with a video element:
   ```tsx
   <video controls className="w-full h-full object-cover">
     <source src="/path-to-video.mp4" type="video/mp4" />
   </video>
   ```

### Customize Content
- **Personal Info**: Edit `src/components/Hero.tsx` and `src/components/About.tsx`
- **Work Experience**: Update array in `src/components/Experience.tsx`
- **Projects**: Modify array in `src/components/Projects.tsx`
- **Skills**: Edit categories in `src/components/Skills.tsx`
- **Contact Links**: Update links in `src/components/Contact.tsx`

## 🚀 Deployment

### Deploy on Lovable (Recommended)
1. Click "Publish" in the Lovable editor
2. Your site is live instantly with optimized hosting
3. Get a lovable.app subdomain automatically
4. Free SSL certificate included

### Connect Custom Domain
1. Go to Project Settings → Domains in Lovable
2. Enter your domain name
3. Follow DNS configuration instructions
4. SSL certificate auto-provisioned

### Deploy to GitHub Pages (Alternative)
If you prefer GitHub Pages:
1. Push code to GitHub repository
2. Go to repo Settings → Pages
3. Select branch and `/` root folder
4. Add custom domain if desired

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact

- **Email**: nmarur21@umd.edu
- **LinkedIn**: [linkedin.com/in/nishchal-mn](https://linkedin.com/in/nishchal-mn)
- **GitHub**: [github.com/NishchalMN](https://github.com/NishchalMN)

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React, Tailwind CSS, and Lovable
