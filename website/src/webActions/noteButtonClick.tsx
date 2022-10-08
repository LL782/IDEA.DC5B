import { noteWebActions } from "./noteWebActions";

export function noteButtonClick(type: string, id: string, forLater?: true) {
  noteWebActions(
    {
      action: "Click button",
      buttonName: `${type} :: ${id}`,
    },
    forLater
  );
}
