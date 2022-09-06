import type { Idea } from "../../businessLogic/Idea";
import dev from "./ideas.dev";
import prod from "./ideas.prod";

const ideas: Idea[] = process.env.NODE_ENV === "production" ? prod : dev;

export default ideas;
