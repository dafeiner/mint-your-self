import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Mint Yo Self</h1>
        <ConnectWallet colorMode="light" accentColor="#000000" />
      </Header>

      <main>{children}</main>
    </>
  );
};
