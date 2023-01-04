import React from "react";
import { DigitalMarketClientsAdd } from "./DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "./DigitalMarketingBanner";
import { DigitalMarketingHiring } from "./DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "./DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "./DigitaMarketWeOffers";
import { WhatDigitalMarket } from "./WhatDigitalMarket";

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

export default function DigitalMarketing() {
  return (
    <div>
      <DigitalMarketingBanner />
      <WhatDigitalMarket />
      <DigitaMarketWeOffers />
      <DigitalMarketingHiring />
      <DigitalMarketClientsAdd />
      <DigitalmarketWhyConsider />

      <StoriesSection />
      <Industries />
      <PlanProject />
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
