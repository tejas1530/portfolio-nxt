import { defineField, defineType } from "sanity";

export default defineType({
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			name: "jobTitle",
			title: "JobTitle",
			description: "Title of project",
			type: "string",
		}),
		defineField({
			name: "summary",
			title: "Summary",
			type: "text",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "skill" } }],
		}),
		defineField({
			name: "linkToBuild",
			title: "LinkToBuild",
			type: "url",
		}),
	],
});
