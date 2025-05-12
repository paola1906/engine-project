import type { IArticle } from "@/models/article";
import getArticleData from "./getArticleData"

const queryArticle = async (criteria: string): Promise<IArticle[]> => {
    const data: IArticle[] = await getArticleData();
    return data.filter(article => {
        return article.Title.includes(criteria) || article.Sections.some(section =>
            (section.Type !== 'image') && section.Value?.includes(criteria) || section.Items?.some(item =>
                item.Title?.includes(criteria) || item.Value?.includes(criteria)
            ))
    });
}

export default queryArticle;