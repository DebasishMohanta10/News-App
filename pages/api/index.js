export default async function Search(url){
    const response = await fetch(url);
    const data = await response.json();
    const docs = data.response.docs ?? [];
    const results = docs.map(doc => {
        return {
            title: doc?.headline?.main,
            url: doc.web_url,
            uri: doc.uri,
            image: `https://www.nytimes.com/${doc?.multimedia[1]?.url}`,
            paragraph: doc.lead_paragraph,
        }
    })
    return results;
}

export async function handler(url){
    const response = await fetch(url);
    const data = await response.json();
    return data.results
}