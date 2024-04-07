import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as VersionIcon } from "feather-icons/dist/icons/git-branch.svg";

import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
// const CardText = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const CardHeader = tw.div`flex justify-between items-center`;
const CardCode = tw.div`font-semibold text-sm text-gray-600`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;
const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const Column = tw.div`flex-1`;
const TextColumn = tw(Column)`max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Actions = tw.div`flex-col sm:flex-row justify-center lg:justify-start`;
const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const ActionButton = tw(
  Link
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;

export default ({
  heading = "Checkout The Catalog",
  tabs = {
    Popular: [
      {
        imageSrc: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
        title: "Kubernetes",
        content: "Kubernetes API",
        price: "Free",
        rating: "5.0",
        reviews: "1000",
        url: "https://kubernetes.io/",
        version: "1.27.0",
        releaseDate: "2021-07-01",
        category: "CNCF"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1658204191944-374e8115a2de?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
        title: "Account Management",
        code: "TMF666",
        content: "Provides standardized mechanism for the management of billing and settlement accounts, as well as for financial accounting (account receivable) either in B2B or B2B2C contexts",
        price: "Free",
        rating: "4.5",
        reviews: "500",
        url: "https://www.tmforum.org/oda/open-apis/table",
        version: "v4.0.0",
        releaseDate: "01-Jul-2021",
        category: "TMF"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1662394032160-b58b52576251?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
        title: "DMaaP Message Router API",
        content: "ONAP API",
        price: "Free",
        rating: "4.0",
        reviews: "400",
        url: "https://docs.onap.org/projects/onap-dmaap-messagerouter-messageservice/en/latest/offeredapis/offeredapis.html",
        version: "4.0.0",
        category: "ONAP"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1637099536974-22c1d38eed51?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
        title: "Oracle Network Service Orchestration",
        content: "Network Service Orchestration enables service providers to create, implement, and manage the life cycles of network services and their deployment as interconnected virtual network functions (VNFs) on virtual resources.",
        price: "Free",
        rating: "5.0",
        reviews: "10",
        url: "https://docs.oracle.com/communications/E80745_01/doc.735/e80746/restapi.htm#NSOIM201",
        version: "7.3.5"
      },
    ],
    TMForum: getRandomCards('TMF'),
    ONAP: getRandomCards('ONAP'),
    LFN: getRandomCards('CNCF'),
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  const primaryButtonUrl = "/catalog";
  const primaryButtonText = "Explore Catalog";
  const secondaryButtonUrl = "/login";
  const secondaryButtonText = "Login";
  const buttonRoundedCss = "";

  return (
    <Container id="catalog">
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>View</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardCode>{card.code}</CardCode>
                    </CardHeader>
                    {/* truncate 130 chars in content */}
                    <CardContent>{card.content.length > 130 ? card.content.substring(0, 130) + "..." : card.content}</CardContent>
                    {/* <CardPrice>{card.price}</CardPrice> */}
                  </CardText>
                  <CardMeta>
                    {/* Only if version is defined */}
                    {card.version && (
                      <CardMetaFeature>
                        <VersionIcon /> {card.version}
                      </CardMetaFeature>)}
                    {/* Only if releaseDate is defined */}
                    {card.releaseDate && (
                      <CardMetaFeature>
                        <TimeIcon /> {card.releaseDate}
                      </CardMetaFeature>)}
                    <CardMetaFeature>
                      <TagIcon /> {card.category ? card.category : "General"}
                    </CardMetaFeature>
                  </CardMeta>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}

        <TextColumn>
          <Actions>
            <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
              {primaryButtonText}
            </PrimaryButton>
            <SecondaryButton href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
          </Actions>
        </TextColumn>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards, receives the category and filter by this */
const getRandomCards = (category) => {
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "Kubernetes",
      content: "Kubernetes API",
      price: "Free",
      rating: "5.0",
      reviews: "1000",
      url: "https://kubernetes.io/",
      version: "1.27.0",
      releaseDate: "2021-07-01",
      category: "CNCF"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1658204191944-374e8115a2de?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "Account Management",
      code: "TMF666",
      content: "Provides standardized mechanism for the management of billing and settlement accounts, as well as for financial accounting (account receivable) either in B2B or B2B2C contexts",
      price: "Free",
      rating: "4.5",
      reviews: "500",
      url: "https://www.tmforum.org/oda/open-apis/table",
      version: "v4.0.0",
      releaseDate: "01-Jul-2021",
      category: "TMF"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1658204191944-374e8115a2de?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "Document Management",
      code: "TMF667",
      content: "Provides the operations to synchronize documents and document versions across systems.",
      price: "Free",
      rating: "4.5",
      reviews: "500",
      url: "https://www.tmforum.org/oda/open-apis/table",
      version: "v4.0.0",
      category: "TMF"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1662394032160-b58b52576251?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "DMaaP Message Router API",
      content: "ONAP API",
      price: "Free",
      rating: "4.0",
      reviews: "400",
      url: "https://docs.onap.org/projects/onap-dmaap-messagerouter-messageservice/en/latest/offeredapis/offeredapis.html",
      version: "4.0.0",
      category: "ONAP"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1662394032160-b58b52576251?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "SDC",
      code: "SDCE-7",
      content: "ONAP API",
      price: "Free",
      rating: "4.0",
      reviews: "400",
      url: "https://docs.onap.org/projects/onap-sdc/en/latest/offeredapis.html",
      version: "4.0.0",
      category: "ONAP"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1662057219054-ac91f1c562b5?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "Network Service Orchestration",
      content: "Google API",
      price: "Free",
      rating: "5.0",
      reviews: "1000",
      url: "https://cloud.google.com/",
      version: "1.27.0",
      releaseDate: "2021-07-01",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1655437448027-e47ca54198ab?q=80&w=2324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=80",
      title: "LF Networking",
      content: "Linux Foundation API",
      price: "Free",
      rating: "5.0",
      reviews: "1000",
      url: "https://lfnetworking.org/project-nephio-joins-lf-networking-to-accelerate-cloud-native-automation-on-kubernetes/",
      version: "1.27.0",
      releaseDate: "2021-07-01",
      category: "LFN"
    },
  ];

  // Shuffle array
  return cards.filter(card => card.category === category).sort(() => Math.random() - 0.5);
};
