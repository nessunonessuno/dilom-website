import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Divider
} from '@chakra-ui/react';
import { ReactNode } from 'react';




export default function SmallCentered() {
  return (
    <>
    <Box>
        <Divider marginBottom="50px" marginTop="200px" sx={{opacity:"0.2"}}/>

      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        Logo
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'} sx={{fontFamily:"Roboto", fontSize:"20px"}}>Home</Link>
          <Link href={'/portfolio'} sx={{fontFamily:"Roboto", fontSize:"20px"}}>Portfolio</Link>
          <Link href={'/about'} sx={{fontFamily:"Roboto", fontSize:"20px"}}>About</Link>
        </Stack>
      </Container>
      <Box>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          opacity="0.5"
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Dilom. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>

          </Stack>
        </Container>
      </Box>
    </Box>
    </>
  );
}