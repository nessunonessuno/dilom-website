import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from "next/link";
import Image from "next/image";
import logo from "/public/image.png"

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box sx={{backgroundColor: isOpen ? "black" : "transparent", color:"white", marginBottom:"100px"}} px={4}>
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
            <Link href="/"> <Box sx={{position:"relative", left:["0%", "50%", "200%", "200%"], fontFamily:"Lato", fontWeight:"800", fontSize:"30px"}}>dilom</Box></Link>
  
          </HStack>
          <Flex alignItems={'center'} align="center" sx={{position:"relative", right:"50%",transform: "translateX(50%)"}}>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>


                <Link key={"home"} href={"/"}><Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"home"}</Text></Link>
                <Link key={"portfolio"} href={"/portfolio"}><Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"portfolio"}</Text></Link>
                <Link key={"contatti"} href={"/contatti"}> <Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"contatti"}</Text></Link>


            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>


                <Link key={"home"} href={"/"}><Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"home"}</Text></Link>
                <Link key={"portfolio"} href={"/portfolio"}><Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"portfolio"}</Text></Link>
                <Link key={"contatti"} href={"/contatti"}> <Text  rounded={'md'} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{"contatti"}</Text></Link>


            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}
