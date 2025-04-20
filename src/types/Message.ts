export interface Message {
  id: number;
  senderId: number; // References User
  receiverId: number; // References User
  content: string;
  timestamp: Date;
}
