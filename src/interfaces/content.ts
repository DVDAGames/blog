import type { Game } from "./game";
import type { Post } from "./post";
import type { Project } from "./project";

export type ContentType = "post" | "game" | "project";

export type Content = Post | Game | Project;
