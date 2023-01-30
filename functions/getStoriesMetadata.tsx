import fs from "fs";
import matter from "gray-matter";
import { StoriesMetadata } from "@/types/stories";

export default function getStoriesMetadata(): StoriesMetadata[] {
  const files = fs.readdirSync("stories/");
  const markdownStories = files.filter((file) => file.endsWith(".md"));
  const stories = markdownStories.map((filename) => {
    const fileContents = fs.readFileSync(`stories/${filename}`, "utf8");
    const matterresult = matter(fileContents);
    const { title, author, preview, imgSrc, link, authorLink } = matterresult.data;
    return {
      title: title,
      author: author,
      preview: preview,
      slug: filename.replace(`.md`, ""),
      key: crypto.randomUUID(),
      imgSrc: imgSrc,
      link: link,
      authorLink: authorLink,
    };
  });
  return stories;
}
