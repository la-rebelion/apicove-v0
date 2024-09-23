import React from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-3.svg";

import Footer from "components/footers/FiveColumnWithInputForm.js";
import illustrationImageSrc from "images/server-secure-illustration.svg";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase, Subheading as SubheadingBase } from "components/misc/Headings";

import logo from "images/logo.png";
import { Container, Content2Xl } from "components/misc/Layouts";

import MainFeature from "components/features/TwoColWithButton.js";


const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;
const LogoImage = tw.img`w-32 mr-3`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-6 mb-6 text-center`;
const ShellText = tw.h2`text-2xl xl:text-3xl mt-6 mb-6 text-center`;
const Description = tw.p`text-center text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;
const ShellCommand = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-gray-900 text-gray-100 shadow sm:rounded-lg flex justify-center flex-1`;

const Row = tw.div`flex`;
const NavRow = tw.div`flex justify-between items-center`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-12 mx-auto`;

const Downloads = () => {
  const Subheading = tw(SubheadingBase)`mb-4`;
  const actions = {
    primary:
      { url: "https://docs.apicove.com", text: "Get Start" },
    secondary:
      { url: "https://go.rebelion.la/apicove-downloads", text: "Download" }
  };

  gtag('js', new Date());
  gtag('download', 'G-R63DV8HNZS');
  return (
    <AnimationRevealPage>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <SvgDecoratorBlob1 style={{ position: 'absolute', top: 0, left: 0, width: '16rem', opacity: 0.55, transform: 'translate(-50%, -50%)', zIndex: 0 }} />
          <SvgDecoratorBlob2 style={{ position: 'absolute', top: 0, left: 0, width: '16rem', opacity: 0.75, transform: 'translate(-10%, 10%)', zIndex: 0 }} />
          <NavRow>
            <LogoLink href="/">
              <LogoImage src={logo} alt="APICove Logo" />
              APICove
            </LogoLink>
            <div tw="flex flex-col lg:flex-row items-center">
              <NavLink target="_blank" href="#">
                License & Usage
              </NavLink>
              <NavLink target="_blank" href="youtube.com/@LaRebelion">
                YouTube
              </NavLink>
              <NavLink target="_blank" href="https://rebelion.la">
                Who Are We ?
              </NavLink>
              <PrimaryNavLink target="_blank" href="/login">
                Login
              </PrimaryNavLink>
            </div>
          </NavRow>
          </Content2Xl>
        <HeroRow>
          <Heading>Download APICove</Heading>
          <Description>
            From Swagger to CLI with No-Code! APICove has got you covered with GYAT.
          </Description>
          <Actions>
            <a href={actions.primary.url} className="action primaryAction">
              {actions.primary.text}
            </a>
            <a href={actions.secondary.url} className="action secondaryAction">
              {actions.secondary.text}
            </a>
          </Actions>
        </HeroRow>
      </Container>
        <Content2Xl>
          <ShellCommand>
            <ShellText>$ curl -LsSf https://gyat.apicove.com | sh</ShellText>
          </ShellCommand>
        </Content2Xl>

      <MainFeature
        subheading={<Subheading>Elevate your API game with APICove</Subheading>}
        heading={
          <>
            <span tw="text-primary-500">G</span>o-through <span tw="text-primary-500">Y</span>our <span tw="text-primary-500">A</span>PIs <span tw="text-primary-500">T</span>ool with No-Code.
          </>
        }
        imageSrc={illustrationImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
        description="APICove's GYAT is a unique CLI powerful tool that allows you to interact with your APIs without writing any code. It's the perfect tool for developers who want to quickly test their APIs or system integrators who need to interact with multiple APIs."
        primaryButtonText="Download Now"
        primaryButtonUrl="https://go.rebelion.la/apicove-downloads"
      />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Downloads;