import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory: string = path.join(process.cwd(), "public/posts");

export function getAllPosts() {
  const allPosts = fs.readdirSync(postsDirectory);

  return allPosts.map((file) => {
    const id = file.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, file),
      "utf-8",
    );
    // Use gray-matter to parse the post
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      id,
    };
  });
}
