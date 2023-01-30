import { StoryPage as props } from "@/types/stories";
import getStoriesMetadata from "@/functions/getStoriesMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const stories = getStoriesMetadata();
  return stories.map(({ slug }) => ({
    slug: slug,
  }));
};

const getStoryContent = (slug: string) => {
  const file = `stories/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default function StoryPage({ params }: props) {
  const { slug } = params;
  const storyContent = getStoryContent(slug);
  const { data, content } = storyContent;
  return (
    <div>
      <h1>{data.title}</h1>
      <Markdown>{content}</Markdown>
      <span>
        To continue reading click{" "}
        <a href={data.link} rel="noreferrer" target="_blank">
          here
        </a>
      </span>
    </div>
  );
}
