
// import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
// import groq from 'groq'
// // import { useQuery } from "next-data"
// import { sanityClient } from '@/sanity'
import { Skill } from '@/typing'
import { sanityClient } from '../../sanity'

// const query = groq`*[_type=="skill"]{
//     image, _createdAt, jobTitle, _rev, _type, progress, _id, _updatedAt
// }`
type Data = {
    skills: Skill[]

}
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     // const skills: Skill[] = await sanityClient.fetch(query)
//     // res.status(200).json({skills})
//     const skills: Skill[] = await sanityClient.fetch(query)
//     return res.status(200).json({ skills })

// }

export default async function getProfile() {
    return sanityClient.fetch(
      groq`*[_type == "skill"]{
        _createdAt, jobTitle, _rev, _type, progress, _id, _updatedAt, image
      }`
    );
  }


