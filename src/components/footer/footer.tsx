import React from "react";

import styles from "./footer.module.scss";
import { FooterIcon, FooterSheet } from "@/shared/assets";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.pattern} />

        <div className={styles.textWrapper}>
          <img
            className={styles.textWrapperIcon}
            src={FooterSheet}
            alt="Декоративный элемент"
          />

          <div className={styles.textContent}>
            <h4 className={styles.title}>
              <span className={styles.titleChar}>Мы</span> с&nbsp;нетерпением
              ждем&nbsp;вас!
            </h4>
            <p className={styles.text}>
              С любовью, ваши
              <span className={styles.textBold}> Нелли&nbsp;и&nbsp;Данила</span>
            </p>

            <img
              className={styles.footerIcon}
              src={FooterIcon}
              alt="Декоративный элемент"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
