export interface IArticle {
    Id: number;
    Title: string;
    Sections: IArticleItem[]
}

export interface IArticleItem {
    Type: 'image' | 'list' | 'paragraph' | 'listItem';
    Format?: string;
    Items?: IArticleItem[];
    Title?: string;
    Value?: string;
}