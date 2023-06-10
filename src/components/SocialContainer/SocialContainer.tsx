import React, { FC } from "react";
import styles from "./SocialContainer.module.scss";
import { Common } from "@/types/common";
import SocialStore from "./SocialStore/SocialStore";
import ChromeIcon from "../../../public/assets/chrome.svg";
import AppIcon from "../../../public/assets/apple.svg";

const SocialStoreData = [
  {
    image: ChromeIcon,
    lowerText: "chrome web store",
  },
  {
    image: AppIcon,
    lowerText: "apple app store",
  },
];

const SocialContainer: FC<Common> = ({ fontType }) => {
  return (
    <div className={`${styles.socialContainer} ${fontType.className}`}>
      <div className={`${"maxContainer"} ${styles.socialChildrenContainer}`}>
        {SocialStoreData.map((store) => (
          <SocialStore key={store.lowerText} {...store} />
        ))}

        <p className={styles.reviews}>
          &#9733;&#9733;&#9733;&#9733;&#9733; Chrome Store reviews
        </p>
      </div>
    </div>
  );
};

export default SocialContainer;
