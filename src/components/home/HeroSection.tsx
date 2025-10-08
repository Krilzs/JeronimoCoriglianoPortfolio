import { useRef, useEffect, useState } from "react";
import { Box, Flex, Text, AbsoluteCenter } from "@chakra-ui/react";
import { gsap } from "gsap";
import HeroTypewriter from "./TypeWriterConsole";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaEgg } from "react-icons/fa";
function HeroSection() {
  // Referencia al contenedor de la izquierda que tiene el texto animable
  const textContentRef = useRef<HTMLDivElement>(null);

  const [isClose, setIsClose] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleCloseConsole = () => {
    setIsClose(true);
  };

  useEffect(() => {
    if (textContentRef.current) {
      const elementsToAnimate = gsap.utils.toArray(
        textContentRef.current.querySelectorAll("h1, h2, p")
      ) as HTMLElement[];

      gsap.set(elementsToAnimate, { y: 20, autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
        delay: 0.5,
      });

      tl.to(elementsToAnimate, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15, // Retraso escalonado entre cada elemento
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      id="inicio"
      h={"100vh"}
      bg={"bg.secondary"}
      w={"100%"}
      pt={{ lg: "0", md: "5rem", base: "5rem" }}
      flexDirection={{ lg: "row", md: "column", base: "column" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* Contenedor de la izquierda para el texto */}
      <Box
        ref={textContentRef} // Asignamos la referencia aquí
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ base: "center", md: "flex-start" }} // Alinear a la izquierda en desktop, centrar en móvil
        justifyContent={"center"}
        w={"100%"}
        fontFamily={"Zalando Sans Expanded"}
        px={{ base: "1rem", md: "1rem", lg: "5rem" }} // Ajusté un poco el padding izquierdo para lg
        h={"100%"}
        textAlign={{ base: "center", md: "left" }} // Alinear texto para que coincida con el contenedor
      >
        {/* Jeronimo Corigliano (título principal) */}
        <Text
          as="h1" // Semánticamente importante para SEO y accesibilidad
          textStyle={{ lg: "7xl", md: "5xl", sm: "5xl", base: "4xl" }}
          color={"brand.500"}
          pt={{ lg: "0", md: "5rem", sm: "5rem" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          lineHeight={"shorter"}
          width={{ lg: "45rem", md: "100%", sm: "100%" }}
        >
          Jeronimo Corigliano
        </Text>

        {/* Desarrollador Full-Stack (subtítulo) */}
        <Text
          as="h2" // Semánticamente importante
          width={{ lg: "45rem", md: "100%", sm: "100%" }}
          textStyle={{ lg: "3xl", md: "2xl", sm: "2xl" }}
          color={"gray.300"}
          mt={2} // Margen superior para separarlo del título
        >
          Desarrollador Full-Stack
        </Text>

        {/* Texto descriptivo */}
        <Text
          as="p" // Semánticamente importante
          color={"gray.300"}
          width={{ lg: "45rem", md: "100%", sm: "100%" }}
          mt={4} // Margen superior para separarlo del subtítulo
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsum deleniti dolore quo sequi blanditiis, earum voluptatem
          laudantium error adipisci!
        </Text>
      </Box>

      {/* Contenedor de la derecha */}

      <Box w={"100%"} h={"100%"} position={"relative"}>
        <AbsoluteCenter w={"80%"} h={"100%"} color={"brand.500"}>
          {!isClose && (
            <HeroTypewriter handleCloseConsole={handleCloseConsole} />
          )}
          {isClose && (
            <Flex
              fontSize={"2xl"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              color={"lightblue"}
              animation={"pulse"}
              fontWeight={"bold"}
            >
              <FaEgg size={100} />
              Easter Egg Encontrado
            </Flex>
          )}
        </AbsoluteCenter>
      </Box>

      {/* Flecha indicadora de scroll */}
      <Box
        position={"fixed"}
        top={"90%"}
        color={"brand.500"}
        animation={"bounce"}
        opacity={isScrolled ? 0 : 1}
        transition={"opacity 0.3s ease-in-out"}
        _hover={{ transform: "scale(1.05)" }}
      >
        <MdKeyboardArrowDown
          size={60}
          color={"green.400"}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        />
      </Box>
    </Flex>
  );
}

export default HeroSection;
