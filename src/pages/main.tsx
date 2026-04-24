import { Header } from "@/components/header/header";
import { Bar } from "@/components/bar/bar";
import React from "react";
import { Letter } from "@/components/letter/letter";
import { DressCode } from "@/components/dress-code/dress-code";
import { Evening } from "@/components/evening/evening";

export const MainPage: React.FC = ({}) => {
  return (
    <div>
      <Bar />
      <Header />
      <Letter />
      <DressCode />
      <Evening />
    </div>
  );
};
