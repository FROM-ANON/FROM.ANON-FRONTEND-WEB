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
