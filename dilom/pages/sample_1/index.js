import { Container, Text, Button, SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import Image from "next/image"

export default function Index(){
  return (
    <>
    <Container maxWidth="100%"> 

        <Container sx={{maxWidth:"80%", marginTop:"150px", marginBottom:"100px"}}>

    <SimpleGrid columns={[1,1,1,2]}>
  <GridItem >
  <Text sx={{fontSize:["20px","30px"], fontFamily:"Prompt", color:"white", fontWeight:"500"}}>
  PROTOCOLLO DI PRESTITO
  </Text>

  <Text className="colored" sx={{fontSize:["25px","40px"], fontFamily:"Prompt", color:"white", fontWeight:"700"}}>
  {`Scegli la tua criptovaluta preferita, depositala come garanzia e ottieni un prestito in dollari.`.toUpperCase()}
  </Text>
  <Button className="second_btn" marginRight="30px">Prestito</Button>
  <Button className="second_btn">Posizione</Button>
  </GridItem>
    </SimpleGrid>
    </Container>

    <Container maxWidth="100%" align="center" sx={{backgroundColor:"black", padding:"30px", color:"white", fontFamily:"Roboto"}}>
    <Container maxWidth="60%">
  <Text align="left" sx={{marginTop:"100px",  fontSize:"30px", fontFamily:"Prompt", color:"white", fontWeight:"500"}}>
  {"Ottieni $USDT in prestito".toUpperCase()} 
  </Text>

  <Text align="left"  sx={{marginTop:"20px", marginBottom:"100px",  fontSize:"22px", fontFamily:"Prompt", color:"white", fontWeight:"300"}}>
Sei alla ricerca di un modo per ottenere un prestito in USDT senza dover utilizzare il tuo denaro contante come collaterale? Allora potresti voler considerare l'utilizzo della cryptovaluta come alternativa. Con molte diverse opzioni di cryptovaluta disponibili, puoi scegliere quella che preferisci per garantire il tuo prestito. Basta semplicemente selezionare la tua cryptovaluta preferita e utilizzarla come collaterale per ottenere il prestito in USDT di cui hai bisogno. Non importa quale sia la tua situazione finanziaria, l'utilizzo della cryptovaluta come collaterale può essere un modo conveniente e sicuro per ottenere il prestito di cui hai bisogno.  </Text>
    </Container>
  </Container>

    <Container maxWidth="100%" align="center" sx={{backgroundColor:"#262626", padding:"30px", color:"white", fontFamily:"Roboto"}}>
    <Container maxWidth="60%">
  <Text align="left" sx={{marginTop:"100px",  fontSize:"30px", fontFamily:"Prompt", color:"white", fontWeight:"500"}}>
  {"Prestiti con leva fino a 25x".toUpperCase()} 
  </Text>

  <Text align="left"  sx={{marginTop:"20px", marginBottom:"100px",  fontSize:"22px", fontFamily:"Prompt", color:"white", fontWeight:"300"}}>
Se state cercando di aumentare la vostra esposizione sui mercati finanziari senza dover investire grandi quantità di denaro, potreste voler considerare l'utilizzo della leva finanziaria. La leva finanziaria vi permette di moltiplicare il vostro potere di acquisto, il che significa che potete fare trade con un importo maggiore rispetto a quello che avete effettivamente a disposizione. Ad esempio, con una leva finanziaria del 25x, per ogni 1 USD di fondi che avete a disposizione, potete fare trade come se ne aveste 25. Questo può essere particolarmente utile se state cercando di fare trade sui mercati volatili e volete aumentare le vostre possibilità di successo. Tuttavia, è importante tenere presente che l'utilizzo della leva finanziaria comporta anche un maggiore rischio, pertanto vi consigliamo di comprendere appieno i rischi connessi prima di utilizzare questo strumento.
  </Text>
    </Container>
  </Container>
  </Container>

    </>
  )
}