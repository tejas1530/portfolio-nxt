import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemas/pageInfo";
import experience from "./schemas/experience";
import projects from "./schemas/projects";
import socials from "./schemas/socials";
import skill from "./schemas/skill";
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [pageInfo, experience, projects, socials, skill  ],
};
