export interface mailType {
    mailId: number;
    userId: number;
    mailPaperId: number;
    text: string;
    createdTime?: string;
    isRead?: boolean;
}
