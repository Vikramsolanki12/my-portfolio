import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import ThemeToggleButton from "./ThemeToggleButton";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  color: white; /* This might be redundant if using theme.text_primary */
  border-bottom: 1px solid ${({ theme }) =>
    theme.border}; /* Added a subtle border */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.text_primary}; /* Use theme color for consistency */
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 25px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) =>
    theme.text_secondary}; /* Changed to text_secondary for menu links */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px; /* Added gap for button and theme toggle */
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ThemeButtonContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 0px;
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  background: ${({ theme }) =>
    theme.card_light + "cc"}; /* Slightly transparent */
  padding: 16px 24px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify content: center;
  align-items: center;
  gap: 16px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.4s ease-in-out;
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1")};

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;

  button,
  a {
    width: 80%;
    text-align: center;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_primary};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Portfolio</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Volunteer">Volunteer</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Certificates">Certificates</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
        <ThemeButtonContainer>
          <ThemeToggleButton />
        </ThemeButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Volunteer">
              Volunteer
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Certificates">
              Certificates
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <MobileButtonContainer>
              {" "}
              <GithubButton
                href={Bio.github}
                target="_Blank"
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
              >
                Github Profile
              </GithubButton>
              <ThemeToggleButton />
            </MobileButtonContainer>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
