// react
import { createContext, lazy, useState } from "react";

// components
import ConstrProgress from "../ConstrProgress/ConstrProgress";
import Parallax1 from "../../entities/Parallax1/Parallax1";
import Parallax2 from "../../entities/Parallax2/Parallax2";
import Parallax3 from "../../entities/Parallax3/Parallax3";
import MainScreen from "../MainScreen/MainScreen";
import Advantages from "../Advantagas/Advantages";
import Payments from "../Payments/Payments";
import AboutUs from "../AboutUs/AboutUs";
import Planing from "../Planing/Planing";
import Footer from "../Footer/Footer";

// styles
import "./App.css";

const CallbackModal = lazy(
  () => import("../../entities/CallbackModal/CallbackModal")
);

interface IModalContext {
  isOpenModal: boolean;
  handleChangeModal: () => void;
}

export const ModalOpenContext = createContext({} as IModalContext);

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleChangeModal = () => setIsOpenModal(!isOpenModal);

  return (
    <ModalOpenContext.Provider
      value={{
        isOpenModal,
        handleChangeModal,
      }}
    >
      <MainScreen />
      <main>
        <CallbackModal />
        <AboutUs />
        <Parallax1 />
        <Advantages />
        <Parallax2 />
        <Planing />
        <ConstrProgress />
        <Parallax3 />
        <Payments />
      </main>
      <Footer />
    </ModalOpenContext.Provider>
  );
}
