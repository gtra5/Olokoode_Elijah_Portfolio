import Img1 from "../assets/advert2.jpeg";
import Img2 from "../assets/travelstore.png.jpeg";
import Img3 from "../assets/movies.jpeg";
import Img4 from "../assets/glazer.png";
import img5 from "../assets/insurepro.png.jpeg";
export const cards = [
  { about: "About Me", text: "01" },
  { about: "Tech Stack", text: "02" },
];

export const projects = [
  {
    id: 1,
    name: "Finest Diners",
    type: "Food Delivery",
    tag: "Food Delivery",
    tagColor: "#2d1a6e",
    tagBg: "#e8e2fa",
    gradient: "linear-gradient(135deg, #c8b8ff 0%, #7c5cbf 100%)",
    logoColor: "#fff",
    stack: ["React 19", "Vite 8", "Tailwind CSS 4", "Framer Motion", "Socket.IO"],
    desc: "A sophisticated full-featured food delivery platform with real-time GPS tracking, scroll-scrubbed hero videos, and smart cart management. Features JWT authentication, Socket.IO live updates, Paystack payment integration, and reverse geocoding — built with React 19 + Vite 8 for maximum performance and modern development practices.",
    liveUrl: "https://finest-diners-2-rihd.vercel.app/",
    githubUrl: "https://github.com/gtra5/finest-diners-2.git",
    image: Img1,
  },
  {
    id: 2,
    name: "TravelStore",
    type: "E-Commerce",
    tag: "E-Commerce",
    tagColor: "#1a3560",
    tagBg: "#ddeeff",
    gradient: "linear-gradient(135deg, #a8d4ff 0%, #3a7bd5 100%)",
    logoColor: "#fff",
    stack: ["React.js", "Tailwind CSS"],
    desc: "A fully functional e-commerce web application for product discovery and purchasing. Integrates the DummyJSON API for real-time product data, Firebase Authentication for secure sessions, and a scalable Tailwind + React component architecture built with a mobile-first approach.",
    liveUrl: "https://e-commerce-8cmx.vercel.app/",
    image: Img2,
  },
  {
    id: 3,
    name: "MovieHub",
    type: "Media Discovery",
    tag: "Media Discovery",
    tagColor: "#0a4a2a",
    tagBg: "#d4f2e0",
    gradient: "linear-gradient(135deg, #b6f0d0 0%, #1a9e5c 100%)",
    logoColor: "#fff",
    stack: ["React.js", "JavaScript ES6+"],
    desc: "A dynamic movie discovery app powered by the TMDb API, surfacing real-time film data including ratings, descriptions, and trending content. Features a client-side search for instant title lookup and a clean, fully responsive UI optimised across desktop, tablet, and mobile.",
    liveUrl: "https://movie-website-rro8.vercel.app/",
    image: Img3,
  },
  {
    id: 4,
    name: "Glazer",
    type: "3D Showcase",
    tag: "3D / Interactive",
    tagColor: "#5a1a3a",
    tagBg: "#fce4f0",
    gradient: "linear-gradient(135deg, #ffc2de 0%, #d4538a 100%)",
    logoColor: "#fff",
    stack: ["React.js", "CSS3"],
    desc: "An immersive front-end application showcasing automobiles with real-time 3D visualisation via the Sketchfab API. Renders high-quality, interactive 3D car models directly in the browser, wrapped in smooth UI transitions and polished responsive layouts.",
    liveUrl: "https://glazer-lake.vercel.app/",
    image: Img4,
  },
  {
    id: 5,
    name: "Insurepro",
    type: "Insurance Platform",
    tag: "Insurance Platform",
    tagColor: "#4a2a00",
    tagBg: "#d4f6ff",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #000000 100%)",
    logoColor: "#fff",
    stack: ["React.js", "Tailwind CSS"],
    desc: "",
    liveUrl: "",
    image: img5,
  },
];
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
