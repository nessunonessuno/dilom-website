import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useConnect } from "wagmi"
import metamask_logo from "../../public/crypto/metamask.svg"
import coinbase_logo from "../../public/crypto/coinbase.png"
import walletconnect_logo from "../../public/crypto/walletconnect.png"
import Image from "next/image"

export default function WalletModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { connect, connectors } = useConnect();
  return (

    <>
      <Button className="nav-btn" sx={{backgroundColor: "black" }} onClick={onOpen}>Connect</Button>
      <Modal sx={{zIndex:"1000000"}} isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale' size="xs">
        <ModalOverlay />
        <ModalContent sx={{color: "white", backgroundColor: "#613a43", width:"95%"}}>
          <ModalHeader fontSize='md'>Connect to a Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody align="center">
              <Button sx={{marginBottom:"20px", width:"100%", fontSize:"10px", color: "black"}} align="left" onClick={() => { connect({ connector: connectors[2] }) }}>Metamask<Image src={metamask_logo} width={25} height={25} className="metamask_logo"/></Button>
              <Button sx={{marginBottom:"20px", width:"100%", fontSize:"10px", color: "black"}} align="left" onClick={() => { connect({ connector: connectors[0] }) }}>Coinbase Wallet<Image src={coinbase_logo} width={25} height={25} className="coinbase_logo"/></Button><br/>
              <Button sx={{marginBottom:"20px", width:"100%", fontSize:"10px", color: "black"}} align="left" onClick={() => { connect({ connector: connectors[1] }) }}>WalletConnect<Image src={walletconnect_logo} width={25} height={25} className="walletconnect_logo"/></Button><br/>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}