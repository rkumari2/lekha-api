import dotenv from "dotenv";
import express, { Request, Response } from "express";
import {
  getAllBlogs,
  getAllMessages,
  getAllUsers,
  getAvatarAccessories,
  getAvatarBodyTypes,
  getAvatarClothes,
  getAvatarEyes,
  getAvatarHair,
  getAvatarSkin,
  getBlogById,
  getBlogsByAuthor,
  getBlogsByCategory,
  getCategories,
  getFeaturedBlogs,
  getMessageById,
  getUserById,
} from "./functions";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Lekha API");
});

app.get("/blogs", (req: Request, res: Response) => {
  const blogs = getAllBlogs();
  if (blogs.length === 0) {
    return res.status(404).json({ error: "No blogs found" });
  }
  return res.json(blogs);
});

app.get("/blogs/:id", (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id);

  if (isNaN(blogId)) {
    return res.status(400).json({ error: "Invalid blog ID" });
  }

  const blog = getBlogById(blogId);

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  return res.json(blog);
});

app.get("/blogs/category/:categoryId", (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.categoryId);

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  const blogs = getBlogsByCategory(categoryId);

  if (blogs.length === 0) {
    return res.status(404).json({ error: "No blogs found for this category" });
  }

  return res.json(blogs);
});

app.get("/blogs/author/:authorId", (req: Request, res: Response) => {
  const authorId = parseInt(req.params.authorId);

  if (isNaN(authorId)) {
    return res.status(400).json({ error: "Invalid author ID" });
  }

  const blogs = getBlogsByAuthor(authorId);

  if (blogs.length === 0) {
    return res.status(404).json({ error: "No blogs found for this author" });
  }

  return res.json(blogs);
});

app.get("/users", (req: Request, res: Response) => {
  const users = getAllUsers();
  if (users.length === 0) {
    return res.status(404).json({ error: "No users found" });
  }
  return res.json(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const user = getUserById(userId);
});

app.get("/messages", (req: Request, res: Response) => {
  const messages = getAllMessages();
  if (!messages) {
    return res.status(404).json({ error: "No messages found" });
  }
  return res.json(messages);
});

app.get("/messages/:id", (req: Request, res: Response) => {
  const messageId = parseInt(req.params.id);

  if (isNaN(messageId)) {
    return res.status(400).json({ error: "Invalid message ID" });
  }

  const message = getMessageById(messageId);

  if (!message) {
    return res.status(404).json({ error: "Message not found" });
  }

  return res.json(message);
});

app.get("/featured", (req: Request, res: Response) => {
  const featured = getFeaturedBlogs();
  if (featured.length === 0) {
    return res.status(404).json({ error: "No featured blogs found" });
  }
  return res.json(featured);
});

app.get("/categories", (req: Request, res: Response) => {
  const categories = getCategories();
  if (categories.length === 0) {
    return res.status(404).json({ error: "No categories found" });
  }
  return res.json(categories);
});

app.get("/avatar/hair", (req: Request, res: Response) => {
  const avatarHair = getAvatarHair();
  if (avatarHair.length === 0) {
    return res.status(404).json({ error: "No avatar hair found" });
  }
  return res.json(avatarHair);
});

app.get("/avatar/eyes", (req: Request, res: Response) => {
  const avatarEyes = getAvatarEyes();
  if (avatarEyes.length === 0) {
    return res.status(404).json({ error: "No avatar eyes found" });
  }
  return res.json(avatarEyes);
});

app.get("/avatar/skin", (req: Request, res: Response) => {
  const avatarSkin = getAvatarSkin();
  if (avatarSkin.length === 0) {
    return res.status(404).json({ error: "No avatar skin tones found" });
  }
  return res.json(avatarSkin);
});

app.get("/avatar/accessories", (req: Request, res: Response) => {
  const avatarAccessories = getAvatarAccessories();
  if (avatarAccessories.length === 0) {
    return res.status(404).json({ error: "No avatar accessories found" });
  }
  return res.json(avatarAccessories);
});

app.get("/avatar/clothes", (req: Request, res: Response) => {
  const avatarClothes = getAvatarClothes();
  if (avatarClothes.length === 0) {
    return res.status(404).json({ error: "No avatar clothes found" });
  }
  return res.json(avatarClothes);
});

app.get("/avatar/body-types", (req: Request, res: Response) => {
  const avatarBodyTypes = getAvatarBodyTypes();
  if (avatarBodyTypes.length === 0) {
    return res.status(404).json({ error: "No avatar body types found" });
  }
  return res.json(avatarBodyTypes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
