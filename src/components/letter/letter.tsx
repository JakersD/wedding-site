import React from "react";
import styles from "./letter.module.scss";
import { LetterIcon } from "@/shared/assets";

interface IProps {}

export const Letter: React.FC<IProps> = ({}) => {
  return (
    <section className={styles.inviteSection}>
      <div className={styles.letterScene}>
        <div className={styles.letter}>
          <img className={styles.letterBg} src={LetterIcon} alt="Письмо" />

          <div className={styles.letterContent}>
            <h2 className={styles.letterTitle}>
              <span className={styles.letterTitleChar}>Д</span>орогие
              родные&nbsp;и&nbsp;друзья!
            </h2>
            <p className={styles.letterText}>
              В нашей жизни наступает особенный день,
              <br /> и нам очень хочется разделить его с теми,
              <br />
              кто для нас по-настоящему
              <span className={styles.letterTextBold}> важен.</span>
            </p>
            <p className={styles.letterText}>
              Мы будем счастливы, если вы проведёте
              <br />
              этот день с нами и станете
              <br />
              частью начала нашей
              <br />
              <span className={styles.letterTextBold}>семейной истории.</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.announce}>
        <h3 className={styles.announceTitle}>
          <span className={styles.announceTitleChar}>Б</span>удем ждать вас:
        </h3>
        <div className={styles.announceText}>
          <p className={styles.announceTextSubTitle}>На роспись — 16:00</p>
          <p className={styles.announceTextDescription}>
            Во Дворце Бракосочетания №1 по адресу:
            Малый&nbsp;Харитоньевский&nbsp;пер. д.&nbsp;10,&nbsp;стр.&nbsp;1
          </p>
        </div>
        <div className={styles.announceText}>
          <p className={styles.announceTextSubTitle}>На празднование — 17:30</p>
          <p className={styles.announceTextDescription}>
            В ресторане “Нескучный” по адресу:
            ул.&nbsp;Крымский&nbsp;Вал,&nbsp;9, стр.&nbsp;26, Парк&nbsp;Горького
          </p>
        </div>
      </div>
    </section>
  );
};
