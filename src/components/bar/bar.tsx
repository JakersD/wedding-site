import React from "react";
import styles from "./bar.module.scss";

import { Ticker } from "motion-plus/react";

interface IProps {}

export const Bar: React.FC<IProps> = ({}) => {
  return (
    <nav className={styles.wrapper}>
      <Ticker
        items={[<span className={styles.text}>Wedding Day</span>]}
        gap={32}
        velocity={32}
      />
    </nav>
  );
};
