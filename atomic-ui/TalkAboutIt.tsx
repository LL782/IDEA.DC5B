import { BiLinkExternal } from "react-icons/bi";

import { SecondaryLink } from "./SecondaryLink";

type Props = {
  blogPost: string;
};
export const TalkAboutIt = ({ blogPost }: Props) => {
  if (!blogPost) {
    return null;
  }
  return (
    <SecondaryLink href={blogPost} newTab>
      Discussion{" "}
      <BiLinkExternal style={{ position: "relative", top: "1.5px" }} />
    </SecondaryLink>
  );
};
