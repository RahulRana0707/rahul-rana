import CryptoCastle from "../assets/images/CryptoCastle.png";

export const projectContent = {
  heading: "Projects",
  description:
    "Following projects showcases my skills and experience through real-world examples of my work. Each pprojects is briefly described with links to code repositries and the live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively",
  projects: [
    {
      name: "Crypto Castle",
      img: CryptoCastle,
      description:
        "Our project is a cryptocurrency tracking platform with trending coins, a structured table of all cryptocurrencies, exchange listings, pagination, light/dark modes, a search bar, and detailed coin info in multiple currencies",
      github: "https://github.com/RahulRana0707/Crypto-Project",
      live: "https://crypto-castle.vercel.app/",
      tech: [
        { name: "SCSS", bgColor: "#cd6799" },
        { name: "Chakra UI", bgColor: "#2ABFB3" },
        { name: "Axios", bgColor: "#6A3EE7" },
        { name: "React", bgColor: "#00D1F7" },
      ],
    },
  ],
};
