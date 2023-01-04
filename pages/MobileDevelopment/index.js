import React from "react";
import { MobileDevMainBanner } from "./MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "./MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "./MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "./MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "./MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "./MobileDevMainWhyChoose/MobileDevMainWhyChoose";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";
export default function MobileDevMain () {
  return (
    <div>
      <MobileDevMainBanner />
      <MobileDevMainServices />
      <MobileDevMainCards />
      <MobileDevMainSolutions />
      <MobileDevMainProject />
      <MobileDevMainWhyChoose />

      {/* Other react required components */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio /> */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};
