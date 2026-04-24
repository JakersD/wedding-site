import React from "react";

import { MainPhoto } from "@/shared/assets";
import { TicketIcon } from "@/shared/assets";

import styles from "./ticket.module.scss";

export const Ticket: React.FC = ({}) => {
  return (
    <div className={styles.ticket}>
      <img className={styles.ticketBg} src={TicketIcon} alt="" />

      <div className={styles.ticketContent}>
        <div className={styles.ticketTop}>
          <h1 className={styles.ticketTitle}>
            <span>
              <span className={styles.ticketTitleUp}>Н</span>
              <span className={styles.ticketTitleDown}>елли</span>
            </span>
            <span className={styles.ticketTitleLine}>
              <span className={styles.ticketTitleUp}>&Д</span>
              <span className={styles.ticketTitleDown}>анила</span>
            </span>
          </h1>
        </div>

        <div className={styles.ticketPhoto}>
          <img src={MainPhoto} alt="Нелли и Данила" />
        </div>

        <div className={styles.ticketDivider}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.ticketDividerDot} />
          ))}
        </div>

        <div className={styles.ticketBottom}>
          <p className={styles.ticketBottomSubtitle}>Приглашаем на свадьбу</p>
          <p className={styles.ticketBottomDate}>
            <span className={styles.ticketBottomDateExac}>22</span>
            <span className={styles.ticketBottomDateDivide} />
            <span className={styles.ticketBottomDateExac}>06</span>
            <span className={styles.ticketBottomDateDivide} />
            <span className={styles.ticketBottomDateExac}>2026</span>
          </p>
        </div>
      </div>
    </div>
  );
};
