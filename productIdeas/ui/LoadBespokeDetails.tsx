import { Suspense } from "react";
import { lookupById } from "../bespokeDetails/lookupById";

interface Props {
  id: string;
}

export const LoadBespokeDetails = ({ id }: Props) => {
  const Content = lookupById[id];

  if (!Content) {
    return null;
  }

  return (
    <Suspense fallback={`Loading...`}>
      <Content />
    </Suspense>
  );
};
