import Image2 from "../../../public/assets/img/portfolio/haw/1.png";
import Image3 from "../../../public/assets/img/portfolio/nudx/1.png";
import Image4 from "../../../public/assets/img/portfolio/fleet-guard/1.png";

const PortfolioData = [
  {
    id: 2,
    type: "Quellenchecker",
    image: Image2,
    tag: [""],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web App",
        client: "HAW Hamburg UNI",
        language: "React.js, Node.js, Express.js, TypeScript, MongoDB",
        preview: "Bildung",
        link: "",
      },
    ],
  },
  {
    id: 3,
    type: "nu-dx:cycler",
    image: Image3,
    tag: [],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Desktop App",
        client: "nu:healthcare GmbH",
        language: "React.js, Electron.js, TypeScript, Node.js",
        preview: "Forschung",
        link: "",
      },
    ],
  },

  {
    id: 4,
    type: "fleet guard",
    image: Image4,
    tag: [""],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Web App",
        client: "Hamburg Verkehrsleitung",
        language: "React.js, Node.js, Express.js, TypeScript, MongoDB",
        preview: "Logistik",
        link: "",
      },
    ],
  },
];

export default PortfolioData;
