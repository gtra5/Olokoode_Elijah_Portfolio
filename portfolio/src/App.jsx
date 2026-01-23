import { useState, useEffect} from "react";
import img1 from "./assets/tejah.jpeg";
import img2 from "./assets/OE.png";
import { motion } from "framer-motion";
import ZigZagLine from "./component/zigzag";
import bgShape from "./assets/curveb.svg";
import img3 from "./assets/react_original_logo_icon_146374.svg";
import img4 from "./assets/javascript_icon_130900.svg";
import img5 from "./assets/tailwindcss_logo_icon_167923.svg";
import img6 from "./assets/framer_logo_icon_169149.svg";
import img7 from "./assets/typescript_original_logo_icon_146317.svg";
import img8 from "./assets/next_js_logo_icon_145038.svg";
import img9 from "./assets/finest-diners.png";
import img10 from "./assets/e-commerce.png";
import img11 from "./assets/portfolio .png";
import img12 from "./assets/movies.png";
import img13 from "./assets/glazers.png";
import img14 from "./assets/insurance .png";
import SocialSection from "./component/click";
const ProjectDone = [
  {
    id: 1,
    name: "Finest Diners",
    image: img9,
    description:
      "A modern food ordering web application with cart functionality, responsive design, and smooth user experience built using React and Tailwind CSS.",
    links: "https://finest-diners.vercel.app/",
  },
  {
    id: 2,
    name: "TravelStore Website",
    image: img10,
    description:
      "A full-featured e-commerce platform featuring product listings, filtering, and checkout flow, focused on performance and clean UI.",
    links: "https://e-commerce-8cmx.vercel.app/",
  },
  {
    id: 3,
    name: "Olokode Elijah Portfolio",
    image: img11,
    description:
      "My personal portfolio showcasing projects, skills, and experience with a minimalist design and interactive animations.",
    links: "https://olokode-elijah-portfolio.vercel.app/",
  },
  {
    id: 4,
    name: "Moviehub",
    image: img12,
    description:
      "A movie discovery application using the TMDb API that allows users to explore trending movies, view details, and search titles.",
    links: "https://movie-website-rro8.vercel.app/",
  },
  {
    id: 5,
    name: "Glazers",
    image: img13,
    description: [
      "Glazer is a personal car showcase platform.",
      "It brings together all the cars I like in one place.",
      "Designed with a clean, modern, and visual-first experience.",
    ],
    links: "https://glazer-lake.vercel.app/",
  },
  {
    id: 6,
    name: "Insurepro",
    image: img14,
    description: [
      "InsurePro is a modern insurance services platform.",
      "It provides users with an easy way to explore and manage policies online.",
      "Built for clarity, trust, and a seamless digital experience.",
    ],
    links: "https://insurance-website-mu.vercel.app/",
  },
];

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const skills = [
    { name: "React", icon: img3 },
    { name: "JavaScript", icon: img4 },
    { name: "Tailwind CSS", icon: img5 },
    { name: "Framer Motion", icon: img6 },
    { name: "TypeScript", icon: img7 },
    { name: "Next.js", icon: img8 },
  ];
  const downloadCV = () => {
  const link = document.createElement("a")
  link.href = "/Olokode Elijah_resume.docx"
  link.download = "Olokode Elijah_resume.docx"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const whatsappLink =
  "https://wa.me/2349018006888?text=Hello%20Elijah%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you."


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
const handlScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative overflow-x-hidden">
     <motion.header
  initial={{ y: -120, opacity: 0 }}
  animate={{
    y: isVisible ? 0 : -120,
    opacity: isVisible ? 1 : 0,
  }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-transparent
  "
>
  {/* OUTER HEIGHT WRAPPER */}
  <div className="h-20 sm:h-24 md:h-32">
    {/* ALIGNMENT CONTAINER (MATCHES REST OF SITE) */}
    <div
      className="
        relative
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        md:px-12
        h-full
      "
    >
      {/* Left: Logo */}
      <img
        src={img2}
        alt="Logo"
        className="h-25 sm:h-34 w-auto"
      />

      {/* Center: Floating Pill Navigation */}
      <nav
        className="
          absolute
          left-1/2
          -translate-x-1/2
          hidden
          md:block
        "
      >
        <ul
          className="
            flex
            items-center
            gap-6
            px-8
            py-4
            rounded-full
            bg-black/80
            text-white
            text-sm
            font-medium
            backdrop-blur-md
          "
        >
          <li
            className="cursor-pointer hover:opacity-70 transition"
            onClick={() => handlScroll("home-ish")}
          >
            Home-ish
          </li>
          <li
            className="cursor-pointer hover:opacity-70 transition"
            onClick={() => handlScroll("builds")}
          >
            Builds
          </li>
          <li
            className="cursor-pointer hover:opacity-70 transition"
            onClick={() => handlScroll("about")}
          >
            About
          </li>
        </ul>
      </nav>

      {/* Right: CTA */}
      <a
       href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
        className="
          px-4
          sm:px-8
          py-3
          rounded-full
          border
          border-black
          text-black
          text-xs
          sm:text-sm
          font-medium
          hover:bg-black
          hover:text-white
          transition
        "
      >
        Let's talk $
      </a>
    </div>
  </div>
</motion.header>


      <div className="relative" id="home-ish">
        <section
          className="
  relative
  w-full
  bg-[#DCE3E7]
  px-4
  sm:px-6
  md:px-12
  pt-32
  sm:pt-35
 
  pb-16
  overflow-hidden
"
        >
          <img
            src={bgShape}
            alt=""
            aria-hidden="true"
            className="
            object-cover
           
    absolute
    top-0
    left-1/2
    -translate-x-1/2
   w-full
   h-full
    opacity-40
    pointer-events-none
    z-0
  "
          />

          <div
            className="
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-12
  items-center
  min-h-[calc(100svh-120px)]
  max-w-7xl
  mx-auto
  relative
  z-10
"
          >
            {/* LEFT CONTENT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex justify-center flex-col"
              
            >
              <motion.h3
                variants={item}
                className="text-base md:text-lg font-medium mb-2 text-[#2B2E34]"
              >
                Hello,
              </motion.h3>

              <motion.h1
                variants={item}
                className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-semibold max-w-xl"
              >
                I am
                <br />
                Olokode <br />
                Elijah Taiwo
              </motion.h1>

              <motion.p
                variants={item}
                className="text-base md:text-lg lg:text-xl mb-4 max-w-xl leading-relaxed mt-4"
              >
                A passionate{" "}
                <span className="font-semibold uppercase text-[#2B2E34] hostgrotesk">
                  Frontend Developer
                </span>
                <br />
                turning designs into interactive experiences
                <br />
                for the modern web.
              </motion.p>

              <motion.button
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="mt-6 md:mt-10 bg-[#2B2E34] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium w-max"
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* RIGHT CONTENT */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
              >
                <svg
                  viewBox="0 0 500 500"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <clipPath id="curvedClip">
                      <path d="M 100 50 Q 450 50 450 250 Q 450 450 250 450 Q 50 450 50 250 Q 50 150 100 50 Z" />
                    </clipPath>
                  </defs>

                  <path
                    d="M 100 50 Q 450 50 450 250 Q 450 450 250 450 Q 50 450 50 250 Q 50 150 100 50 Z"
                    fill="#A89B8F"
                    opacity="0.3"
                  />

                  <image
                    href={img1}
                    width="500"
                    height="500"
                    clipPath="url(#curvedClip)"
                    preserveAspectRatio=""
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Page that appears after zoom */}
        <section className="relative w-full min-h-screen bg-black/90 text-white px-6 md:px-12 py-20 overflow-hidden"
        id="builds"
        >
          <ZigZagLine />

          {/* SVG Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1688 1056"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m1045.47 838.1c18.08 23.3 31.31 60.99 6.96 85.04-32.25 31.78-80.5 31.96-88.47 86.82-7.58 62.12 32.01 116.36 48.13 173.99 25.94 73.52-14.77 155.94-99.25 152.13-78.04-1.6-135.98-60.25-201.9-93.96-63.52-34.18-135.12-60.77-182.42-117.71-43.72-55.61-58.77-138.04-31.19-203.94 29.62-66.82 111.13-56.53 171.5-55.29 70.79 1.74 138.03-37.62 169.05-101.67 18.48-39.06 38.81-86.76 87.93-50.02 31.88 24.96 58.05 56.21 86.28 85.04 11.52 12.3 23.24 24.49 33.3 39.58l0.08-0.02zm-417.86 203.29c50.73 75.59 303.25 222.24 286.8 34.19-6.78-57.18-7.44-99.73 33.14-145.14 27.46-30.69 33.01-79.52-4.52-104.64-68.65-40.3-97.06 97.25-266.83 93.77-15.65 0.74-31.11 2.51-45.74 8.71-48.31 21.9-28.34 79.23-2.85 113.12q0-0.01 0-0.01z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m212.67 126.19c-21.58-6.91-133.88-14.18-109.08-50.66 29.64-35.68 63.85-56.46 57.14-106.61-4.01-35.72-39.85-59.37-47.87-93.59-8.95-50.93 59.41-73.02 99.75-82.61 39.85-9.58 82.31-6.48 120 7.73 35.07 12.97 65.78 31.06 98.66 47.69 46.85 26.65 144.79 42.08 144.02 109.12-19.15 74.2-124.18 58.5-183.56 71.13-40.27 7.13-72.85 21.11-71.19 66.65-5.23 50.18-73.37 37.84-107.86 31.15zm6.9-262.92c-35.01 4.95-52.11 26.71-31.71 58.28 13.13 20.65 22.71 43.7 20.98 68.44-0.64 13.75-3.79 27.32-8.89 40.8-4.12 11.6-10.2 23.89-6.92 36.19 6.56 20.06 34.31 23.09 53.39 18.3 46.25-11.48 39.62-56.89 95.35-74.46 24.99-9.97 54.07-14.04 75.61-30.93 22.79-17.82 10.71-42.12-8.13-56.22-52.91-38.78-123.04-68.61-189.7-60.41v0.02h0.02z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m676.24 289.72c2.6 70.02-25.34 142.97-106.83 141.12-34.26 0.78-67.62-8-101.66-10.02-48.2-2.77-95.83 7.5-143.78 10.58-136.28 12.49-274.97-83.55-306.91-217.42-7.43-27.2 1.93-60.41 29.18-72.53 99.92-42.83 189 123.16 338.96-4.07 21.62-19.77 39.78-43.23 64.24-59.79 51.23-33.31 126.56-34.17 175.05 4.68 38.05 34.03 38.83 90.11 45.96 137.18 3.33 23.02 5.82 46.14 5.8 70.29v-0.04q0 0.01-0.01 0.02zm-140.55 81.81c129.19 11.15 84.88-288.08-52.74-234.16-80.12 37.39-99.96 97.7-205.01 101.38-23.04 1.95-47.05 0.38-68.7 9.79-73.45 40.79 20.57 120.93 73.92 122.35 43.48 5.58 87.21-1.42 130.6-4.6 40.94-4.77 81.25 1.9 121.93 5.2l-0.02 0.04z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m1548.78 62.99c-22.35 52.18-45.61 109.6-113.15 103.62-34.6-2.57-69.51-17.17-91.86-44.38-15.2-18.59-23.93-41.05-36.17-61.47-30.05-54.11-94.14-80.1-154.1-68.98-28.7 3.77-58.69 9.55-86.9 0.02-33.83-10.14-46.64-46.28-27.92-76.04 55.91-96.87 186.14-139.48 289.39-98.18 18.37 7 36.47 14.75 54.51 22.6 17.85 7.77 36.09 14.35 54.98 18.97 26.98 6.31 55 7.21 81.5 15.77 88.96 25.19 59.52 126.9 29.68 188.04l0.04 0.02zm-96.35-154.84c-82.48-7.69-167.13-89.54-247.75-35.84-21.3 13.52-30.92 43.92-8.27 61.13 14.68 12.32 33.74 16.7 51.24 23.56 32.01 11.22 61.51 30.53 81.09 58.6 24.9 32.55 46.73 79.22 92.84 82.51 60.68-0.06 96.41-71.16 100.07-124.5 3.69-45.6-29.16-61.74-69.22-65.43v-0.02z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m1669.81 975.58c21.05 67.34 14.1 144.01-65.31 164.49-32.82 9.89-67.3 10.35-100.67 17.46-47.2 10.18-90.34 32.81-135.74 48.55-128.04 48.4-287.29-7.19-353.81-127.68-14.4-24.24-14.24-58.73 8.77-77.68 84.76-67.92 215.1 68.25 325.54-94.35 15.58-24.82 26.82-52.28 45.98-74.78 40.46-45.78 112.88-66.69 169.95-42.17 45.77 22.66 61.43 76.49 80.9 119.96 9.34 21.31 17.91 42.91 24.33 66.19l0.06 0.02zm-113.62 116.34c127.49-23.84 4.89-300.31-113.29-211.62-67.23 57.4-70.28 120.85-170.52 152.4-21.67 8.02-45.25 12.92-63.6 27.75-59.9 58.89 52.09 111.09 103.88 98.21 43.38-6.22 83.68-24.63 124.62-39.28 38.21-15.53 78.83-19.84 118.91-27.5z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m716.16 784.69c-35.32 68.66-130.62 58.67-124.82 0.04-2.1-31.44 5.39-60.57 19.19-88.51 17-34.99 40.06-66.52 58.59-100.67 26.65-46.83 33.68-100.49 42.51-152.75 10.57-74.43 52.71-138.29 91.82-200.72 51.67-85.33 129.15-87.11 206.66-33.44 71.07 51.49 202.24 169.92 218.69 256.52 12.71 63.89-37.59 118.99-94.31 139.85-59.05 22.44-123.45 20.71-185.03 31.17-93.26 15.01-181.4 69.46-233.33 148.5q0.02 0 0.03 0.01zm46.58-219.91c-2.09 25.87 12.27 47.3 40.28 41.26 21.12-4.4 38.59-17.86 57.44-27.58 63.72-37.63 139.04-36.42 210.32-43.75 187.57-26.81-8.7-255.96-112.08-263.12-126.32-19.8-183.51 197.95-195.98 293.21z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m1577.53 260.18c51.6 46.7 86.44 111.89 74.22 203.25-5.09 65.74-27.76 134.51-82.79 174.87-56.81 45.09-148.32 51.54-198.96-6.18-36.28-39.98-52.27-93.17-72.45-142.2-51.54-154.22-125.01-338.41-307.23-364.12-58.18-30.12 37.93-70.37 105.48-78.93 93.99-12.38 118.7 1.46 149.81 53.93 70.19 164.07 212.77 80.89 331.84 159.41l0.08-0.02zm-227.52 219.27c86.04 232.2 290.08-18.32 157.83-166.5-37.72-49.59-102.28-38.69-157.01-42.61-55.02-3.96-91.17-41.01-122.18-82.92-40.3-48.12-56.1-13.34-26.55 27.98 83.72 106.54 106.58 131.66 147.91 264.05z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m921.13 1.29c-0.56 62.06-51.32 110.93-90.72 154.06-59.93 58.62-102.77 7.84-135.03-47.66-45.74-69.6-105.7-109.87-20.33-182.08 41.46-34.19 77.35-79.35 128.35-99.38 97.78-27.81 111.91 107.21 117.73 175.06zm-61.73 11.6c-1.8-47.43-3.06-141.61-75.54-102.7-46.66 29.8-99.23 69.07-50.76 124.68 19.76 21.77 38.33 47.55 65.69 60.01 48.58 17.89 61.88-46.66 60.61-82z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m1331.49 824.93c28.4-52.39 7.98-111.95-4.78-165.52-11.23-44.35-50.11-83.83-98.52-66.15-51 20.02-86.88 65.19-128.35 99.37-89.45 75.26-18.85 117.55 25.21 189.75 31.39 54.22 74.64 94.75 130.15 39.99 28.77-29.51 56.42-61.13 76.29-97.44zm-53.43-112.43c5.15 43.17 15.4 99.88-11.16 137.52-38.04 43.89-83.61-20.26-109-48.13-48.46-55.61 4.1-94.91 50.76-124.69 34.78-20.91 63.83-3.3 69.4 35.3z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m69.69 481.92c21.36-20.32 57.53-37.32 83.91-15.49 34.85 28.88 39.9 76.92 95.29 79.31 62.57 1.3 112.55-43.56 168.28-65.38 70.54-33.21 156.64-0.98 161.33 83.46 6.27 77.81-46.28 141.31-73.17 210.3-27.64 66.64-46.86 140.55-98.77 193.32-50.94 49.09-131.42 72.34-199.77 51.54-69.47-22.76-67.44-104.88-72.24-165.09-5.41-70.62-51.27-133.56-118.16-157.99-40.73-14.49-90.2-29.9-58.61-82.49 21.64-34.22 50.05-63.42 75.91-94.39 11.08-12.7 22.03-25.57 36.03-37.11l-0.04 0.02q0.01 0 0.01-0.01zm244.27 395.3c70.11-58.09 190.64-324.02 5.17-288.81-56.17 12.49-98.51 17.44-147.74-18.38-33.33-24.23-82.42-24.82-103.64 15.06-33.16 72.35 106.48 86.77 120.11 256.03 2.3 15.5 5.64 30.69 13.26 44.63 26.67 45.85 81.64 20.23 112.81-8.52h0.04z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="m85.81 975.58c21.04 67.34 14.11 144-65.31 164.49-32.82 9.89-67.3 10.35-100.67 17.46-47.2 10.18-90.35 32.81-135.75 48.55-128.03 48.4-287.29-7.19-353.8-127.68-14.41-24.24-14.25-58.73 8.77-77.68 84.76-67.92 215.09 68.25 325.54-94.35 15.57-24.83 26.82-52.28 45.98-74.78 40.46-45.78 112.88-66.69 169.95-42.17 45.76 22.66 61.43 76.49 80.9 119.96 9.35 21.31 17.92 42.91 24.33 66.19l0.06 0.02zm-113.62 116.34c127.49-23.84 4.89-300.32-113.28-211.62-67.24 57.38-70.28 120.85-170.53 152.4-21.67 8.02-45.24 12.92-63.6 27.75-59.91 58.89 52.09 111.1 103.88 98.21 43.38-6.22 83.68-24.63 124.63-39.28 38.2-15.53 78.82-19.84 118.9-27.5z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Welcome to My World
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-semibold font-[poppins]">
                  About Me
                </h3>
                <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed hostgrotesk">
                  I'm Olokode Elijah Taiwo, a Frontend Developer focused on
                  building modern, scalable, and user-friendly web applications.
                  I specialize in using
                  <span className="font-medium"> React.js</span> to create
                  dynamic interfaces and{" "}
                  <span className="font-medium">Tailwind CSS</span> to craft
                  responsive, clean, and visually consistent designs.
                  <br />
                  <br />I enjoy transforming ideas and designs into seamless
                  digital experiences, paying close attention to performance,
                  accessibility, and usability. Driven by continuous learning, I
                  stay up to date with modern frontend practices and thrive in
                  collaborative environments where design and engineering work
                  together.
                </p>
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Skills</h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map(({ name, icon }, i) => (
                    <motion.span
                      key={name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm"
                    >
                      <img
                        src={icon}
                        alt={name}
                        className="w-4 h-4 object-contain"
                      />
                      {name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-semibold mb-8">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ProjectDone.map((project) => (
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white/5 rounded-2xl p-6 cursor-pointer backdrop-blur-sm"
                  >
                    <div className="relative group w-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="aspect-video bg-white/10 rounded-lg mb-4  object-fill"
                      />

                      {/* Hover overlay */}
                      <a
                        href={project.links} // replace with your actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-semibold opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-100"
                      >
                        Visit Site
                      </a>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <SocialSection />
        </section>
      </div>
    </div>
  );
}

export default App;
