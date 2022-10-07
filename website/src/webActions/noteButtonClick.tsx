import { noteWebActions } from "./noteWebActions";

export function noteButtonClick(type: string, id: string) {
  noteWebActions({
    action: "Click button",
    buttonName: `${type} :: ${id}`,
  });
}
