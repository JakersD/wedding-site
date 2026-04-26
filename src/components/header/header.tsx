import React from "react";
import styles from "./header.module.scss";
import { Ticket } from "./ui/ticket";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerSection}>
      <Ticket />
    </header>
  );
};
