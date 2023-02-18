import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Container,
  CircularProgress,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { useConnect } from "wagmi";
import { useSwitchNetwork, useNetwork } from 'wagmi'

export default function ChangeChainModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { connect, connectors } = useConnect();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  return (

    <>
      <Button className="nav-btn" onClick={onOpen}>WRONG CHAIN</Button>
    
      <Modal isOpen={!switchNetwork || chains[0].id === chain?.id ? false : isOpen} onClose={onClose} isCentered motionPreset='scale' size="xs">
        <ModalOverlay />
        <ModalContent sx={{color: "white", backgroundColor: "#613a43", width:"95%"}}>
          <Container>
          <ModalHeader fontSize='md'>Wrong Network</ModalHeader>
          <ModalCloseButton fontSize='xs'/>
          </Container>
          <ModalBody>
            <Text align="center">Please connect to the appropriate Avalanche network.</Text>
            <Container align="center" sx={{marginTop:"10px", marginBottom:"20px"}}>
            {isLoading ? 
              <CircularProgress isIndeterminate size="30px" thickness='7px'/>:
              <><Button fontSize='xs' onClick={() => switchNetwork?.(chains[0].id)} sx={{color: "black"}}>Switch to Avalanche Chain</Button></>
            }
            </Container>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}