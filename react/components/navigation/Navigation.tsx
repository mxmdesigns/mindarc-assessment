import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { BiX } from "react-icons/bi";
import { createMediaQuery } from "@/styles/theme";

const MenuButton = styled(BiMenu)<{ dark?: boolean }>`
  width: 40px;
  height: 40px;
  color: ${({ dark }) => (dark ? "black" : "white")};
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s;
  border: 0 solid white;

  &:hover {
    border: 5px solid white;
  }
`;

const NavigationMenu = styled.div<{ isOpen: boolean; dark: boolean }>`
  position: fixed;
  z-index: 2;
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  left: 0;
  padding-bottom: 16px;
  width: 100%;
  border-bottom-right-radius: 0;
  background-color: ${({ dark }) => (dark ? "#888" : "white")};
  transition: all 0.2s;

  ${createMediaQuery("sm")} {
    width: 380px;
    border-bottom-right-radius: 16px;
  }
`;

const LinkStyled = styled(Link)<{ dark: boolean }>`
  width: 100%;
  padding: 16px;
  display: block;
  text-align: center;
  transition: all 0.2s;
  background-color: ${({ dark }) => (dark ? "#888" : "white")};
  font-weight: 700;
  color: ${({ dark }) => (dark ? "#fff" : "#333")};

  &:hover {
    background-color: #aaa;
  }
`;

const CloseButton = styled(BiX)<{ dark: boolean }>`
  display: block;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  margin-left: 4px;
  cursor: pointer;
  color: ${({ dark }) => (dark ? "#fff" : "#333")};
`;

const Navigation = ({ dark = false }: { dark?: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuButton dark={dark} onClick={() => setIsOpen(true)} />
      <NavigationMenu isOpen={isOpen} dark={dark}>
        <CloseButton dark={dark} onClick={() => setIsOpen(false)} />
        <LinkStyled href="/" dark={dark}>
          Home
        </LinkStyled>
        <LinkStyled href="/exercise-one" dark={dark}>
          Exercise One
        </LinkStyled>
        <LinkStyled href="/exercise-two" dark={dark}>
          Exercise Two
        </LinkStyled>
      </NavigationMenu>
    </>
  );
};

export default Navigation;
