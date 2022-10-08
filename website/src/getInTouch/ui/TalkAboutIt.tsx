import { noteButtonClick } from "src/webActions/noteButtonClick";
import { PrimaryLink } from "../../atomic-ui/PrimaryLink";
import { SecondaryLink } from "../../atomic-ui/SecondaryLink";
interface Props {
  blogPost?: string;
  id: string;
  type?: "primary";
}

export const TalkAboutIt = ({ blogPost, id, type }: Props) => {
  if (!blogPost) {
    return null;
  }
  const text = "Let's talk about it...";
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
  noteButtonClick("Talk About It", id, true);
}
