import React from "react";

import { MobileUiUxBanner } from "./MobileUiUxBanner";
import { MobileUiUxToNotched } from "./MobileUiUxToNotched";
import { MobileUXUIServiceOffer } from "./MobileUXUIServiceOffer";
import { MobileUxUiB2cSolution } from "./MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "./MobileUxUiDesignPartner";
import { MobileKickStart } from "./MobileKickStart";
import { MobileUXReactNative } from "./MobileUXReactNative";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function MobileExperience() {
  return (
    <div>
      <MobileUiUxBanner />
      <MobileUiUxToNotched />
      <MobileUXUIServiceOffer />
      <MobileUxUiB2cSolution />
      <MobileUxUiDesignPartner />
      <MobileKickStart />
      <MobileUXReactNative />

      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
}
