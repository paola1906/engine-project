import type { IArticle } from "@/models/article";
import getArticleData from "./getArticleData"

const getArticleById = async (id: number): Promise<IArticle> => {
    const data: any[] = await getArticleData();
    return data.find(article => article.Id === id);
}

export default getArticleById;