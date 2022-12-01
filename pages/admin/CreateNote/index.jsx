import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Box,
    Select,
  } from "@chakra-ui/react";
  import fetch from "isomorphic-fetch";
  

  
  export default function UserProfileEdit({ subCategories }) {
    return (
      <Box
        minH={"100vh"}
        width="80%"
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        ml="300"
      >
        <Stack
          spacing={4}
          w={"full"}
          width="100%"
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Create Note 
          </Heading>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="field_title" isRequired>
            <FormLabel>Field_title</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="field_title_pre" isRequired>
            <FormLabel>Field_title_pre</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="field_description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="author" isRequired>
            <FormLabel>Author</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="field_content" isRequired>
            <FormLabel>Contents</FormLabel>
          </FormControl>
            
          <FormControl id="field_img_primary" isRequired>
            <FormLabel>Imagen (url)</FormLabel>
            <Input
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="urlSubCategory" isRequired>
            <FormLabel>Subcategoria</FormLabel>
            <Select
              placeholder="Select option"
            >
              {subCategories
                ? subCategories.map((subCategory) => (
                    <option key={subCategory.url} value={subCategory.id}>
                      {subCategory.name}
                    </option>
                  ))
                : null}
            </Select>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    );
  }
  
  export async function getServerSideProps() {
    const resSubCategories = await fetch(
      `http://localhost:3001/api/subcategories`
    );
    const dataSubCategories = await resSubCategories.json();
  
    return { props: { subCategories: dataSubCategories } };
  }
  