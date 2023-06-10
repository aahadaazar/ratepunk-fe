import { Common } from "@/types/common";
import React, { FC } from "react";
import style from "./SocialStore.module.scss";
import Image from "next/image";

interface SocialStoreProps {
  image: string;
  lowerText: string;
}

const SocialStore: FC<SocialStoreProps> = ({ image, lowerText }) => {
  return (
    <div className={style.socialStoreContainer}>
      <Image src={image} alt="store-logo" width={48} height={48} />
      <div className={style.textContainer}>
        <span className={style.text}>available in the</span>
        <span className={style.text}>{lowerText}</span>
      </div>
    </div>
  );
};

SocialStore.propTypes = {};

export default SocialStore;
