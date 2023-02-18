import * as React from 'react'
import { Button } from '@chakra-ui/react'
import { usePrepareContractWrite, useContractWrite,useWaitForTransaction, useDisconnect, useAccount, useNetwork } from "wagmi";
import Abi from "/components/chain/Dilom.json"
import Image from "next/image"
import wrong from "/public/cross.png"

export default function SendTransaction() {
  const { address, connector, isConnected } = useAccount()
  const { chain,chains} = useNetwork();
  const { config, error:prepareError, isError: isPrepareError} = usePrepareContractWrite({
    address: '0x818953F993a4bca9181f1F86817227d23148FE84',
    abi: Abi,
    functionName: 'safeMint',
    args:[address]
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <>
      {isConnected ? chain.id != chains[0].id ? <Button className="minter"><Image src={wrong}/></Button> : <Button className="minter" disabled={!write || isLoading} onClick={() => write()}>{isLoading ? 'Minting...' : 'Mint Now'}</Button> :<Button className="minter" disabled={!write || isLoading} onClick={() => write()}>{isLoading ? 'Minting...' : 'Mint Now'}</Button>}
      { isSuccess && (<Button className="minter_success">Successfully minted your NFT!</Button>) }
      { (isPrepareError || isError) && (<Button className="minter_error">Error: {(prepareError || error)?.message}</Button>) }

    </>


  )
}