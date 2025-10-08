"use client";

import { Box, Container, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      bg="bg.primary" // mismo background que usas en el header al scrollear
      color="green.400"
      py={6}
    >
      <Container
        maxW="6xl"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        {/* Texto de copyright */}
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          © {new Date().getFullYear()} Jeronimo Corigliano. Todos los derechos
          reservados.
        </Text>

        {/* Redes sociales */}
        <Flex gap={4} justify={{ base: "center", md: "flex-end" }}>
          <Link href="https://github.com/Krilzs" target="_blank">
            <IconButton
              aria-label="Github"
              variant="ghost"
              size="lg"
              color="green.400"
              _hover={{ color: "green.300" }}
            >
              {<FaGithub />}
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeronimo-fernandez-corigliano-694195288/"
            target="_blank"
          >
            <IconButton
              aria-label="LinkedIn"
              variant="ghost"
              size="lg"
              color="green.400"
              _hover={{ color: "green.300" }}
            >
              {<FaLinkedin />}
            </IconButton>
          </Link>

          <Link href="mailto:tuemail@gmail.com">
            <IconButton
              aria-label="Email"
              variant="ghost"
              size="lg"
              color="green.400"
              _hover={{ color: "green.300" }}
            >
              {<FaEnvelope />}
            </IconButton>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
