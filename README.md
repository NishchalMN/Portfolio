# Nishchal Marur - ML Engineer Portfolio

A minimalist, responsive portfolio website showcasing production ML experience and projects.

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
- **Deployment**: Cloudflare

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

## 📝 Adding Your Content

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

- **Email**: nishchal.marur@gmail.com
- **LinkedIn**: [linkedin.com/in/nishchal-mn](https://linkedin.com/in/nishchal-mn)
- **GitHub**: [github.com/NishchalMN](https://github.com/NishchalMN)

## 📄 License

This project is open source and available for personal use.

---

Built with React and Tailwind CSS
