import { Container, Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Link from "next/link"

export default function index() {
  return (
    <>
    <Container align="center" sx={{maxWidth:["100%", "100%", "55%"], marginBottom:["200px","70px"]}}>
      <Text  className="titolo" sx={{ fontSize:["50px","50px","70px","100px"], fontWeight:"800", fontFamily:"IBM Plex Sans" }}>Soluzioni innovative per il futuro del web.</Text>
      <Text sx={{ fontSize:["15px","15px","30px"]}}>Sviluppo e consulenza</Text>
    </Container>


    <Container  sx={{maxWidth:"70%", marginTop:["100px", "150px","200px"],marginBottom:"100px", backgroundColor:"transparent"}}>
      <Text  align="left" sx={{ fontSize:["40px","40px","40px"], fontWeight:"800", fontFamily:"IBM Plex Sans" }}>
      Esplora le nuove <p className="colored">opportunità</p> con me.
      </Text>
    <Text  align="left" sx={{marginTop:"50px", fontSize:["16px","20px"], fontFamily:"Roboto",}} >

sono uno sviluppatore web esperto in tecnologie all&apos;avanguardia come NFT, Web3, criptovalute e smart contract. Grazie alla mia conoscenza approfondita in queste aree, aiuto le persone e le aziende a realizzare le loro idee attraverso soluzioni personalizzate. Se sei interessato a scoprire come posso aiutare te o la tua azienda, contattami per una consulenza gratuita.
    </Text>
    <Link href="/contatti"><Button className="bbb" sx={{backgroundColor:"#181414", padding:"25px", borderRadius:"200px", fontSize:"20px", marginTop:"30px"}}>contattami</Button></Link>
    </Container>


    <Container sx={{maxWidth:"70%", marginTop:"150px", marginBottom:"100px"}}>
    <SimpleGrid align="center" columns={[1,1,1, 3]} gap={10} >
      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}}color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>NFT</Text>
      <Text align="center" sx={{fontFamily:"Roboto", fontSize:["25px","30px"], fontWeight:"800"}}>Token di Proprietà</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>
      
Le NFT rappresentano una grande opportunità per gli artisti e i creatori digitali di tutto il mondo. Con le NFT, puoi garantire la proprietà esclusiva della tua creazione digitale e renderla autentica in un modo che non era possibile in precedenza.      
      </Text>

      </Box>
      </GridItem>
      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}} color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>Smart Contract</Text>
      <Text align="center" sx={{fontFamily:"Roboto", fontSize:["25px","30px"], fontWeight:"800"}}>Contratti programmabili</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>
      
      Grazie agli smart contract, o contratti programmabili, puoi automatizzare e rendere trasparente qualsiasi processo che richieda un accordo tra parti. Gli smart contract ti permettono di eliminare intermediari e ridurre i tempi di attesa, rendendo tutto più semplice e veloce.

      </Text>

      </Box>
      </GridItem>

      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}} color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>Crypto</Text>
      <Text align="center"  sx={{fontFamily:"Roboto", fontSize:["25px","30px"], fontWeight:"800"}}>Cryptovalute</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>

Le criptovalute rappresentano una nuova forma di denaro digitale, decentralizzato e sicuro grazie alla tecnologia blockchain. Sono in grado di rivoluzionare il modo in cui gestiamo le nostre finanze e le attività commerciali, rendendole più veloci, trasparenti ed efficienti.
      </Text>
      </Box>
      </GridItem>


    </SimpleGrid>
    </Container>
    </>
  )
}