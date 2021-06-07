import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Container>
          <Box
            bg="blue.400"
            h="36"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="10px 20px"
          >
            <Heading color="white">Hooliday</Heading>
          </Box>

          <Box p="14px 0">
            <Heading size="md" p="8px 0 14px 0">
              Month in a year
            </Heading>

            <Stack spacing="6">
              {Object.keys(Month).map((key) => (
                <Box
                  key={key}
                  borderRadius="md"
                  backgroundColor="blue.100"
                  p="14px"
                >
                  <Heading color="blue.900" size="sm">
                    {Month[1]}
                  </Heading>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
