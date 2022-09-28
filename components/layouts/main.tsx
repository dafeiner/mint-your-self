import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.main`
  text-align: center;
`;

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`

export const Main: React.FC = ({ children }) => {
  return (
    <div>
      <Header>
        <h1>
          <UnstyledLink href={"/"}>Mint Yo Self</UnstyledLink>
        </h1>
        <ConnectWallet colorMode="light" accentColor="#000000" />
      </Header>

      <MainContainer>{children}</MainContainer>
    </div>
  );
};
