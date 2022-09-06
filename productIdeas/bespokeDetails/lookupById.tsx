import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const lookupById: { [key: string]: ComponentType } = {
  "balsamic-potion": dynamic(() => import("./content/balsamic-potion")),
  "bearded-strange-face-colouring": dynamic(
    () => import("./content/bearded-strange-face-colouring")
  ),
  "rodwell-hat-trick-004": dynamic(
    () => import("./content/rodwell-hat-trick-004")
  ),
};
