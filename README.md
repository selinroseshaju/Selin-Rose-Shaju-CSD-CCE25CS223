# Personal Portfolio Website

A professional personal portfolio website built with React.js, JavaScript, CSS, and React Router. It contains a responsive home page, about page, contact form, reusable components, and a simple production-ready setup.

## Features

- Responsive portfolio layout
- Home, About, and Contact pages with React Router
- Reusable Header, Footer, SkillCard, and ProjectCard components
- Controlled contact form with validation
- Modern UI with smooth hover states and mobile-friendly navigation
- Editable personal data file for quick customization

## Technologies Used

- React.js
- JavaScript
- HTML / JSX
- CSS
- React Router
- Node.js
- npm

## Project Structure

```text
personal-portfolio/
├── public/
│   ├── profile.jpg
│   ├── project-dashboard.svg
│   ├── project-builder.svg
│   └── project-store.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillCard.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── Global.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Installation

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Available Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- Any unknown route shows a Not Found page

## Contact Form Functionality

The contact form validates:

- required fields
- email format
- Indian mobile number format
- meaningful message content

On valid submission, the form clears and shows a success message without reloading the page.

## Customizing Your Details

Edit the object in `src/data/portfolioData.js` to update:

- name
- profession
- introduction
- email
- phone
- social links
- skills
- education
- experience
- certifications
- projects
- achievements
- career goals

Replace `public/profile.jpg` and `src/assets/profile.jpg` with your own profile image whenever available.

## Build and Preview

After building:

```bash
npm run preview
```
