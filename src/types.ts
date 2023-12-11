export interface mailType {
    mailId: number;
    userId: number;
    mailPaperId: number;
    text: string;
    createdTime?: string;
    isRead?: boolean;
}
export interface userType {
    userId: number;
    instaUserId: number;
    instaId: string;
    pro?: boolean;
}
export interface mailpaperType {
    id: number;
    pro: boolean;
    isFavorite?: boolean;
}
export interface favoriteMPType {
    id: number;
    userId: number;
    mailPaperId: number;
}
