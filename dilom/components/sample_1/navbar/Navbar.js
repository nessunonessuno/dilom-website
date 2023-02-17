 import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from "next/link";



export default function Simple(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box sx={{backgroundColor: isOpen ? "black" : "transparent",color:"white", marginBottom:"100px", marginTop:"0px"}} px={4}>
        <Container maxWidth="100%" paddingTop="50px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            sx={{backgroundColor:"transparent", fontSize:"30px"}}
            _hover={{backgroundColor:"transparent"}}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href="/"> <Box sx={{position:"relative", left:{"sm":"0%", "lg":"200%"},  fontSize:"30px"}}>DiLOM</Box></Link>
  
          </HStack>
          <Flex alignItems={'center'} align="center" >

          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link key={"home"} href={"/sample_1/"}><Button className="nav-btn">{"home"}</Button></Link>

                <Link key={"borrow"} href={"/sample_1/borrow"}><Button className="nav-btn">{"prestito"}</Button></Link>
				<Link key={"position"} href={"/sample_1/position"}><Button className="nav-btn">{"posizione"}</Button></Link>
				<Link key={"stake"} href={"/sample_1/stake"}><Button className="nav-btn">{"stake"}</Button></Link>
            </HStack>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
  				<Link key={"position"} href={"#"}><Button className="nav-btn">{"Connect wallet"}</Button></Link>

          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <Link key={"home"} href={"/sample_1/"}><Text rounded={'md'} sx={{backgroundColor:"black", padding:"5px", fontSize:"20px", fontFamily:"Roboto"}} _hover={{textDecoration: 'none',color:"pink"}}href={'/sample_1/'}>{"home".toUpperCase()}</Text></Link>
                <Link key={"borrow"} href={"/sample_1/borrow"}><Text rounded={'md'} sx={{backgroundColor:"black", padding:"5px", fontSize:"20px", fontFamily:"Roboto"}} _hover={{textDecoration: 'none',color:"pink"}}href={'/sample_1/borrow'}>{"prestito".toUpperCase()}</Text></Link>
                <Link key={"position"} href={"/sample_1/position"}><Text rounded={'md'} sx={{backgroundColor:"black", padding:"5px", fontSize:"20px", fontFamily:"Roboto"}} _hover={{textDecoration: 'none',color:"pink"}}href={'/sample_1/position'}>{"posizione".toUpperCase()}</Text></Link>
                <Link key={"stake"} href={"/sample_1/stake"}><Text rounded={'md'} sx={{backgroundColor:"black", padding:"5px", fontSize:"20px", fontFamily:"Roboto"}} _hover={{textDecoration: 'none',color:"pink"}}href={'/sample_1/stake'}>{"stake".toUpperCase()}</Text></Link>

            </Stack>
          </Box>
        ) : null}
        </Container>
      </Box>

    </>
  );
}
