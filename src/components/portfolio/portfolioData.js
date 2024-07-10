import Image2 from "../../../public/assets/img/portfolio/haw/1.png";
import Image3 from "../../../public/assets/img/portfolio/nudx/1.png";
import Image4 from "../../../public/assets/img/portfolio/fleet-guard/1.png";
import Image5 from "../../../public/assets/img/portfolio/nginx/1.png";

const PortfolioData = [
  {
    id: 3,
    type: "nu-dx:cycler",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Desktop App",
        client: "nu:healthcare GmbH",
        language: "React.js, Electron.js, TypeScript, Node.js",
        preview: "Forschung",
        link: "",
        time: "9 Monate",
        role: "Fullstack Entwickler",
      },
    ],
  },

  {
    id: 4,
    type: "fleet guard",
    image: Image4,
    tag: [""],
    delayAnimation: "300",
    modalDetails: [
      {
        project: "Web App",
        client: "Hamburg Verkehrsleitung",
        language: "React.js, Node.js, Express.js, TypeScript, MongoDB",
        preview: "Logistik",
        link: "",
        time: "3 Monate",
        role: "Fullstack Entwickler",
      },
    ],
  },
  {
    id: 2,
    type: "Quellenchecker",
    image: Image2,
    tag: [""],
    delayAnimation: "400",
    modalDetails: [
      {
        project: "Web App",
        client: "HAW Hamburg UNI",
        language: "React.js, Node.js, Express.js, TypeScript, MongoDB",
        preview: "Bildung",
        link: "",
        time: "3 Monate",
        role: "Fullstack Entwickler",
      },
    ],
  },
  {
    id: 1,
    type: "Web Server",
    image: Image5,
    tag: [""],
    delayAnimation: "500",
    modalDetails: [
      {
        project: "Installation Webserver",
        client: "HAW Hamburg UNI",
        language: "Nginx, MongoDB",
        preview: "Bildung",
        link: "",
        time: "1 Monat",
        role: "Backend Entwickler",
      },
    ],
  },
];

export default PortfolioData;
