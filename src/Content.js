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
      },
      {
        name: "CSS",
        para: "Skilled in CSS3 with experience building responsive layouts using Flexbox and Grid, creating reusable styles, and implementing modern UI designs.",
        logo: css,
      },
      {
        name: "React js",
        para: "React.js development with hands-on experience building responsive web apps using React, JSX, and component-based architecture. Familiar with hooks, context API, and RESTful API integration.",
        logo: reactjs,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
      {
        name: "Canva",
        para: "Lorem ipsum text  dummy",
        logo: canva,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Github",
        para: "Lorem ipsum text  dummy",
        logo: github,
      },
      {
        name: "JQuery",
        para: "Lorem ipsum text  dummy",
        logo: jquery,
      },
      {
        name: "PHP",
        para: "Lorem ipsum text  dummy",
        logo: php,
      },
      {
        name: "SQL",
        para: "Lorem ipsum text  dummy",
        logo: sql,
      },
      {
        name: "Tailwindcss",
        para: "Lorem ipsum text  dummy",
        logo: tailwindcss,
      },
      {
        name: "Vite",
        para: "Lorem ipsum text  dummy",
        logo: vite,
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
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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