import type { Idea } from "../../@types";
import dev from "./ideas.dev";
import prod from "./ideas.prod";

const ideas: Idea[] = process.env.NODE_ENV === "production" ? prod : dev;

export default ideas;
