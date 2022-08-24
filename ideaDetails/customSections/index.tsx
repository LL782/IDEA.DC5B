import dynamic from "next/dynamic";
import { ComponentType, Suspense } from "react";

type CustomContentMap = {
  [key: string]: ComponentType;
};

const customContent: CustomContentMap = {
  "balsamic-potion": dynamic(() => import("./balsamic-potion")),
  "bearded-strange-face-colouring": dynamic(
    () => import("./bearded-strange-face-colouring")
  ),
  "rodwell-hat-trick-004": dynamic(() => import("./rodwell-hat-trick-004")),
};

interface Props {
  id: string;
}

export const CustomSections = ({ id }: Props) => {
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
