import { useState } from 'react';
import { ChakraProvider, Box, VStack, theme, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Section from './components/Section';
import BgBlur from './components/BgBlur';
import sectionData from './data/sectionData';

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Grid textAlign="center" fontSize="xl" minH="100vh">
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Hero isOpen={openContact} setIsOpen={setOpenContact} />
          <BgBlur show={openContact} />
          <Contact isOpen={openContact} setIsOpen={setOpenContact} />
          {sectionData.map(section => (
            <Section sectionData={section} />
          ))}
        </VStack>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
