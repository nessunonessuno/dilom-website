import { Container, Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'

export default function index() {
  return (
    <>
    <Container align="center" sx={{maxWidth:["100%", "100%", "55%"], marginBottom:"70px"}}>
      <Text  className="titolo" sx={{ fontSize:["50px","70px","100px"], fontWeight:"800", fontFamily:"IBM Plex Sans" }}>Web3: il futuro del web è qui.</Text>
      <Text sx={{ fontSize:["15px","15px","30px"]}}>Sviluppo e consulenza</Text>
    </Container>


    <Container  sx={{maxWidth:"70%", marginTop:["100px", "150px","200px"],marginBottom:"100px", backgroundColor:"transparent"}}>
      <Text  align="left" sx={{ fontSize:["40px","40px","40px"], fontWeight:"800", fontFamily:"IBM Plex Sans" }}>
      Esplora le nuove <p className="colored">opportunità</p> con noi.
      </Text>
    <Text  align="left" sx={{marginTop:"50px", fontSize:"20px", fontFamily:"Roboto",}} >
        Siamo un'azienda leader nello sviluppo di soluzioni basate su tecnologie innovative come NFT, Web3, criptovalute e smart contract. Il nostro team di esperti è altamente qualificato e ha una profonda conoscenza di queste tecnologie emergenti, che rappresentano il futuro del web e dell'economia digitale. Grazie alla nostra esperienza e alla nostra passione, siamo in grado di offrire servizi di consulenza e sviluppo personalizzati per aiutare le aziende a sfruttare al meglio il potere delle NFT, delle criptovalute e degli smart contract per trasformare le loro idee in realtà. Se sei interessato a scoprire come possiamo aiutare la tua azienda a crescere e a prosperare nel mondo digitale, non esitare a contattarci per una consulenza gratuita.
    </Text>
    <Button className="bbb" sx={{backgroundColor:"#181414", padding:"25px", borderRadius:"200px", fontSize:"20px", marginTop:"30px"}}>Contattaci</Button>
    </Container>


    <Container sx={{maxWidth:"70%", marginTop:"150px", marginBottom:"100px"}}>
    <SimpleGrid align="center" columns={[1,1,1, 3]} gap={10} >
      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}}color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>NFT</Text>
      <Text align="center" sx={{fontFamily:"Roboto", fontSize:"30px", fontWeight:"800"}}>Token di Propietà</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>
Crea il tuo progetto NFT con noi e garantisci la proprietà unica della tua creazione digitale. Utilizziamo la tecnologia blockchain per rendere il tuo progetto sicuro e verificabile.
</Text>

      </Box>
      </GridItem>
      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}} color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>Smart Contract</Text>
      <Text align="center" sx={{fontFamily:"Roboto", fontSize:"30px", fontWeight:"800"}}>Contratti programmabili</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>
Grazie ai smart contract, puoi gestire in modo sicuro e trasparente le tue transazioni commerciali, riducendo al minimo gli errori umani e i tempi di attesa.      </Text>

      </Box>
      </GridItem>

      <GridItem align="center" >
      <Box rounded='lg' w='100%' _hover={{backgroundColor:"#322929"}} color='white' sx={{backgroundColor:"#181414", padding:"10"}}>
      
      <Text align="left" sx={{ fontFamily:"IBM Plex Sans", fontSize:"15px", opacity:"0.5"}}>Crypto</Text>
      <Text align="center"  sx={{fontFamily:"Roboto", fontSize:"30px", fontWeight:"800"}}>Cryptovalute</Text>
      <Text align="center" sx={{ marginTop:"20px",fontFamily:"Roboto", fontSize:"15px", opacity:"0.8"}}>
      Sfrutta al massimo le potenzialità delle criptovalute con noi e scopri come possono cambiare il modo in cui gestisci il tuo denaro e le tue attività commerciali.</Text>

      </Box>
      </GridItem>


    </SimpleGrid>
    </Container>
    </>
  )
}