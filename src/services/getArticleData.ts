import type { IArticle } from "@/models/article";

const getArticleData = async (): Promise<IArticle[]> => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}/data/data.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IArticle[] = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching article data: ${error}`);
    }
}

export default getArticleData;