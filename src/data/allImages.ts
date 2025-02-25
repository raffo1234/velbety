import laive1 from "../assets/laive1.png";
import laiveSmall1 from "../assets/laiveSmall1.png";
import meratiSmall1 from "../assets/meratiSmall1.png";
import cancinoSmall1 from "../assets/cancinoSmall1.png";
import merati1 from "../assets/merati1.png";

const allImages = [
  { 
    smallImages: [laiveSmall1.src],
    bigImages: [laive1.src, merati1.src],
    href: "/portfolio/laive",
  },
  { 
    smallImages: [meratiSmall1.src],
    bigImages: [laive1.src, merati1.src],
    href: "/portfolio/merati",
  },
  { 
    smallImages: [cancinoSmall1.src],
    bigImages: [laive1.src, merati1.src],
    href: "/portfolio/cancino",
  },
];

export default allImages;
