export interface ArticleDataInterface {
    title: string;
    overview: string;
    _createdAt: string;
    keyfacts: string[];
    content: any;
    mainImage: string;
    mainVideo: string;
    _id: string;
    slug: {
        current: string;
    }
}