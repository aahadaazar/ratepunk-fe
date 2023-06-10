import { Common } from "@/types/common";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./StepsContainer.module.scss";

interface StepsContainer extends Common {
  stepName: string;
  title: string;
  description: string;
  image: string;
  imageWidth: Number;
  imageHeight: Number;
}

const StepsContainer: FC<StepsContainer> = ({
  fontType,
  stepName,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className={styles.stepsColumnContainer}>
      <div className={styles.leftColumn}>
        <Image
          width={Number(imageWidth)}
          height={Number(imageHeight)}
          src={image}
          alt="step-image"
          className={styles.image}
        />
      </div>
      <div className={styles.rightColumn}>
        <p className={`${styles.text} ${fontType.className}`}>{stepName}</p>
        <p className={styles.text}>{title}</p>
        <p className={`${styles.text} ${fontType.className}`}>{description}</p>
      </div>
    </div>
  );
};

export default StepsContainer;
