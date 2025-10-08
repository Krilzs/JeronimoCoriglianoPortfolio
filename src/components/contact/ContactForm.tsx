"use client";

import { useRef, useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  Image,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string, // tu Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, // tu Template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string // tu Public Key
      );

      toaster.create({
        title: "Mensaje enviado correctamente",
        description:
          "Tu mensaje ha sido enviado correctamente, pronto nos pondremos en contacto contigo.",
        duration: 5000,
        closable: true,
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Error al enviar el mensaje",
        description: "Tu mensaje no ha sido enviado. Inténtalo de nuevo.",
        duration: 5000,
        closable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      id="contacto"
      color={"brand.500"}
      fontFamily={"Zalando Sans Expanded"}
      ref={containerRef}
      flexDirection={{ lg: "row", md: "column", base: "column" }}
      w={"100%"}
      py={"5rem"}
      minH={"80vh"}
      alignItems={"center"}
      h={"fit-content"}
      px={{ base: "1rem", lg: "5rem" }}
      bg={"bg.secondary"}
    >
      <Box w={"100%"} height={"40vh"} position={"relative"}>
        <AbsoluteCenter w={"75%"} color={"brand.500"}>
          <Image src="https://res.cloudinary.com/dnf9ulalk/image/upload/v1759715892/ChatGPTImage5oct202522_55_3_xo5md0.png"></Image>
        </AbsoluteCenter>
      </Box>
      <Box w={"100%"} h={"fit-content"} p={{ base: "0", md: "5" }}>
        <Box w={"100%"} display={"flex"} flexDir={"column"} mb={10}>
          <Text as="h2" mb={2} fontSize={"4xl"} fontWeight={"bolder"}>
            Contacto
          </Text>
          <Text>Ponte en contacto conmigo a traves de este formulario</Text>
        </Box>
        <form ref={formRef} onSubmit={sendEmail}>
          <VStack align={"start"}>
            <Box w={"100%"}>
              <Text mb={2} fontSize={"xl"} fontWeight="semibold">
                Nombre
              </Text>
              <Input
                border={"1px solid"}
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                required
              />
            </Box>

            <Box w={"100%"}>
              <Text fontSize={"xl"} mb={2} fontWeight="semibold">
                Email
              </Text>
              <Input
                border={"1px solid"}
                type="email"
                name="user_email"
                placeholder="tu@email.com"
                required
              />
            </Box>

            <Box w={"100%"}>
              <Text mb={2} fontSize={"xl"} fontWeight="semibold">
                Mensaje
              </Text>
              <Textarea
                border={"1px solid"}
                color={""}
                name="message"
                placeholder="Escribe tu mensaje..."
                rows={5}
                required
                resize="none"
              />
            </Box>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              loading={loading}
              bg={"brand.500/80"}
              loadingText="Enviando..."
            >
              Enviar
            </Button>
            <Toaster />
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
