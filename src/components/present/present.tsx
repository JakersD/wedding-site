import React from "react";
import styles from "./present.module.scss";
import { HeartIcon } from "@/shared/assets";

export const Present: React.FC = () => {
  return (
    <section className={styles.present}>
      <div className={styles.presentInner}>
        <h1 className={styles.title}>
          <span>
            <span className={styles.titleUp}>Н</span>
            <span>ебольшие</span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.titleUpDown}>П</span>
            <span>ожелания</span>
          </span>
        </h1>
        <div className={styles.text}>
          <p className={styles.textP}>
            Мы очень любим цветы, но сразу после свадьбы уезжаем в путешествие,
            поэтому не&nbsp;сможем в полной мере насладиться подаренными
            букетами.
          </p>
          <p className={styles.textP}>
            Если вам захочется порадовать нас цветами,&nbsp;мы подготовили
            цветочный депозит&nbsp;—&nbsp;по ссылке можно внести любую
            <span className={styles.textPBold}> комфортную&nbsp;сумму.</span>
          </p>
          <p className={styles.textP}>
            После возвращения с радостью выберем цветы, которые будут долго
            радовать нас и напоминать об этом дне.
          </p>
          <a className={styles.btn} href="#">
            Сделать подарок
          </a>
        </div>

        <div className={styles.heartWrapper}>
          <img
            className={styles.heart}
            src={HeartIcon}
            alt="Декоративный элемент"
          />
          <div className={styles.heartContent}>
            <span className={styles.heartLabel}>До свадьбы осталось:</span>
            <ul className={styles.cardTimer}>
              <li className={styles.cardTimerItem}>
                <p className={styles.cardTimerTime}>128</p>
                <p className={styles.cardTimerDesc}>дней</p>
              </li>
              <li className={styles.cardTimerItem}>
                <p className={styles.cardTimerTime}>16</p>
                <p className={styles.cardTimerDesc}>часов</p>
              </li>
              <li className={styles.cardTimerItem}>
                <p className={styles.cardTimerTime}>10</p>
                <p className={styles.cardTimerDesc}>минут</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
