import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMui,
} from "react-icons/si";

export const projects = [
  {
    id: 1,
    type: "E-commerce",
    name: "Lau Importados",
    description:
      "Tienda online con carrito de compras, pasarela de pagos y panel de administración.",
    images: [
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422258/lauimportados_1_aw47h6.jpg",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422258/lauimportados_2_mujyn2.jpg",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422258/lauimportados_y0gwga.jpg",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422258/lauimportados_3_zae2k1.jpg",
    ],
    page: "https://lauimportados.shop/",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    id: 2,
    type: "Dashboard Admin",
    name: "Jero's Mantenimiento",
    description:
      "Panel de control con métricas, gráficos en tiempo real y gestión de usuarios.",
    images: [
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759421968/jerosMantenimiento1_pj109w.png",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759421966/JerosMantenimiento3_ftezni.png",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759421966/JerosMantenimiento2_rduokf.png",
    ],
    page: "https://jeros-mantenimiento.vercel.app/",
    repository: "https://github.com/Krilzs/Jeros-Mantenimiento-",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    id: 3,
    type: "Portfolio Personal",
    name: "Jero's Portfolio",
    description:
      "Sitio personal para mostrar mis proyectos, experiencia y blog técnico.",
    images: [
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422720/jeroportfolio_vm9wy4.png",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422752/jeroportfolio2_ap0xkd.png",
    ],
    page: "https://jerocorigliano.site/",
    stack: [
      { name: "React", icon: SiReact },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    id: 4,
    type: "App de Gimnasio",
    name: "Gainz App",
    description:
      "Aplicacion web para gestionar ,seguir, modificar y anotar rutinas de entrenamiento. ",
    images: [
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422605/gainz_fsfbsl.jpg",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422599/gainz3_kkt3n1.png",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422600/gainz2_wupzua.png",
      "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759422599/gainz4_fjcu4f.png",
    ],
    page: "https://gainzapp.vercel.app/",
    repository: "https://github.com/Krilzs/GainzApp",
    stack: [
      { name: "React", icon: SiReact },
      { name: "NodeJs", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Material UI", icon: SiMui },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
