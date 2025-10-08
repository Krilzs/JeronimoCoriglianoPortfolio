import { Box, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const webTechnologies = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
];

const dataBases = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiMysql },
];

const tools = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Supabase", icon: SiSupabase },
];

function MyStack() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%", // cuando el top del elemento llegue al 60% de la pantalla
          },
        }
      );
    });
  }, []);

  return (
    <Box w="100%" p={6}>
      <Grid templateRows="repeat(3, auto)" gap={10}>
        {/* Tecnologías Web */}
        <GridItem
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
        >
          <Text fontSize="2xl" color={"gray.300"} fontWeight="bold" mb={4}>
            Tecnologías Web
          </Text>
          <Flex wrap="wrap" gap={6}>
            {webTechnologies.map((tech, idx) => (
              <Box
                key={idx}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                textAlign="center"
                minW="100px"
              >
                <tech.icon size="2em" style={{ margin: "0 auto" }} />
                <Text fontSize="lg" mt={2}>
                  {tech.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </GridItem>

        {/* Bases de Datos */}
        <GridItem
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
        >
          <Text fontSize="2xl" fontWeight="bold" color={"gray.300"} mb={4}>
            Bases de Datos
          </Text>
          <Flex wrap="wrap" gap={6}>
            {dataBases.map((db, idx) => (
              <Box
                key={idx}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                textAlign="center"
                minW="100px"
              >
                <db.icon size="2em" style={{ margin: "0 auto" }} />
                <Text fontSize="lg" mt={2}>
                  {db.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </GridItem>

        {/* Herramientas */}
        <GridItem
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
        >
          <Text fontSize="2xl" color={"gray.300"} fontWeight="bold" mb={4}>
            Herramientas
          </Text>
          <Flex wrap="wrap" gap={6}>
            {tools.map((tool, idx) => (
              <Box
                key={idx}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                textAlign="center"
                minW="100px"
              >
                <tool.icon size="2em" style={{ margin: "0 auto" }} />
                <Text fontSize="lg" mt={2}>
                  {tool.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MyStack;
