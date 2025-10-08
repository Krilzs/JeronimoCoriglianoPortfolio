import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { projects as data } from "@/data/projects";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useState } from "react";
import Slider from "./Slider";

function Projects() {
  const projects = data;
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  // En mobile, vamos a permitir avanzar / retroceder entre proyectos
  const goToNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <Box
      id="proyectos"
      h={"100vh"}
      pt={"5rem"}
      display={"flex"}
      alignItems={"center"}
      gap={{ md: "10" }}
      flexDirection={{ base: "column", md: "row" }}
      px={{ base: "1rem", lg: "5rem" }}
      w={"100%"}
      fontFamily={"Zalando Sans Expanded"}
      bg={"bg.primary"}
      color={"brand.500"}
    >
      <Box w={"100%"} alignItems={"center"} display={"flex"} flexDir={"column"}>
        <Text as="h2" mb={2} fontSize={"4xl"} fontWeight={"bolder"}>
          Proyectos
        </Text>

        <Text
          lineHeight={2}
          textAlign={"center"}
          fontSize={"xs"}
          color={"gray.200/30"}
          display={{ base: "none", md: "block" }}
        >
          Clickea las opciones para ver mas informacion
        </Text>
        {/* Lista en desktop, navegación en mobile */}
        <Stack
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          flexDirection={"column"}
          w={{ md: "50%" }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              border={"2px solid"}
              borderColor={
                selectedProject.id === project.id ? "green.400" : "brand.500"
              }
              bg={
                selectedProject.id === project.id
                  ? "brand.500/10"
                  : "brand.500/30"
              }
              _hover={{ bg: "brand.500", color: "green.700" }}
              cursor="pointer"
              p={3}
              mt={2}
              transition="0.2s"
              onClick={() => setSelectedProject(project)}
            >
              {project.type}
            </Box>
          ))}
        </Stack>
      </Box>
      {/* Mobile navigation */}
      <Text
        lineHeight={2}
        textAlign={"center"}
        w={"100%"}
        fontSize={"xs"}
        color={"gray.200/30"}
        display={{ base: "block", md: "none" }}
      >
        Utiliza las flechas para navegar
      </Text>
      <Box
        marginY={"2rem"}
        w={"100%"}
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Button
          variant={"ghost"}
          color="brand.500"
          p={0}
          size="md"
          onClick={goToPrev}
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>
        <Text fontWeight="bold">{selectedProject.type}</Text>
        <Button
          variant={"ghost"}
          p={0}
          size="md"
          color="brand.500"
          onClick={goToNext}
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </Box>

      {/* Slider */}
      <Slider selectedProject={selectedProject} />
    </Box>
  );
}

export default Projects;
