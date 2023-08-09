import { createClient } from "next-sanity";
import  createImageUrlBuilder  from  "@sanity/image-url"
export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	apiVersion: "2022-03-25",
	useCdn: process.env.NODE_ENV === "production",
};

// const client = createClient({
// 	projectId: "pa6n8srn",
// 	dataset: "production",
// 	apiVersion: "2022-03-25",
// 	useCdn: false
//   });
//sett up client for fetching the data in the getProps page functions

export const sanityClient = createClient(config);

export const urlFor=(source:any)=>createImageUrlBuilder(config).image(source)