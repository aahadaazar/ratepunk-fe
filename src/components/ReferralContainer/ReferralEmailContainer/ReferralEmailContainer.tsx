import React, { ChangeEvent, FC, useState } from "react";
import styles from "./ReferralEmailContainer.module.scss";
import { Common } from "@/types/common";
import Image from "next/image";
import EmailIcon from "../../../../public/assets/email.svg";

const ReferralEmailContainer: FC<Common> = ({ fontType }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputClick = () => {
    if (error) {
      setError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.emailAddressContainer}>
      <div
        className={`${styles.error} ${fontType.className} ${
          error ? styles.errorActive : ""
        }`}
      >
        {error}
      </div>
      <div className={styles.emailWrapper}>
        <Image
          src={EmailIcon}
          alt="email-icon"
          className={styles.emailAdornment}
        />
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Enter your email address"
          value={email}
          onClick={handleInputClick}
          onChange={handleInputChange}
        />
        <button className={styles.validateButton} onClick={validateEmail}>
          Get Referral Link
        </button>
      </div>
    </div>
  );
};

export default ReferralEmailContainer;
