import React from "react";

import styles from "./chat.module.scss";
import { GalleryPhoto, PaperIcon } from "@/shared/assets";

export const Chat: React.FC = () => {
  return (
    <section className={styles.chat}>
      <div className={styles.chatInner}>
        <div className={styles.pattern} />

        <img
          className={styles.paper}
          src={PaperIcon}
          alt="Декоративный элемент"
        />

        <div className={styles.chatContent}>
          <h4 className={styles.title}>
            <span className={styles.titleUp}>Д</span>
            <span>авайте будем</span>
            <br />
            <span className={styles.titleUpDown}>Н</span>
            <span>а связи</span>
          </h4>

          <p className={styles.text}>
            Мы будем очень благодарны, если вы подтвердите своё присутствие
            <span className={styles.textBold}> до 1 июня.</span>
          </p>

          <a className={styles.btn} href="">
            Чат для гостей
          </a>
        </div>

        <div className={styles.chatGallery}>
          <img
            className={styles.chatGalleryPhoto}
            src={GalleryPhoto}
            alt="Фотография"
          />
        </div>
      </div>
    </section>
  );
};
