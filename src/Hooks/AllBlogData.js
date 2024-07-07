import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";
import img2 from "../../public/assets/img/blog/blog-post-2.jpg";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "website",
      description: `Maßgeschneiderte Webentwicklung für Unternehmen jeder Größe, 
      um die Online-Präsenz zu verbessern und Geschäftswachstum zu fördern.`,
    },
    {
      id: 2,
      img: img2,
      title: "web app",
      description: `Die Entwicklung von Webanwendungen ermöglicht es Unternehmen, 
      ihren Kunden einen Online-Service anzubieten und ihr Geschäft optimal zu präsentieren.`,
    },
    {
      id: 3,
      img: img3,
      title: "mobile app",
      description: `Die Entwicklung einer benutzerfreundlichen mobilen App ermöglicht es Unternehmen, 
      ihren Kunden einen Service anzubieten und die Kundenbindung zu stärken.`,
    },
    {
      id: 4,
      img: img4,
      title: "desktop app",
      description: `Die Entwicklung einer Desktopanwendung, die sowohl benutzerfreundlich als 
      auch ästhetisch ansprechend gestaltet ist und auf allen Betriebssystemen funktioniert.`,
    },
    {
      id: 5,
      img: img5,
      title: "ux/ui design",
      description: `UX/UI Design-Erstellung, der die Benutzererfahrung auf ein völlig neues Niveau heben 
      und verbessern wird, ist von entscheidender Bedeutung.`,
    },
    {
      id: 6,
      img: img6,
      title: "hosting / wartung",
      description: `Sicherstellung eines reibungslosen Webhostings und konsequente Wartung, 
      um Ihre Onlinepräsenz zu sichern und sie auf dem neusten Stand zu halten.`,
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
