import React from "react";
import styles from "./dress-code.module.scss";

import {
  BluePalette,
  BrownPalette,
  DarkBrownPalette,
  GreenPalette,
  PinkPalette,
  YellowPalette,
} from "@/shared/assets";

import { BowIcon } from "@/shared/assets";

export const DressCode: React.FC = () => {
  return (
    <section className={styles.dressCode}>
      <div className={styles.dressCodeTop} aria-hidden="true">
        <img className={styles.bow} src={BowIcon} alt="Декоративный элемент" />
      </div>

      <div className={styles.inner}>
        <div className={styles.dressCodeBody}>
          <div className={styles.dressCodeContent}>
            <h2 className={styles.title}>
              <span className={styles.titleChar}>Д</span>ресс-код
            </h2>

            <p className={styles.text}>
              Главное правило — приходите в том, в&nbsp;чем&nbsp;вам
              <span className={styles.textBold}> комфортно</span> и
              <span className={styles.textBold}> красиво.</span>
              <br />
              Мы будем рады, если вы поддержите цветовую палитру, которая будет
              сопровождать этот день:
            </p>

            <div className={styles.palette}>
              <img
                className={styles.paletteColor}
                src={YellowPalette}
                alt="Желтые цвета одежды"
              />
              <img
                className={styles.paletteColor}
                src={BluePalette}
                alt="Голубые цвета одежды"
              />
              <img
                className={styles.paletteColor}
                src={PinkPalette}
                alt="Розовые цвета одежды"
              />
              <img
                className={styles.paletteColor}
                src={GreenPalette}
                alt="Зеленые цвета одежды"
              />
              <img
                className={styles.paletteColor}
                src={BrownPalette}
                alt="Коричневые цвета одежды"
              />
              <img
                className={styles.paletteColor}
                src={DarkBrownPalette}
                alt="Темно-коричневые цвета одежды"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
