// import images
import Hero_person from "./assets/images/Hero/person.png";

import bootstrap from "./assets/images/Skills/bootstrap.png";
import canva from "./assets/images/Skills/canva.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import css from "./assets/images/Skills/css.png";
import git from "./assets/images/Skills/git.png";
import github from "./assets/images/Skills/github.png";
import jquery from "./assets/images/Skills/jquery.png";
import php from "./assets/images/Skills/php.png";
import sql from "./assets/images/Skills/sql.png";
import tailwindcss from "./assets/images/Skills/tailwindcss.png";
import vite from "./assets/images/Skills/vite.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web & ERP System Developer",
    firstName: "JECKY",
    LastName: "TIONGCO",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Years of Experience in Web & ERP System development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
       {
        name: "Adobe Photoshop",
        para: "Proficient in Adobe Photoshop for image editing, graphics design, and visual asset creation.",
        logo: ps,
        point1: "Skilled in non-destructive photo editing, color correction, and image retouching.",
        point2: "Proficient in using layers, masks, and adjustment tools for high-quality image enhancement.",
        point3: "Experienced in removing backgrounds, correcting lighting, and retouching portraits.",
        point4: "Created marketing assets including banners, posters, and social media content.",
        point5: "Designed custom icons, web graphics, and branding elements using vector and raster techniques.",
      },
      {
        name: "CSS",
        para: "Skilled in CSS3 with experience building responsive layouts using Flexbox and Grid, creating reusable styles, and implementing modern UI designs.",
        logo: css,
        point1: "Experienced with Tailwind CSS and Styled Components for scalable and maintainable styling in component-based frameworks like React.",
        point2: "Proficient in creating responsive layouts using Flexbox and CSS Grid.",
        point3: "Experienced in building mobile-first and cross-browser compatible designs.",
        point4: "Developed interactive UI elements with CSS transitions, keyframe animations, and hover effects.",
        point5: "Familiar with performance-friendly animation techniques for smooth UI motion.",
      },
      {
        name: "React js",
        para: "React.js development with hands-on experience building responsive web apps using React, JSX, and component-based architecture. Familiar with hooks, context API, and RESTful API integration.",
        logo: reactjs,
        point1: "Built interactive single-page applications (SPAs) using React.js and JSX.",
        point2: "Experienced with React Router for dynamic routing and nested navigation.",
        point3: "Used React Hooks (useState, useEffect, useContext, etc.) for managing side effects and local state.",
        point4: "Styled components using CSS Modules, Styled Components, and Tailwind CSS.",
        point5: "Set up and optimized React projects with Vite, Webpack, or Create React App.",
      },
      {
        name: "Bootstrap",
        para: "Proficient in using Bootstrap to build responsive, mobile-first websites with consistent design and layout structure.",
        logo: bootstrap,
        point1: "Experienced in using Bootstrap’s grid system to create responsive, mobile-first layouts.",
        point2: "Skilled in customizing layouts using breakpoints and container classes.",
        point3: "Built UIs quickly using Bootstrap components like navbars, modals, cards, forms, and buttons.",
        point4: "Customized default styles and extended components to match project branding.",
        point5: "Maintained semantic HTML structure and accessibility while leveraging Bootstrap components.",
      },
      {
        name: "Canva",
        para: "Proficient in using Canva for creating professional-quality designs, marketing materials, and visual content for digital platforms.",
        logo: canva,
        point1: "Created social media graphics, banners, flyers, and promotional content using Canva’s design tools and templates.",
        point2: "Skilled in layout design, typography, and color theory to produce clean and appealing visuals.",
        point3: "Designed content for Instagram, LinkedIn, Facebook, and other platforms with proper sizing, branding, and visual consistency.",
        point4: "Used Canva to produce storyboards, carousels, highlight covers, and ad creatives.",
        point5: "Customized visual assets to align with company or personal brand identity.",
      },
      {
        name: "Git",
        para: "Proficient in using Git for version control, team collaboration, and managing codebase history in modern development workflows.",
        logo: git,
        point1: "Experienced in creating and managing repositories, branches, and commits.",
        point2: "Proficient in cloning, merging, and pulling/pushing to remote repositories.",
        point3: "Followed structured Git workflows such as feature branching, Git Flow, and pull request models.",
        point4: "Managed issues, pull requests, and code reviews in shared repositories.",
        point5: "Used git log, git diff, and git stash to track and manage code changes efficiently.",
      },
      {
        name: "Github",
        para: "Proficient in using GitHub for version control, team collaboration, code reviews, and managing development workflows.",
        logo: github,
        point1: "Experienced in creating and managing public and private repositories.",
        point2: "Organized project files using clear branching strategies and Git workflows.",
        point3: "Collaborated with teams using pull requests, code reviews, and branch protection rules.",
        point4: "Ensured code quality by reviewing diffs, commenting, and resolving merge conflicts.",
        point5: "Proficient in cloning, merging, and pulling/pushing to remote repositories.",
      },
      {
        name: "JQuery",
        para: "Experienced in using jQuery to manipulate the DOM, handle events, and create interactive web elements efficiently.",
        logo: jquery,
        point1: "Used jQuery to select and update DOM elements dynamically using concise syntax.",
        point2: "Created interactive elements such as dropdowns, tabs, modals, and image sliders.",
        point3: "Managed user interactions with jQuery's event methods like .on(), .hover(), and .click().",
        point4: "Integrated jQuery with APIs using .ajax() and .getJSON() for asynchronous content updates.",
        point5: "Built engaging transitions and interactions without relying on heavy CSS or JS frameworks.",
      },
      {
        name: "PHP",
        para: "Proficient in using PHP for backend development, database integration, and building dynamic web applications.",
        logo: php,
        point1: "Built dynamic web applications using PHP and integrated with front-end technologies.",
        point2: "Developed custom server-side logic for data processing, user authentication, and form handling.",
        point3: "Worked with MySQL and MariaDB using PDO or MySQLi for secure and efficient queries.",
        point4: "Implemented input validation, output sanitization, and session management to ensure secure applications.",
        point5: "Handled JSON/XML data responses, authentication, and error handling in API endpoints.",
      },
      {
        name: "SQL",
        para: "Proficient in writing SQL queries for data retrieval, manipulation, and database management across relational database systems.",
        logo: sql,
        point1: "Wrote efficient SQL queries for SELECT, JOIN, GROUP BY, and aggregation operations.",
        point2: "Optimized queries for performance and reduced redundancy through subqueries and indexing.",
        point3: "Applied normalization principles to optimize storage and reduce data duplication.",
        point4: "Implemented full Create, Read, Update, Delete (CRUD) logic to support application features.",
        point5: "Managed user roles, permissions, and data access within the database.",
      },
      {
        name: "Tailwindcss",
        para: "Skilled in using Tailwind CSS to build fast, responsive, and utility-first user interfaces with clean and maintainable code.",
        logo: tailwindcss,
        point1: "Developed responsive layouts using Tailwind’s utility-first classes instead of traditional CSS or pre-processors.",
        point2: "Designed modern UI components with fine-grained control over spacing, colors, and typography.",
        point3: "Implemented mobile-first and fully responsive designs using Tailwind’s breakpoint system.",
        point4: "Customized visibility, layout, and typography across devices with ease.",
        point5: "Customized Tailwind configuration files to define custom color palettes, font families, and design tokens.",
      },
      {
        name: "Vite",
        para: "Experienced in using Vite for lightning-fast frontend development, modern build optimization, and seamless integration with JavaScript frameworks.",
        logo: vite,
        point1: "Utilized Vite’s ultra-fast dev server with instant hot module replacement (HMR) for a smooth development experience.",
        point2: "Built modern web apps with minimal startup and rebuild time compared to traditional bundlers.",
        point3: "Integrated Vite with React, Vue, and Tailwind CSS for optimized frontend workflows.",
        point4: "Configured Vite with PostCSS, TypeScript, and other tools for customized development setups.",
        point5: "Familiar with configuring vite.config.js for custom aliases, server proxies, and environment variables.",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I build modern, responsive, and user-friendly websites using cutting-edge technologies like React.js, Tailwind CSS, Vite, and more. Whether you're a business, startup, or individual, I offer tailored solutions to bring your ideas to life on the web.",
        logo: services_logo1,
      },
      {
        title: "ERP System Development",
        para: "I specialize in developing customized ERP (Enterprise Resource Planning) systems tailored to streamline your business operations and improve efficiency. From building modules from scratch to integrating third-party services, I provide reliable, scalable, and business-ready solutions.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "I create visually compelling and brand-consistent designs using industry-standard tools like Adobe Photoshop and Canva. Whether you're launching a brand, promoting a product, or growing your online presence, I deliver clean, professional graphics tailored to your goals.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};