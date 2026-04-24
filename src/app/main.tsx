import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { MainPage } from "@/pages/main";

createRoot(document.getElementById("root")!).render(
  <>
    <MainPage />
  </>,
);
