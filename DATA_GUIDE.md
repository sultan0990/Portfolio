# Portfolio Data Guide

This guide shows you where to add your personal information and data in the portfolio.

## 📝 Sections to Update

### 1. **Resume Download** (`src/components/ResumeButton.jsx`)
- Line 6: Add your resume PDF link
- Currently set to `#` - replace with your actual resume URL

### 2. **Projects** (`src/components/Projects.jsx`)
- Already has your 2 projects
- Add more projects by clicking "Add New Project" card
- Or manually add in the `projects` array (line 7)

### 3. **Certifications** (`src/components/Certifications.jsx`)
- Already has Android Basics with Compose
- Add more certifications in the `certifications` array (line 7)
- Add certificate link if available

### 4. **Contact Form** (`src/components/ContactForm.jsx`)
- Currently uses mailto link
- You can integrate with:
  - **Formspree** (free) - https://formspree.io
  - **EmailJS** (free tier) - https://www.emailjs.com
  - **Netlify Forms** (if deploying to Netlify)

### 5. **Personal Info** (Already Filled)
- ✅ Name: Sultan Salauddin
- ✅ Email: ssn1450@gmail.com
- ✅ Phone: +91 9339150390
- ✅ LinkedIn: linkedin.com/in/sulatn-salauddin
- ✅ GitHub: github.com/sultan

## 🎨 Customization Options

### Colors
Edit `tailwind.config.js` to change color scheme

### Animations
All animations are in component files using Framer Motion

### Content
- **About**: `src/components/About.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Services**: `src/components/Services.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Education**: `src/components/Education.jsx`
- **Achievements**: `src/components/Achievements.jsx`

## 🚀 Ready to Use Features

- ✅ Available for Work badge (Hero & Navbar)
- ✅ Hire Me button (Hero section)
- ✅ Contact form
- ✅ Project image upload
- ✅ Add new projects dynamically
- ✅ Resume download button (floating)
- ✅ Smooth scrolling navigation
- ✅ Responsive design

## 📸 Adding Project Images

1. Click the "+" icon on any project card
2. Select an image file
3. Image will be stored locally (base64)
4. For production, consider using:
   - Cloudinary (free tier)
   - Imgur API
   - GitHub as image hosting

## 🔗 Adding Resume Link

1. Upload your resume PDF to:
   - Google Drive (make public)
   - GitHub (in a public repo)
   - Dropbox (get public link)
2. Update `src/components/ResumeButton.jsx` line 6

## 📧 Contact Form Integration

### Option 1: Formspree (Easiest - Free)
1. Sign up at formspree.io
2. Create a form
3. Get your form endpoint
4. Update `ContactForm.jsx` handleSubmit function

### Option 2: EmailJS (Free)
1. Sign up at emailjs.com
2. Set up email service
3. Update ContactForm.jsx with EmailJS code

### Option 3: Keep Mailto (Current)
- Already working, opens email client
- No backend needed

## ✅ All Set!

Your portfolio is ready to use. Just fill in the data when you have it!

