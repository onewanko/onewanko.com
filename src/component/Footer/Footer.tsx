import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = () => {
  return (
    <>
      <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100px"}
        h={"40px"}
        src={
          "https://gateway.pinata.cloud/ipfs/QmaQNfwVAGj1vxesbWRPfnPeGRPaNZ12zmBRwPepNsufMK/Logo_pnd.png"
        }
      />
    </>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Center w="full" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} textAlign="center">
          <Stack align={{base: "center", lg: "flex-start"}}>
            <ListHeader>Onewanko work</ListHeader>
            <Link href={"/"}>Overview</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"https://github.com/onewanko/"}>Finished projects</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("blue.300", "bluee.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <Link href={"/circle"}>Current projects</Link>
            <Link href={"https://github.com/onewanko/"}>Contributing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={{base: "center", lg: "flex-start"}}>
            <ListHeader>About onewanko</ListHeader>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
          <Stack align={{base: "center", lg: "flex-start"}}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"https://youtube.com/onewanko"}>Youtube</Link>
            <Link href={"https://twitter.com/onewankoorg"}>Twitter</Link>
            <Link href={"https://tiktok.com/onewanko"}>Tiktok</Link>
            <Link href={"https://instagram.com/onewanko"}>Instagram</Link>
            <Link href={"https://github.com/onewanko/onewanko-website"}>
              Github
            </Link>
          </Stack>
        </SimpleGrid>
      </Center>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Onewanko. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
