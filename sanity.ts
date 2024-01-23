//Helper file for sanity created by me
import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset : process.env.SANITY_STUDIO_DATASET || 'production',
    projectId : process.env.SANITY_STUDIO_PROJECT_ID || "a786y5e1",
    apiVersion : '2024-01-16',
    useCdn : process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config);

export const urlFor = (source : any) =>{ 
    return createImageUrlBuilder(config).image(source)
}
    //this helper function is created so we get the url for the image from the sanity production studio that is recently deployed  