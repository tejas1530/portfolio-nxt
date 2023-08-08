import { defineField, defineType } from "sanity";

export default defineType({
	name: "skill",
	title: "Skill",
	type: "document",
	fields: [
		defineField({
			name: "jobTitle",
			title: "JobTitle",
			description: "Title of skill",
			type: "string",
		}),
		defineField({
			name: "progress",
			title: "Progress",
            description:'progress of skill from 0 to 100% ',
			type: "number",
            validation:(Rule)=>Rule.min(0).max(100),
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
