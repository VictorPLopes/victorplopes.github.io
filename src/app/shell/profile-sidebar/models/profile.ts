import { SocialItem } from "./social-item";

export interface Profile {
  name: string;
  avatarSrc: string;
  nickname: string;
  role: string;
  bio: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  customWebsites?: SocialItem[];
}
