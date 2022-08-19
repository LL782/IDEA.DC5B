import dynamic from "next/dynamic";
import { Suspense } from "react";

const customContent = {
  "balsamic-potion": dynamic(() => import("./balsamic-potion")),
  "bearded-strange-face-colouring": dynamic(
    () => import("./bearded-strange-face-colouring")
  ),
  "rodwell-hat-trick-004": dynamic(() => import("./rodwell-hat-trick-004")),
};

export const CustomSections = ({ id }) => {
  const Content = customContent[id];

  if (!Content) {
    return null;
  }

  return (
    <Suspense fallback={`Loading...`}>
      <Content />
    </Suspense>
  );
};
