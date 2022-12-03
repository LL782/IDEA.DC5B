import { noteButtonClick } from "../../webActions/noteButtonClick";
import { PrimaryLink } from "../../atomic-ui/PrimaryLink";
import { SecondaryLink } from "../../atomic-ui/SecondaryLink";

const BUTTON_TEXT = "See blog post";

interface Props {
  blogPost?: string;
  id: string;
  type?: "primary";
}

export const BlogLink = ({ blogPost, id, type }: Props) => {
  if (!blogPost) {
    return null;
  }
  const text = BUTTON_TEXT;
  const onClick = () => alsoNoteTheClick(id);
  return (
    <p>
      {type === "primary" ? (
        <PrimaryLink onClick={onClick} href={blogPost}>
          {text}
        </PrimaryLink>
      ) : (
        <SecondaryLink onClick={onClick} href={blogPost}>
          {text}
        </SecondaryLink>
      )}
    </p>
  );
};

function alsoNoteTheClick(id: string) {
  noteButtonClick(BUTTON_TEXT, id, true);
}
