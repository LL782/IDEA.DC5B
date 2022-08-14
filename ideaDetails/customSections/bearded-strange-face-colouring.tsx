import Image from "next/image";

export default function CustomContent() {
  return (
    <>
      <p>Hey 👋</p>
      <p>
        Want to see the black and white version, like a preview of the download?
      </p>

      <Image
        src={"/idea-images/IMG_1766.png"}
        alt={"Black and white version of the main artwork"}
        width="800px"
        height="800px"
        layout="responsive"
      />
      <p>I&apos;ll sort that out for you. Watch this space...</p>
    </>
  );
}
