// Handle all fetch requests, api calls

export const wsjUrl = 'https://newsapi.org/v2/everything?domains=wsj.com'
export const businessUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business'
export const techUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch'
export const HomeHeadLines = 'https://newsapi.org/v2/top-headlines?country=us'

export default async function getNews(url) {
    const apiKey = "7f9560b60bda44779413f255c73bfca9"
    try {
        const result = await fetch(`${url}&apiKey=${apiKey}`)
        const json = await result.json()
        return json
    } catch (error) {
        console.log(error)
        return
    }
}
