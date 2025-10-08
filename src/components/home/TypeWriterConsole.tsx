import { Box, HStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

interface HeroTypewriterProps {
  handleCloseConsole: () => void;
}

export default function HeroTypewriter({
  handleCloseConsole,
}: HeroTypewriterProps) {
  return (
    <Box
      w={"100%"}
      _hover={{ transform: "scale(1.05)" }}
      transition={"transform 0.2s ease-in-out"}
      h={{ lg: "40%", md: "50%", sm: "50%", base: "100%" }}
      bg="gray.900"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      fontFamily="mono"
    >
      {/* Barra superior tipo terminal */}
      <HStack bg="gray.800" p={2}>
        <Box
          w={3}
          h={3}
          borderRadius="full"
          onClick={handleCloseConsole}
          _hover={{ cursor: "pointer" }}
          bg="red.500"
        />
        <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
        <Box w={3} h={3} borderRadius="full" bg="green.500" />
      </HStack>

      {/* Consola */}
      <Box p={4} color="green.400" fontSize="lg">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="color:lightblue">myuser@portfolio</span>:<span style="color:orange">~</span>$ npm run build'
              )
              .pauseFor(1200)
              .typeString("<br/>Building project...")
              .pauseFor(1500)
              .typeString("<br/>Deploying portfolio...")
              .pauseFor(1500)
              .typeString("<br/>Build successful! 🚀")
              .pauseFor(2000)
              .start();
          }}
          options={{
            loop: false,
            delay: 70,
            cursor: "_",
          }}
        />
      </Box>
    </Box>
  );
}
