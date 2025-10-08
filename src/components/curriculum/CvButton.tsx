import { Button, Image, Text } from "@chakra-ui/react";

interface Props {
  language: string;
}

function DownloadCV({ language }: Props) {
  if (language === "es")
    return (
      <a
        href="/JERONIMO_FERNANDEZ_ES_25.pdf"
        download="JERONIMO_FERNANDEZ_ES_25.pdf"
      >
        <Button w={"100%"} p={6} variant={"outline"} color={"brand.500"} mt={5}>
          <Image
            h={"48px"}
            w={"48px"}
            src="https://img.icons8.com/color/48/argentina.png"
          ></Image>
          <Text w={"fit-content"} color={"gray.300"} fontWeight={"bold"}>
            Descargar
          </Text>
        </Button>
      </a>
    );

  return (
    <a
      href="/JERONIMO_FERNANDEZ_EN_25.pdf"
      download="JERONIMO_FERNANDEZ_EN_25.pdf"
    >
      <Button w={"100%"} p={6} variant={"outline"} color={"brand.500"} mt={5}>
        <Image
          h={"48px"}
          w={"48px"}
          src="https://img.icons8.com/color/48/usa.png"
        ></Image>
        <Text color={"gray.300"} fontWeight={"bold"}>
          Download
        </Text>
      </Button>
    </a>
  );
}

export default DownloadCV;
