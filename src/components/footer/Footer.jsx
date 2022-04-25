import React from "react";
import { useTheme } from "styled-components";
import StyledButton from "../styles/Button.styled";
import FlexCol from "../styles/FlexCol.styled";
import StyledFooter from "../styles/Footer.styled";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { BsFacebook, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import StyledImage from "../styles/Image.styled";
import SocialMedia from "../styles/SocialMedia.styled";
export default function Footer() {
  const theme = useTheme();
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <StyledFooter>
        <form
          action="
          "
        >
          <h2>ready to build your community?</h2>
          <StyledButton
            color={"white"}
            bg={theme.colors.Pink}
            bg_hover="#ff9bda"
          >
            get started for free
          </StyledButton>
        </form>
        <div>
          <FlexCol>
            <ul>
              <li>
                <StyledImage>
                  <img
                    style={{
                      filter:
                        "invert(100%) sepia(100%) saturate(0%) hue-rotate(235deg) brightness(101%) contrast(104%)",
                    }}
                    src="./images/logo.svg"
                    alt=""
                  />
                </StyledImage>
              </li>
              <li>
                <GoLocation />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  odio aperiam reprehenderit repellendus error!
                </p>
              </li>
              <li>
                <BsFillTelephoneOutboundFill />
                <p>+1-543-123-4567</p>
              </li>
              <li>
                <CgMail />
                <p>example@huddle.com</p>
              </li>
            </ul>
          </FlexCol>
          <FlexCol>
            <ul>
              <li> About Us</li>
              <li> What We Do</li>
              <li> FAQ</li>
            </ul>
          </FlexCol>
          <FlexCol>
            <ul>
              <li> Career</li>
              <li> Blog</li>
              <li> Contact Us</li>
            </ul>
          </FlexCol>
          <FlexCol>
            <SocialMedia>
              <BsFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
            </SocialMedia>
            <p style = {{textAlign : "center"}}>&copy; Copyright 2018 Huddle. All rights reserved.</p>
          </FlexCol>
        </div>
      </StyledFooter>
    </IconContext.Provider>
  );
}
