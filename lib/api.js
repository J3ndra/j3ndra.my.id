import client from './sanity'

export async function getProjects() {
    const data = await client.fetch(
        `*[_type == "projects"] | order(_updatedAt desc)`
    )
    return data
}