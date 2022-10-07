import { NextComponentType, NextPageContext } from "next/types";
import { useEffect } from "react";
import { noteWebActions } from "./noteWebActions";

interface Props {
  component: NextComponentType<NextPageContext>;
}

export function NotePageView({ component }: Props) {
  useEffect(() => {
    noteWebActions({ action: "Page view" });
  }, [component]);
  return null;
}
