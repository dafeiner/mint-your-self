import {
  useContract,
  useNFTs,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import Link from "next/link";

const CONTRACT_ADDRESS = "0xAD3Cd2283FB49415a5fF1998e32d101c89FAf771";

export default function Home() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

  return (
    <div>
      <p>
        Own a piece of the internet.{" "}
        <strong>Your piece of the internet!</strong>{" "}
        <Link href={"/mint"}>Click here</Link> to mint your twitter profile!
      </p>

      <h3>Everybody else is doing it:</h3>
      {isReadingNfts ? (
        <p>Loading...</p>
      ) : (
        <div>
          {nfts &&
            nfts.map((nft, index) => (
              <div key={index}>
                <ThirdwebNftMedia metadata={nft.metadata} height={"200"} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
