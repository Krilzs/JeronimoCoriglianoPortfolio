import {
  AbsoluteCenter,
  Box,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import ScrollFadeIn from "../AnimatedComponents/ScrollFadeIn";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
interface RedSocial {
  ico: React.ComponentType; // 👈 o React.FC
  name: string;
  description: string;
  href: string;
}
const redes: RedSocial[] = [
  {
    ico: FaLinkedin,
    name: "LinkedIn",
    description:
      "En mi perfil de LinkedIn podés conocer más sobre mi trayectoria, experiencia y formación profesional, además de conectar conmigo para posibles colaboraciones o proyectos.",
    href: "https://www.linkedin.com/in/jeronimo-fernandez-corigliano-694195288/",
  },
  {
    ico: FaGithub,
    name: "Github",
    description:
      "En mi GitHub vas a encontrar mis proyectos, código abierto y ejemplos de mi trabajo como desarrollador, mostrando mi forma de resolver desafíos técnicos.",
    href: "https://github.com/Krilzs",
  },
  {
    ico: FaMailBulk,
    name: "Jerocorigliano@yahoo.com.ar",
    description:
      "Podés escribirme por correo para consultas, propuestas o colaboraciones. Siempre estoy abierto a nuevas ideas y oportunidades de trabajo.",
    href: "mailto:jerocorigliano@yahoo.com.ar",
  },
];

function AboutMe() {
  return (
    <Flex
      pb={{ base: "2rem", md: "0" }}
      id="quien-soy"
      color={"brand.500"}
      minH={"100vh"}
      h={{ base: "100%", lg: "fit-content" }}
      bg={"bg.secondary"}
      pt={{ md: "5rem", base: "5rem" }}
      flexDirection={{ lg: "row", md: "column", base: "column" }}
      alignItems={"center"}
      justifyContent={"center"}
      fontFamily={"Zalando Sans Expanded"}
      px={{ base: "1rem", md: "1rem", lg: "5rem" }}
      w={"100%"}
    >
      <Box
        w={"100%"}
        maxH={"25%"}
        position={"relative"}
        h={{ base: "50%", md: "100%" }}
      >
        <AbsoluteCenter w={"100%"} color={"brand.500"}>
          <Image
            loading="lazy"
            w={{ base: "100%", md: "75%" }}
            h={{ base: "100%", md: "75%" }}
            filter={"drop-shadow(10 10 10 #4ade80)"}
            borderImage={"1px solid red"}
            src={
              "https://res.cloudinary.com/dnf9ulalk/image/upload/v1759421530/Gemini_Generated_Image_rwfrflrwfrflrwfr_4_wxlrfm.png"
            }
          />
        </AbsoluteCenter>
      </Box>
      <Box w={"100%"} h={"fit-content"} p={{ base: "0", md: "5" }}>
        <ScrollFadeIn>
          <Text as={"h2"} mb={2} fontSize={"4xl"} fontWeight={"bolder"}>
            Quien Soy
          </Text>
          <Text color={"gray.200"} as={"p"}>
            Soy un desarrollador web apasionado por crear experiencias digitales
            funcionales y atractivas. Me gusta combinar diseño y tecnología para
            construir soluciones que aporten valor real. Busco seguir creciendo,
            aprendiendo y participando en proyectos que representen nuevos
            desafíos creativos y técnicos.
          </Text>
          <Box h={"100%"} pt={5}>
            <Text as={"h3"} fontSize={"2xl"}>
              Redes / Mas Sobre Mi
            </Text>
            <Stack h={"100%"}>
              {redes.map((red) => {
                const Icon = red.ico;

                return (
                  <Link
                    key={red.name}
                    flexDirection="column"
                    alignItems="start"
                    href={red.href}
                    target="_blank"
                    _hover={{ transform: "scale(.97)", bg: "green.800" }}
                    transition="transform 0.2s ease-in-out"
                    _active={{ transform: "scale(.97)", bg: "green.800" }}
                    cursor="pointer"
                    h="100%"
                    border="2px solid"
                    borderColor="brand.500"
                    p={5}
                  >
                    <Text
                      display="flex"
                      alignItems="center"
                      gap={2}
                      as="h4"
                      fontSize="lg"
                    >
                      <Icon />
                      {red.name}
                    </Text>
                    <Text color="gray.200" fontSize={{ base: "xs", md: "md" }}>
                      {red.description}
                    </Text>
                  </Link>
                );
              })}
            </Stack>
          </Box>
        </ScrollFadeIn>
      </Box>
    </Flex>
  );
}

export default AboutMe;
