import {sanityClient} from '../../sanity'
import { groq } from 'next-sanity'
import {Experience, PageInfo, Project, Skill, Social} from '../../typings'
export async function fetchSocials() :Promise<Social[]> {
    return sanityClient.fetch(groq`
    *[_type == 'social']
` , {next : {revalidate : 3600}})
}


export async function fetchExperience() :Promise<Experience[]> {
    return sanityClient.fetch(groq`*[_type == 'experience']{..., technologies[]->}`, {next : {revalidate : 3600}})
}

export async function fetchPageInfo() :Promise<PageInfo> {
    return sanityClient.fetch(groq`*[_type == 'pageInfo'][0]`, {next : {revalidate : 3600}})
}

export async function fetchSkills() :Promise<Skill[]> {
    return sanityClient.fetch(groq`
    *[_type == 'skill']
`, {next : {revalidate : 3600}})
}
export async function fetchProjects() :Promise<Project[]> {
    return sanityClient.fetch(groq`
    *[_type == 'project']{
        ...,
        technologies[]->
    }
`, {next : {revalidate : 3600}})
}