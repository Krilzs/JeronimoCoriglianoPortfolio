import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import BurgerMenu from "./BurgerMenu";
import type { NavLinkProps } from "./NavLinkType";
import { GiHamburgerMenu } from "react-icons/gi";

gsap.registerPlugin(ScrollToPlugin);

const navLinks: NavLinkProps[] = [
  { label: "Inicio", href: "inicio" },
  { label: "Quién Soy", href: "#quien-soy" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Trayecto", href: "#trayecto" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (open: boolean) => {
    setIsMenuOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.25) {
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

  const handleClickOnSection = (
    e: React.MouseEvent<HTMLDivElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);

    gsap.to(window, {
      duration: 1,
      ease: "power3.out",
      scrollTo: `#${targetId}`,
    });

    toggleMenu(false);
  };

  return (
    <Flex
      fontFamily={"Zalando Sans Expanded"}
      as={"header"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={10}
      bg={isScrolled ? "bg.primary" : "transparent"}
      w={"100%"}
      h={"5rem"}
      color={isScrolled ? "green.400" : "green.400"}
      transition="background-color 0.3s ease"
    >
      <Container
        display="flex"
        maxW={"6xl"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          as={"h1"}
          cursor={"pointer"}
          fontSize={"2xl"}
          onClick={(e) => handleClickOnSection(e, "inicio")}
          fontWeight={"bold"}
        >
          Jeronimo Corigliano
        </Text>
        <Flex
          gap={5}
          align={"center"}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        >
          {navLinks.map((link, index) => (
            <Box
              as={"a"}
              key={index}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleClickOnSection(e, link.href)
              }
              cursor={"pointer"}
            >
              <Text fontSize={"xl"}>{link.label}</Text>
            </Box>
          ))}
        </Flex>
        <IconButton
          onClick={() => toggleMenu(true)}
          display={{ lg: "none", md: "flex", sm: "flex" }}
          aria-label="Boton de menú"
          variant="ghost"
          color={"green.400"}
          p={1}
          size={"lg"}
        >
          <GiHamburgerMenu />
        </IconButton>
      </Container>
      <BurgerMenu
        handleClickOnSection={handleClickOnSection}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        navLinks={navLinks}
      />
    </Flex>
  );
}

export default Header;
