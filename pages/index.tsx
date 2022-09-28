import { useContract, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import Link from "next/link";
import styled from "@emotion/styled";
import { MINTING_CONTRACT_ADDRESS } from "../constants/contracts";

const Container = styled.div`
  text-align: left;
`;

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`

export default function Home() {
  const { contract } = useContract(MINTING_CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

  return (
    <div>
      <Container>
        <p>
          Own a piece of the internet.{" "}
          <strong>Your piece of the internet!</strong>{" "}
          <Link href={"/mint"}>Click here</Link> to mint your Twitter profile!
        </p>

        <h3>Everybody else is doing it:</h3>
        {isReadingNfts ? (
          <p>Loading...</p>
        ) : (
          <div>
            {nfts &&
              nfts.map((nft, index) => (
                <div key={index}>
                  <div>
                    <b><UnstyledLink href={`https://twitter.com/${nft.metadata.name}`}>@{nft.metadata.name}</UnstyledLink></b>
                  </div>
                  <ThirdwebNftMedia
                    style={{
                      display: "inline-block",
                      border: "1px solid black",
                      borderRadius: "5px",
                    }}
                    metadata={nft.metadata}
                    height={"200"}
                  />
                </div>
              ))}
          </div>
        )}
      </Container>
    </div>
  );
}
