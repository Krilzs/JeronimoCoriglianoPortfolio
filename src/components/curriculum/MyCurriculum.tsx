import { Box, Flex, Text } from "@chakra-ui/react";
import Timeline from "./TimeLine";
import MyStack from "./Stack";
function Curriculum() {
  return (
    <Flex
      fontFamily={"Zalando Sans Expanded"}
      py={"5rem"}
      bg={"bg.primary"}
      id="trayecto"
      px={{ base: "1rem", lg: "5rem" }}
      color={"brand.500"}
      flexDir={{ base: "column", md: "row" }}
      gap={5}
    >
      <Box w={"100%"} display={"flex"} flexDir={"column"}>
        <Text as="h2" mb={2} fontSize={"4xl"} fontWeight={"bolder"}>
          Trayecto
        </Text>
        <Timeline />
      </Box>
      <Box w={"100%"} display={"flex"} flexDir={"column"}>
        <Text as="h2" mb={2} fontSize={"4xl"} fontWeight={"bolder"}>
          Stack
        </Text>
        <MyStack />
      </Box>
    </Flex>
  );
}

export default Curriculum;
