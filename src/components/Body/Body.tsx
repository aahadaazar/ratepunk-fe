import React, { FC, useState } from "react";
import styles from "./Body.module.scss";
import ReferralContainer from "../ReferralContainer/ReferralContainer";
import { Common } from "../../types/common";
import StepsContainer from "../StepsContainer/StepsContainer";
import InviteImage from "../../../public/assets/invite.svg";
import CollectImage from "../../../public/assets/collect-coins.svg";
import VoucherImage from "../../../public/assets/voucher.svg";

const stepsData = [
  {
    stepName: "STEP 1",
    title: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
    image: InviteImage,
    imageWidth: 110,
    imageHeight: 90,
  },
  {
    stepName: "STEP 2",
    title: "COLLECT COINS",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    image: CollectImage,
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    stepName: "STEP 3",
    title: "GET VOUCHER",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    image: VoucherImage,
    imageWidth: 110,
    imageHeight: 80,
  },
];

const Body: FC<Common> = ({ fontType }) => {
  return (
    <div className={styles.bodyContainer}>
      <div className={`${"maxContainer"} ${styles.bodyChildrenContainer}`}>
        <div className={styles.container}>
          <ReferralContainer fontType={fontType} />
        </div>
        <div className={styles.container}>
          {stepsData.map((step) => (
            <StepsContainer key={step.stepName} {...step} fontType={fontType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
