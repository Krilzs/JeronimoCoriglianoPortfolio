import { Box, Flex, Text } from "@chakra-ui/react";
import DownloadCV from "../curriculum/CvButton";

function Resume() {
  return (
    <Box
      fontFamily={"Zalando Sans Expanded"}
      px={{ base: "1rem", lg: "5rem" }}
      bg={"bg.secondary"}
      h={{ base: "20%", md: "10%" }}
      textAlign={"center"}
      w={"100%"}
    >
      <Text
        as="h2"
        mb={2}
        fontSize={"4xl"}
        color={"brand.500"}
        fontWeight={"bolder"}
      >
        Curriculum / Resume
      </Text>
      <Flex flexDir={{ base: "column", md: "row" }} justifyContent={"center"}>
        <DownloadCV language="es" />
        <DownloadCV language="en" />
      </Flex>
    </Box>
  );
}
export default Resume;
