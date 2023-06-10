import React, { FC } from "react";
import styles from "./ReferralContainer.module.scss";
import { Common } from "@/types/common";
import ReferralEmailContainer from "./ReferralEmailContainer/ReferralEmailContainer";

const ReferralContainer: FC<Common> = ({ fontType }) => {
  return (
    <div className={styles.referralContainerGrey}>
      <h1 className={styles.heading}>
        REFER FRIENDS AND
        <br />
        GET REWARDS
      </h1>
      <p className={`${styles.description} ${fontType.className}`}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      <ReferralEmailContainer fontType={fontType} />
      <p className={`${styles.disclaimer} ${fontType.className}`}>
        Limits on max rewards apply.
      </p>
    </div>
  );
};

export default ReferralContainer;
