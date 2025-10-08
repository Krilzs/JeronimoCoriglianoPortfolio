import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Job {
  name: string;
  description: string;
  date: string;
}

const CurriculumData: Job[] = [
  {
    name: "Tecnicatura en Programación",
    description:
      "Carrera universitaria enfocada en el desarrollo de fundamentos sólidos de programación, bases de datos y pensamiento lógico. Durante este período adquirí conocimientos técnicos clave que sentaron las bases de mi perfil como desarrollador.",
    date: "03/2023 - 11/2024",
  },
  {
    name: "Mantenimiento de Parques",
    description:
      "Junto a mi padre fundamos Jero's Mantenimiento, emprendimiento dedicado al cuidado de espacios verdes. Esta experiencia fortaleció mis habilidades en trabajo en equipo, comunicación, atención al cliente y gestión de recursos.",
    date: "11/2023 - Actualidad",
  },
  {
    name: "Desarrollador Web Full-Stack",
    description:
      "Tras finalizar la Tecnicatura, inicié mi camino como desarrollador full-stack. He trabajado en proyectos propios y desarrollos freelance personalizados, aplicando diversas metodologías de trabajo y utilizando múltiples tecnologías y lenguajes de programación.",
    date: "11/2024 - Actualidad",
  },
];

function Timeline() {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // cuando entra al 80% de la pantalla
            toggleActions: "play none none reverse", // al salir vuelve
          },
          delay: i * 0.1, // opcional: un pequeño stagger
        }
      );
    });

    dotsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 95%", // hasta que llegue al 50%
            scrub: true, // se anima "a medida" que scrolleás
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1, // opcional: un pequeño stagger
        }
      );
    });
  }, []);

  return (
    <Box
      color={"brand.500"}
      position={"relative"}
      w={"100%"}
      h={"fit-content"}
      outlineColor={"brand.500"}
      p={5}
    >
      {/* Línea central */}
      <Box
        position="absolute"
        top={0}
        bottom={0}
        h={"90%"}
        w="4px"
        left={{ base: "95%", md: "50%" }}
        transform="translateX(-50%)"
        bg="brand.500"
      />

      {CurriculumData.map((item, i) => {
        const marginValue = i % 2 === 0 ? 0 : "55%";
        const dotValue = i % 2 === 0 ? "calc(100% + 20px)" : "-20px";
        return (
          <Box
            key={item.name}
            ref={(el: HTMLDivElement | null) => {
              if (el) itemsRef.current[i] = el;
            }}
            position="relative"
            w={{ base: "90%", md: "45%" }}
            ml={{ base: 0, md: marginValue }}
            mb={10}
            p={4}
            bg="brand.500/10"
            borderRadius="md"
            border="1px solid"
            borderColor="green.400"
          >
            <Box
              position="absolute"
              ref={(el: HTMLDivElement | null) => {
                if (el) dotsRef.current[i] = el;
              }}
              top="50%" // altura relativa al card
              left={{ base: "calc(100% + 20px)", md: dotValue }} // a la derecha si está a la izquierda, a la izquierda si está a la derecha
              transform="translateX(-50%)"
              w="16px"
              h="16px"
              bg="white"
              border="3px solid"
              borderColor="brand.500"
              borderRadius="full"
              zIndex={5}
            />
            <Flex gap={2} align="center" flexWrap={"wrap"} alignItems={"end"}>
              <Text fontSize="2xl" fontWeight="bold" color={"gray.200"}>
                {item.name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="bold">
                {item.date}
              </Text>
            </Flex>
            <Text mt={2}>{item.description}</Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default Timeline;
