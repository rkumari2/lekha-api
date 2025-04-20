import { UserAvatar } from "./Avatar";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: UserAvatar;
  blogCount: number;
}
