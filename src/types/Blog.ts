export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  categoryId: number;
  authorId: number;
  date: string;
}

export interface BlogCategory {
  id: number;
  name: string;
}

export interface Featured {
  categoryId: number;
  blogIds: number[];
}
