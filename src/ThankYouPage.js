import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
// eslint-disable-next-line
import { css } from "styled-components/macro"; 
// import GitHubButton from "react-github-btn";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import logo from "images/logo.png";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("thankyou", "G-R63DV8HNZS");

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              APICove
            </LogoLink>
            <div tw="flex flex-col lg:flex-row items-center">
              <NavLink target="_blank" href="#">
                License & Usage
              </NavLink>
              <NavLink target="_blank" href="https://twitter.com/larebelion">
                Twitter
              </NavLink>
              <NavLink target="_blank" href="https://rebelion.la">
                Who Are We ?
              </NavLink>
              <PrimaryNavLink target="_blank" href="/login">
                Login
              </PrimaryNavLink>
            </div>
          </NavRow>
          <HeroRow>
            <Heading>Thank You!</Heading>
            {/* <Description tw="mt-12">Your Download Will Begin Shortly. If it does not, <NavLink href={downloadUrl} download>click this link</NavLink>.</Description> */}
            <div tw="mt-12 text-center">
              We are working on much more tools and libraries to help developers build better products, similar to APICove, always with <span tw="font-bold">best developer
              experience</span> in mind. Stay tuned!
            </div>
            <div tw="mt-12 text-center">
              If you like APICove and want to be notified when new features are released, subscribe to the newsletter and follow us on LinkedIn.
              <div tw="mt-12 flex flex-col items-center">
                <a
                  href="https://linkedin.com/company/rebelion"
                  className="linkedin-follow-button"
                  data-size="large"
                  data-show-count="true"
                >
                  Follow @LinkedIn
                </a>
              </div>
            </div>
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
