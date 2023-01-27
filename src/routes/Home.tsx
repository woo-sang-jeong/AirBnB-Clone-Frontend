import { Box, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"}>
      <VStack spacing={1} alignItems={"flex-start"}>
        <Box overflow={"hidden"} mb={2} rounded={"3xl"}>
        <Image 
        h="280"
        src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720" />
        </Box>
        <Grid gap={2} templateColumns={"2fr 1fr"}>
          <Text as="b" noOfLines={1} fontSize={"md"}>
            test room name test room name test room name test room name 
          </Text>
          <HStack spacing={1}>
            <FaStar size={"15px"}/>
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color="gray.500" >Seoul, s. Korea</Text>
        <Text fontSize={"sm"} color="gray.500" >
          <Text as="b">$72</Text> /night
        </Text>
      </VStack>
    </Grid>
  )
}