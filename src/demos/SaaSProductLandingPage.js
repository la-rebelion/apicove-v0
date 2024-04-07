import React from "react";
import { Helmet } from "react-helmet-async";

import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import TabGrid from "components/cards/TabCardGrid.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  //const HighlightedText = tw.span`text-primary-500`;  
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <>
      <Helmet>
        <title>APICove - Curated APIs for industry standard integrations</title>
        <meta name="description" content="APICove is a curated, well-documented API hub that connects to the vast world of integrations and takes your product to the next level." />
        <meta name="keywords" content="APICove, API, Integration, Industry Standard, Curated APIs, API Hub, Product Integration" />
        <meta name="author" content="La Rebelion Labs" />
      </Helmet>
      <AnimationRevealPage>
        <Hero roundedHeaderButton={true} />
        {/* <Features />
      <MainFeature
        subheading={<Subheading>Adapt and Thrive</Subheading>}
        imageSrc={prototypeIllustrationImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      /> */}

        {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
        <TabGrid
          heading={
            <>
              Checkout our <HighlightedText>API catalog</HighlightedText>
            </>
          }
        />
        {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={serverSecureIllustrationImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
        {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
        <FAQ
          imageSrc={customerSupportIllustrationSrc}
          imageContain={true}
          imageShadow={false}
          subheading="FAQs"
          heading={
            <>
              Do you have <span tw="text-primary-500">Questions ?</span>
            </>
          }
          faqs={[
            {
              question: "What is APICove ?",
              answer:
                "APICove is a curated platform that provides a comprehensive list of industry standards for niche APIs, along with services and simulators to facilitate seamless systems integration."
            },
            {
              question: "What Problem Does It Solve ?",
              answer:
                "System integration is a complex process that requires a deep understanding of the systems involved, there is a gap where system integrators need to understand niche APIs they are integrating with, which can be a daunting and time consuming process. APICove simplifies this process by providing a comprehensive list of industry standards for niche APIs, along with services and simulators to facilitate seamless systems integration."
            },
            {
              question: "How Does It Work ?",
              answer:
                "APICove provides a comprehensive list of industry standards for niche APIs, along with services and simulators to facilitate seamless systems integration. These tools allow users to test and troubleshoot their integrations without disrupting their workflow, ultimately saving time and enhancing productivity in the long run."
            },
            {
              question: "What sets APICove apart from other API hubs ?",
              answer:
                "There are no other platforms that provide a comprehensive list of industry standards for niche APIs, along with services and simulators to facilitate seamless systems integration. APICove is the only platform that offers these services, making it the go-to platform for system integrators looking to streamline their workflow and enhance productivity."
            },
            {
              question: "Is APICove compatible with cloud and on-premise solutions ?",
              answer:
                "Yes. APICove is designed to be user-friendly and compatible with both cloud and on-premise solutions, catering to the diverse needs of professionals across various industries."
            },
            {
              question: "Can APICove adapt to changing industry trends ?",
              answer:
                "Yes, APICove is committed to providing continuous updates and support to ensure that users always have access to the latest standards and features, keeping them ahead of the curve."
            },
            {
              question: "How can I get started with APICove ?",
              answer:
                "Getting started with APICove is easy. Simply sign up for an account, browse through the list of industry standards for niche APIs, and start integrating them into your systems. If you need any assistance, our support team is always available to help."
            },
            {
              question: "How much does APICove cost ?",
              answer:
                "APICove is the early stages of development and is currently free to use. However, as we continue to add more features and services, there may be a subscription fee in the future. Stay tuned for updates on pricing and subscription plans."
            },
            {
              question: "Why Cover Niche APIs ?",
              answer:
                "Niche APIs are specialized APIs that cater to specific industries or use cases. By covering niche APIs, APICove ensures that users have access to the most relevant and up-to-date standards for their integrations, making the process more efficient and effective."
            },
            {
              question: "Why Cove in the name ?",
              answer:
                "Cove is a term used to describe a sheltered and protected area, often found in nature. APICove aims to provide a similar sense of security and protection for system integrators, allowing them to navigate the complex world of APIs with ease and confidence."
            }
          ]}
        />
        <GetStarted />
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
