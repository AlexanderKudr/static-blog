import { StoryPage as Props } from "@/types/stories";
import getStoriesMetadata from "@/functions/getStoriesMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

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

export default function StoryPage({ params: { slug } }: Props) {
  const storyContent = getStoryContent(slug);
  const { data, content } = storyContent;
  return (
    <div className="flex flex-col content-center flex-wrap">
      <h1 className="text-gray-100 text-2xl font-bold ">{data.title}</h1>
      <article className="text-blue-100 prose lg:prose-lg ">
        <Markdown>{content}</Markdown>
      </article>
      <span className="text-gray-100 text-md">
        To continue reading click{" "}
        <a
          className=" text-blue-200 border-b border-blue-200 duration-300 hover:border-blue-400"
          href={`${data.link}`}
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>
      </span>
      <Link href={"/"} className="text-blue-200" rel="noreferrer">
        <span className="border-b border-blue-200 transtition duration-300 hover:border-blue-400">Back to main page</span>
      </Link>
    </div>
  );
}
