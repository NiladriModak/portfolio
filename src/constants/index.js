import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have skills in front-end technologies like React as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Educate India (Education at just Rs 20)",
    image: project1,
    github: "https://github.com/NiladriModak/EducateIndia",
    link: "https://educate-india-jade.vercel.app/",
    description:
      "Education Platform :Implemented a comprehensive education platform for weaker sections of society having financial problems aiming to provide education at just Rs 20.Student Developed features for student registration, course learnings, and progress tracking using Prisma for efficient database management.– Interactive Lessons:Built interactive lessons and quizzes using React.js to enhance the learning experience.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Express Js",
    ],
  },
  {
    title: "Advertising Hub",
    image: project2,
    github: "https://github.com/NiladriModak/AdHub_Frontend",
    link: "https://ad-hub-frontend-wine.vercel.app/",
    description:
      "An application for advertising different products and take review from the viewers and providing them the correct location from where they can buy those displayed products.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express Js"],
  },
  {
    title: "EConnect",
    image: project3,
    github: "https://github.com/NiladriModak/EconnectFrontend",
    link: "https://chat-front-mu.vercel.app/login",
    description:
      "A chatting application using web socket. Which enables to chat with users in real time",
    technologies: ["WebSockets", "React", "Node.js", "MongoDB", "Express Js"],
  },
  {
    title: "Hisab Rakkho",
    image: project4,
    github: "https://github.com/NiladriModak/HisabRakhoFrontend",
    link: "https://hisab-rakho-frontend.vercel.app/#/Login",
    description:
      "A platform for maintaing the inventory of a business along with integration of making bills.The dues to the manufacturers are also stored",
    technologies: ["React", "Node.js", "MongoDB", "Express Js"],
  },
];

export const CONTACT = {
  address: "30/1 RAJA RAJENDRA LAL MITRA ROAD KOLKATA - 700085 ",
  phoneNo: "+91 6291508144 ",
  email: "niladrimodakk2001.com",
};
