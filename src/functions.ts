import fs from "fs";
import path from "path";
import {
  AvatarAccessories,
  AvatarBodyType,
  AvatarClothes,
  AvatarEyes,
  AvatarHair,
  AvatarSkinTone,
} from "./types/Avatar";
import { Blog, BlogCategory, Featured } from "./types/Blog";
import { Message } from "./types/Message";
import { User } from "./types/User";

const dbPath = path.join(__dirname, "../database.json");

export const loadDatabase = (): any => {
  const raw = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(raw);
};

export const getAllBlogs = (): Blog[] => {
  const db = loadDatabase();
  return db.blogs;
};

export const getBlogById = (id: number): Blog | undefined => {
  const blogs = getAllBlogs();
  return blogs.find((b) => b.id === id);
};

export const getBlogsByCategory = (categoryId: number): Blog[] => {
  const blogs = getAllBlogs();
  return blogs.filter((b) => b.categoryId === categoryId);
};

export const getBlogsByAuthor = (authorId: number): Blog[] => {
  const blogs = getAllBlogs();
  return blogs.filter((b) => b.authorId === authorId);
};

export const getAllUsers = (): User[] => {
  const db = loadDatabase();
  return db.users;
};

export const getUserById = (id: number): User | undefined => {
  const users = getAllUsers();
  return users.find((u) => u.id === id);
};

export const getAllMessages = (): Message[] | undefined => {
  const db = loadDatabase();
  return db.messages;
};

export const getMessageById = (id: number): Message | undefined => {
  const messages = getAllMessages();
  return messages?.find((m) => m.id === id);
};

export const getFeaturedBlogs = (): Featured[] => {
  const db = loadDatabase();
  return db.featured;
};

export const getCategories = (): BlogCategory[] => {
  const db = loadDatabase();
  return db.categories;
};

export const getAvatarHair = (): AvatarHair[] => {
  const db = loadDatabase();
  return db.avatarHair;
};

export const getAvatarEyes = (): AvatarEyes[] => {
  const db = loadDatabase();
  return db.avatarEyes;
};

export const getAvatarSkin = (): AvatarSkinTone[] => {
  const db = loadDatabase();
  return db.avatarSkinTone;
};

export const getAvatarAccessories = (): AvatarAccessories[] => {
  const db = loadDatabase();
  return db.avatarAccessories;
};

export const getAvatarClothes = (): AvatarClothes[] => {
  const db = loadDatabase();
  return db.avatarClothes;
};

export const getAvatarBodyTypes = (): AvatarBodyType[] => {
  const db = loadDatabase();
  return db.avatarBodyTypes;
};
