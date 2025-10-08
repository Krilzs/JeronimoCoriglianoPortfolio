import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          "500": { value: "colors.green.400" },
        },
        bg: {
          DEFAULT: { value: "{colors.green.100}" },
          primary: { value: "{colors.gray.900}" },
          secondary: { value: "{colors.gray.800}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
