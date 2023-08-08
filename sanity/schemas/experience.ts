import { defineField, defineType } from "sanity";

export default defineType({
	name: "experience",
	title: "Experience",
	type: "document",
	fields: [
		defineField({
			name: "jobTitle",
			title: "JobTitle",
			type: "string",
		}),
		defineField({
			name: "company",
			title: "Company",
			type: "text",
		}),
		defineField({
			name: "companyImage",
			title: "CompanyImage",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "dateStarted",
			title: "DateStarted",
			type: "string",
		}),
		defineField({
			name: "dateEnded",
			title: "DateEnded",
			type: "string",
		}),
		defineField({
			name: "isCurrentWorkingHere",
			title: "IsCurrentWorkingHere",
			type: "boolean",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "string",
		}),
		defineField({
			name: "technology",
			title: "Technology",
			type: "array",
			of: [{ type: "reference", to: { type: "skill" } }],
		}),
		defineField({
			name: "points",
			title: "Points",
			type: "array",
			of: [{ type: "string" }],
		}),
	],
});
