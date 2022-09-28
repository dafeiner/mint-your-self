import styled from "@emotion/styled";
import {
  useContract,
  useNFTs,
  useMintNFT,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { fetchUserData } from "../lib/twitter";

const CONTRACT_ADDRESS = "0xAD3Cd2283FB49415a5fF1998e32d101c89FAf771";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`

export default function Home() {
  const [twitterUsername, setTwitterUserName] = useState<string>('');
  const { contract } = useContract(CONTRACT_ADDRESS);

  return (
    <div>
      <Container>
        <InputContainer>
          <label htmlFor="twitter_username">
            Enter your Twitter username here:{" "}
          </label>{" "}
          <input
            name="twitter_username"
            value={twitterUsername}
            placeholder="jack"
            onChange={(event) =>
              setTwitterUserName(event.target.value)
            }
          ></input>
        </InputContainer>

        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          isDisabled={!twitterUsername}
          action={async (contract) => {
            debugger;
            // contract.erc721.mint({
            //   name: "Hello world!",
            // })
          }}
        >
          Mint NFT
        </Web3Button>
      </Container>
    </div>
  );
}
