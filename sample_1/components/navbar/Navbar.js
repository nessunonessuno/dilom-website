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



export default function Simple(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box sx={{backgroundColor: isOpen ? "black" : "transparent", color:"white", marginBottom:"100px", marginTop:"30px"}} px={4}>
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
                <Link key={"borrow"} href={"/borrow"}><Button className="nav-btn">{"prestito"}</Button></Link>
				<Link key={"position"} href={"/position"}><Button className="nav-btn">{"posizione"}</Button></Link>
				<Link key={"stake"} href={"/stake"}><Button className="nav-btn">{"stake"}</Button></Link>
            </HStack>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
  				<Link key={"position"} href={"#"}><Button className="nav-btn">{"Connect wallet"}</Button></Link>

          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} href={"/" + link.toLowerCase()}><Text rounded={'md'} sx={{backgroundColor:"black", padding:"5px", fontSize:"20px", fontFamily:"Roboto"}} _hover={{textDecoration: 'none',color:"pink"}}href={'#'}>{link.toUpperCase()}</Text></Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}
