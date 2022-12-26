import { Container, Text, Button, Divider, SimpleGrid, GridItem, Box } from '@chakra-ui/react'

export default function About() {
  return (
  	<>
	<Container maxWidth="60%" align="left">
  <Text fontSize='4xl' sx={{fontFamily:"Roboto", fontWeight:"600"}}>About</Text>

	</Container>
	<Divider />

	<Container maxWidth={["90%","90%","80%","80%"]} align="center" marginTop="150px">
		
		<Text fontSize='xl' sx={{fontFamily:"Roboto", fontWeight:"400", marginTop:"20px"}}>
		Dilom è una società che fornisce soluzioni web3 per aziende e privati. Siamo esperti nel campo delle cryptovalute e degli NFT e ci proponiamo come partner affidabili per chiunque voglia entrare nel mondo delle tecnologie blockchain. Offriamo servizi di consulenza personalizzati, sviluppo di soluzioni su misura e supporto continuo ai nostri clienti. Riteniamo che le tecnologie web3 rappresentino un importante strumento per le transazioni online e siamo pronti ad aiutare chiunque voglia sfruttare queste opportunità. Se siete interessati a saperne di più sulla nostra attività, non esitate a contattarci.		
		</Text>
	
	</Container>

	<Container maxWidth={["90%","90%","50%","40%"]} align="left">
  <Text fontSize='4xl' sx={{fontFamily:"Roboto", marginTop:"170px", fontWeight:"600"}}>Chi siamo?</Text>
		<Text fontSize='xl' sx={{fontFamily:"Roboto", fontWeight:"400", marginTop:"20px"}}>
		Siamo un piccolo gruppo di programmatori basati in Ticino, con una forte passione per le tecnologie web3 e le criptovalute. La nostra ditta, Dilom, si propone come partner affidabile per chiunque voglia entrare nel mondo delle tecnologie blockchain, offrendo servizi di consulenza, sviluppo di soluzioni su misura e supporto continuo ai nostri clienti. Siamo convinti che le tecnologie web3 rappresentino un importante strumento per le transazioni online e siamo pronti ad aiutare chiunque voglia sfruttare queste opportunità.
		</Text>
	</Container>

	<Container maxWidth={["90%","90%","50%","40%"]} align="left">
  <Text fontSize='4xl' sx={{fontFamily:"Roboto", marginTop:"170px", fontWeight:"600"}}>Cosa facciamo?</Text>
		<Text fontSize='xl' sx={{fontFamily:"Roboto", fontWeight:"400", marginTop:"20px"}}>
Dilom si occupa di fornire soluzioni web3 per aziende e privati. Siamo esperti nel campo delle cryptovalute e degli NFT e ci proponiamo come partner affidabile per chiunque voglia entrare nel mondo delle tecnologie blockchain. Offriamo servizi di consulenza personalizzati, sviluppo di soluzioni su misura e supporto continuo ai nostri clienti. In particolare, ci occupiamo di aiutare le aziende a sfruttare le opportunità offerte dalle tecnologie web3, sia attraverso la creazione di portafogli digitali sicuri per la gestione delle criptovalute, sia attraverso lo sviluppo di soluzioni personalizzate per la gestione dei NFT. Siamo convinti che le tecnologie web3 rappresentino il futuro delle transazioni online e siamo pronti ad aiutare chiunque voglia cogliere questa opportunità.		</Text>
	</Container>
	<Container maxWidth={["90%","90%","50%","40%"]} align="left">
  <Text fontSize='4xl' sx={{fontFamily:"Roboto", marginTop:"170px", fontWeight:"600"}}>Contatti</Text>
		<Text fontSize='xl' sx={{fontFamily:"Roboto", fontWeight:"400", marginTop:"20px"}}>
		Per qualsiasi richiesta o informazione, non esitate a contattarci tramite email o telefono. Siamo a vostra disposizione per rispondere a ogni domanda e fornirvi ulteriori dettagli sulla nostra attività e sui nostri servizi. Saremo lieti di essere d'aiuto per qualsiasi necessità. 
		</Text>
  <a href={"mailto: test@gmail.com"}><Text fontSize='2xl' sx={{fontFamily:"Roboto", fontWeight:"600", marginTop:"20px"}}>test@gmail.com</Text></a>
  <a href={"mailto: test@gmail.com"}><Text fontSize='2xl' sx={{fontFamily:"Roboto", fontWeight:"600", marginTop:"10px"}}>+41 781231122</Text></a>

	</Container>
	</>
  )
}