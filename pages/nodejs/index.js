import React from "react";
import { SkillsComBanner } from "../Global/SkillsCom/SkillsComBanner";

import { nodejsData } from "../Data/SkillsData";

function Nodejs({ allData }) {
  const {
    isBanner,
    BannerData,
    isDes,
    desData,
    isWhyApp,
    WhyAppData,
    isWhyBF,
    WhyBFData,
    isBookCall,
    BookCallData,
    isRemarkable,
    RemarkableData,
  } = nodejsData;

  return (
    <div style={{ color: "#393939" }}>
      {isBanner ? <SkillsComBanner data={BannerData} /> : null}
      {/* <hr id="skills-hr" />
      {isDes ? <SkillsComDes DescrptionData={desData} /> : null}
      {isWhyApp ? <SkillsComWhyApp data={WhyAppData} /> : null}
      {isWhyBF ? <SkillsComWhyBF data={WhyBFData} /> : null}
      {isBookCall ? <SkillsComBookCall data={BookCallData} /> : null}
      {isRemarkable ? <SkillsComRemarkable data={RemarkableData} /> : null} */}
    </div>
  );
}

export default Nodejs;
