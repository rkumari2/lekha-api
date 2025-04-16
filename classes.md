User {
    id,
    name,
    email, 
    password,
    avatar {
        avatar data
    }
    number of blogs
}

Category {
    id, 
    name,
}

Blog {
    id, 
    title, 
    description,
    content, 
    image, 
    categoryId, 
    authorId    
}

Featured {
    categoryId, 
    blogIds[]
}

