import React from "react";
import styled from "styled-components";

import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import StatsIllustration from "../../images/stats-illustration.svg";
import CustomersLogoStripImage from "../../images/industry-standard-transparent.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative flex-1 flex flex-col`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
  const [email, setEmail] = React.useState("");

  const handleUpdatesSubscription = async (e) => {
    e.preventDefault();
    // send the form data to sendfox as params
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('list', '496065');
    const url = `https://api.sendfox.com/contacts?${params.toString()}`;
    console.log(`${process.env.REACT_APP_SENDFOX_TOKEN}`);
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",//"http://localhost:3000",
          // tells the browser that the server allows requests with the access-control-allow-origin header from any origin
          "Access-Control-Allow-Headers": "*",//"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Authorization": `Bearer ${process.env.REACT_APP_SENDFOX_TOKEN}`,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },      
      body: JSON.stringify({})      //JSON.stringify({ email })
    });

    if (response.ok) {
      alert('Email submitted successfully!');
      setEmail('');
    } else {
      alert('There was an error. Please try again.');
    }
  }

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Curated APIs for<span tw="text-primary-500"> industry standard integrations.</span>
            </Heading>
            <Paragraph>
              APICove is a curated, well-documented API hub that connects to the vast world of integrations and takes your product to the next level.
            </Paragraph>
            <Actions>
              <form 
                onSubmit={handleUpdatesSubscription}
                tw="flex flex-col sm:flex-row items-center" 
              >
                <input
                  type="email"
                  id="sendfox_form_email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  tw="sm:w-3/4 w-full"
                  placeholder="Your E-mail Address"
                />
                {/* input hidden */}
                <input type="hidden" name="lists[]" value="496065" />
                <button type="submit">Get Updates</button>
              </form>
            </Actions>
            <CustomersLogoStrip>
              <p>Industry Standard APIs for your integrations</p>
              <img src={CustomersLogoStripImage} alt="Industry Standard APIs" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={StatsIllustration} alt="Build APIs" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
