export interface AvatarHair {
  id: number;
  name: string;
  svgCode: string;
}

export interface AvatarEyes {
  id: number;
  name: string;
  svgCode: string;
}

export interface AvatarSkinTone {
  id: number;
  name: string;
  svgCode: string;
}

export interface AvatarAccessories {
  id: number;
  name: string;
  svgCode: string;
}

export interface AvatarClothes {
  id: number;
  name: string;
  svgCode: string;
}

export interface AvatarBodyType {
  id: number;
  name: string;
  svgCode: string;
}

export interface UserAvatar {
  hairId: number; // References AvatarHair
  eyesId: number; // References AvatarEyes
  skinToneId: number; // References AvatarSkinTone
  accessories: number[]; // Array of references to AvatarAccessories
  imageUrl: string;
}
