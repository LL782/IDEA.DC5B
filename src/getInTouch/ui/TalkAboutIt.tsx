import { SecondaryLink } from "../../atomic-ui/SecondaryLink";

interface Props {
  blogPost?: string;
}

export const TalkAboutIt = ({ blogPost }: Props) => {
  if (!blogPost) {
    return null;
  }
  return <SecondaryLink href={blogPost}>Open comms</SecondaryLink>;
};