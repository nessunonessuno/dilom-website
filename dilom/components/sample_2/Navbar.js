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
  Container
} from '@chakra-ui/react';
import Link from "next/link";



export default function Simple(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="navbar" px={4}>
        <Container maxWidth="100%" paddingTop="0px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>


          <Flex alignItems={'center'} align="center" >
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
  				<Link key={"position"} href={"#"}><Button className="nav-btn">{"Connect Wallet"}</Button></Link>
          </HStack>
        </Flex>

 
        </Container>
      </Box>

    </>
  );
}
