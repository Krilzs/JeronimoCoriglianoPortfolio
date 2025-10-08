import { Box, Button, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiGithubFill } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import type { IconType } from "react-icons";

interface Stack {
  name: string;
  icon: IconType; // 👈 ahora es un icono de react-icons
}

interface Project {
  id: number;
  type: string;
  name: string;
  description: string;
  images: string[];
  page?: string;
  repository?: string;
  stack?: Stack[];
}

interface SliderProps {
  selectedProject: Project;
}

function Slider({ selectedProject }: SliderProps) {
  return (
    <Box
      position="relative"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="start"
      w={{ base: "100%", md: "70%" }}
      textAlign={"start"}
      h={{ md: "80%", base: "fit-content" }}
    >
      <Text
        w={"100%"}
        color={"gray.200"}
        fontWeight={"bold"}
        as={"h3"}
        fontSize={"2xl"}
      >
        {selectedProject.name}
      </Text>

      <Text w={"100%"} color={"gray.400"} mb={3}>
        {selectedProject.description}
      </Text>

      <Flex gap="4" flexWrap="wrap" alignItems={"center"} mb={3}>
        <Text fontWeight={"bold"}>Stack:</Text>
        {selectedProject.stack?.map((stack) => (
          <Flex
            key={stack.name}
            alignItems="center"
            gap={2}
            bg="gray.700"
            px={3}
            py={1}
            rounded="md"
          >
            <Icon as={stack.icon} w={6} h={6} /> {/* renderiza el IconType */}
            <Text fontSize="sm">{stack.name}</Text>
          </Flex>
        ))}
      </Flex>

      <Box
        display={"flex"}
        w={"100%"}
        gap={2}
        justifyContent={"start"}
        my={"1rem"}
      >
        {selectedProject.repository && (
          <Link href={selectedProject.repository} target="_blank">
            <Button bg={"brand.500"}>
              <RiGithubFill /> Repositorio
            </Button>
          </Link>
        )}

        {selectedProject.page && (
          <Link href={selectedProject.page} target="_blank">
            <Button
              variant={"surface"}
              color={"brand.500"}
              border={"brand.500"}
            >
              <TbWorldWww /> Sitio
            </Button>
          </Link>
        )}
      </Box>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {selectedProject.images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={selectedProject.name}
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
