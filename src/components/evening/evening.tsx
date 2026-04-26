import React from "react";

import styles from "./evening.module.scss";
import { MirrorIcon } from "@/shared/assets";

export const Evening: React.FC = () => {
  return (
    <section className={styles.evening}>
      <div className={styles.tear} />

      <div className={styles.background} />

      <div className={styles.inner}>
        <img
          className={styles.mirror}
          src={MirrorIcon}
          alt="Декоративный элемент"
        />

        <div className={styles.card}>
          <h3 className={styles.title}>
            <span className={styles.titleChar}>Т</span>еплый вечер с близкими
          </h3>

          <p className={styles.text}>
            После росписи мы продолжим праздник уютным ужином, танцами и
            разговорами.
            <br />
            Мы собрали самых
            <span className={styles.textBold}> близких</span> и
            <span className={styles.textBold}>&nbsp;родных&nbsp;людей</span>, и
            для нас большая радость провести этот день вместе с вами — делиться
            улыбками, объятиями&nbsp;и&nbsp;создавать воспоминания&nbsp;на всю
            жизнь.
          </p>
        </div>
      </div>

      <div className={styles.beads} />
    </section>
  );
};
