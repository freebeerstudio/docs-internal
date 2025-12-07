# Free Beer Studio Internal Documentation

Internal technical documentation for Free Beer Studio infrastructure, workflows, and automation systems.

## 🔗 Live Site

**Production**: https://docs.internal.freebeer.ai

## 📚 What's Documented

- **Automation**: Multi-client pipeline, onboarding scripts, testing results
- **Infrastructure**: Cloudflare DNS, Vercel deployment, GitHub Actions
- **Templates**: Client templates, workflow templates
- **Guides**: Quick start, troubleshooting, best practices

## 🏗️ Structure

```
docs-internal/
├── public/
│   ├── index.html              # Documentation homepage
│   ├── css/
│   │   └── docs.css            # Documentation styling
│   ├── js/
│   │   └── nav.js              # Navigation functionality
│   ├── automation/             # Automation documentation
│   ├── infrastructure/         # Infrastructure guides
│   ├── templates/              # Template documentation
│   └── getting-started/        # Getting started guides
├── .github/
│   └── workflows/
│       └── deploy.yml          # Deployment workflow
├── vercel.json                 # Vercel configuration
└── README.md                   # This file
```

## 🚀 Deployment

This site uses a simple production-only deployment pipeline:

1. **Push to main** - Triggers GitHub Actions workflow
2. **Deploy** - GitHub Actions deploys to Vercel production
3. **Live** - Site is immediately available at docs.internal.freebeer.ai

No dev/staging environments - documentation goes straight to production.

## ✏️ Adding Documentation

### Create a new page

1. Create HTML file in appropriate directory:
   ```bash
   touch public/automation/new-guide.html
   ```

2. Use this template:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Page Title - Free Beer Studio Docs</title>
       <link rel="stylesheet" href="/css/docs.css">
   </head>
   <body>
       <div class="container">
           <!-- Include sidebar from index.html -->
           <nav class="sidebar">...</nav>

           <main class="content">
               <header class="page-header">
                   <h1>Page Title</h1>
                   <p class="lead">Brief description</p>
               </header>

               <section class="section">
                   <h2>Section Heading</h2>
                   <p>Your content here...</p>
               </section>
           </main>
       </div>
       <script src="/js/nav.js"></script>
   </body>
   </html>
   ```

3. Add link to sidebar navigation in all pages

4. Commit and push:
   ```bash
   git add public/automation/new-guide.html
   git commit -m "Add new guide documentation"
   git push
   ```

## 🎨 Styling

All styles are in `/public/css/docs.css`. The design uses:

- **Color Scheme**: Blues with dark sidebar
- **Typography**: System fonts for speed and readability
- **Components**: Cards, timelines, alerts, code blocks, tables
- **Responsive**: Mobile-friendly layout

## 📝 Content Guidelines

- **Clear headings**: Use h2 for main sections, h3 for subsections
- **Code examples**: Use `<pre><code>` blocks with proper formatting
- **Links**: Always use absolute paths starting with `/`
- **Images**: Store in `/public/images/` directory
- **Updates**: Add recent updates to timeline on homepage

## 🔧 Local Development

To preview locally:

```bash
# Install a simple HTTP server
npm install -g http-server

# Serve the public directory
cd public
http-server -p 8080

# Visit http://localhost:8080
```

## 📊 Tech Stack

- **HTML**: Semantic, clean markup
- **CSS**: Custom styles, no frameworks
- **JavaScript**: Vanilla JS for navigation and interactivity
- **Hosting**: Vercel
- **Deployment**: GitHub Actions
- **DNS**: Cloudflare

## 🤖 Automation

Documentation deploys automatically on every push to `main`:

1. GitHub Actions workflow triggers
2. Vercel deployment starts
3. Site updates within ~30 seconds
4. Commit comment confirms deployment

## 📫 Questions?

This is internal documentation for Free Beer Studio. For questions:

- Check existing documentation first
- Review the automation guides
- Consult infrastructure documentation

---

**Free Beer Studio** | Internal Documentation
Last updated: December 6, 2025
