import { useRef, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import type { NavLinkProps } from "./NavLinkType";
import { MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// Asegúrate de importar tu CSS si tienes estilos base para el menú

// 1. Tipificación correcta para `onClose`
interface BurgerMenuProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  navLinks: NavLinkProps[];
  handleClickOnSection: (
    e: React.MouseEvent<HTMLDivElement>,
    href: string
  ) => void;
  // onClose puede ser opcional y es una función que no retorna nada
}

function BurgerMenu({
  isOpen,
  onClose,
  navLinks,
  handleClickOnSection,
}: BurgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // **IMPORTANTE**: Este useEffect se ejecuta SOLO UNA VEZ al montar el componente.
  // Es para establecer la posición INICIAL del menú.
  useEffect(() => {
    if (menuRef.current) {
      // Establece el menú en su posición inicial "oculta" fuera de la pantalla.
      // Esto previene que se muestre brevemente antes de cualquier animación.
      gsap.set(menuRef.current, { y: "-100%", autoAlpha: 0 });
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: "0%",
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          autoAlpha: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <Box
      ref={menuRef}
      position="fixed"
      top="0"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      left="0"
      width="100%"
      height="100dvh"
      bg="rgba(0,0,0,0.96)"
      zIndex="999"
    >
      {/* Botón de cerrar, ahora con margen para no pegarse al borde */}
      <Box p={4} display="flex" justifyContent="flex-end">
        <IconButton
          variant={"ghost"}
          onClick={() => onClose(false)}
          aria-label="Cerrar menú" // Accesibilidad
          color="white" // Color del texto del botón
          _hover={{ bg: "whiteAlpha.200" }} // Efecto hover
        >
          <MdClose />
        </IconButton>
      </Box>

      <VStack p={8} flexGrow={1} color="white" fontSize="2xl">
        {navLinks.map((link, index) => (
          <Box
            as={"a"}
            key={index}
            w={"full"}
            color={"brand.500"}
            onClick={(e) => handleClickOnSection(e, link.href)}
            cursor={"pointer"}
          >
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              {link.label}
            </Text>
            <Separator />
          </Box>
        ))}
      </VStack>
      <Flex justifyContent={"center"} gap={5} align={"center"} py={5}>
        <Link
          href="https://www.linkedin.com/in/jeronimo-fernandez-corigliano-694195288/"
          target="_blank"
        >
          <IconButton
            variant={"ghost"}
            colorPalette={"green"}
            size={"lg"}
            p={0}
          >
            <FaLinkedin />
          </IconButton>
        </Link>
        <Link href="https://github.com/Krilzs" target="_blank">
          <IconButton
            variant={"ghost"}
            colorPalette={"green"}
            size={"lg"}
            p={0}
          >
            <FaGithub />
          </IconButton>
        </Link>
      </Flex>
    </Box>
  );
}

export default BurgerMenu;
