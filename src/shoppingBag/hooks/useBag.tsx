import { useContext } from "react";
import { BagContext } from "../BagContext";

export const useBag = () => useContext(BagContext);
