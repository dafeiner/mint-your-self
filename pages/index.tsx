import {
  useContract,
  useNFTs,
  useMintNFT,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";

const CONTRACT_ADDRESS = '0xAD3Cd2283FB49415a5fF1998e32d101c89FAf771';

export default function Home() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

  return (
    <div>
      <h2>My NFTs</h2>
      {isReadingNfts ? (
        <p>Loading...</p>
      ) : (
        <div>
          {nfts &&
            nfts.map((nft, index) => (
              <ThirdwebNftMedia
                key={index}
                metadata={nft.metadata}
                height={"200"}
              />
            ))}
        </div>
      )}

      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={(contract) =>
          contract.erc721.mint({
            name: "Hello world!",
          })
        }
      >
        Mint NFT
      </Web3Button>
    </div>
  );
}
