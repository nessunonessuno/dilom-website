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
import WalletModal from "../chain/WalletModal";
import ChangeChainModal from "../chain/ChangeChainModal";
import { useDisconnect, useAccount, useNetwork } from "wagmi";


export default function Simple(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { disconnect } = useDisconnect();
  const { address, connector, isConnected } = useAccount()
  const { chain,chains} = useNetwork();
  
  const renderButton = () => {
    if (chain.id != chains[0].id) {
      return <ChangeChainModal />
    }
    else{
      return <Button className="nav-btn" onClick={disconnect}>Disconnect</Button>
    }
  }

  return (
    <>
      <Box className="navbar" px={4}>
        <Container maxWidth="100%" paddingTop="0px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>


          <Flex alignItems={'center'} align="center" >
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
          {isConnected ? renderButton() :<WalletModal />}

          </HStack>
        </Flex>

 
        </Container>
      </Box>

    </>
  );
}
