import { SecondaryLink } from "../../atomic-ui/SecondaryLink";

interface Props {
  blogPost?: string;
}

export const TalkAboutIt = ({ blogPost }: Props) => {
  if (!blogPost) {
    return null;
  }
  return (
    <p>
      <SecondaryLink href={blogPost}>Let&apos;s talk about it...</SecondaryLink>
    </p>
  );
};
