import styled from "@emotion/styled";
import {
  useContract,
  useNFTs,
  useMintNFT,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';

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
  const router = useRouter()
  const [twitterUsername, setTwitterUserName] = useState<string>('');

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
            const response = await axios.get('/api/twitter/user', { params: { username: twitterUsername } });
            const userData = response.data.data;
            debugger;
            await contract.erc721.mint({
              name: userData.username,
              description: userData.name,
              image: userData.profile_image_url,
            })
            router.push('/');
          }}
        >
          Mint NFT
        </Web3Button>
      </Container>
    </div>
  );
}
