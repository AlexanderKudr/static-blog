import Link from "next/link";
import getStoriesMetadata from "../functions/getStoriesMetadata";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function PreviewCard() {
  const previews = getStoriesMetadata().map(({ ...props }) => (
    <div
      className="p-4 mb-4 bg-gray-900/80 rounded-xl text-slate-100 
      shadow-inner shadow-white/10 relative"
      key={props.key}
    >
      <Image
        className="mx-auto border-none rounded-full object-cover"
        alt={props.title}
        src={`${props.imgSrc}`}
        width={60}
        height={60}
      />
      <h2 className="my-4 text-center ">
        <Link className="font-semibold" href={`/stories/${props.slug}`}>
          &quot;{props.title}&quot;{" "}
        </Link>{" "}
        <span className=" font-normal">by </span>
        <Link
          className="font-semibold border-b-2 border-gray-400
           transition duration-350 hover:border-slate-600"
          href={`${props.authorLink}`}
          target={"_blank"}
        >
          {props.author}
        </Link>
      </h2>
      <Link className="text-left" href={`/stories/${props.slug}`}>
        <p>{props.preview}</p>
      </Link>
      <a
        href={`/stories/${props.slug}`}
        className="text-slate-100 cursor-pointer flex items-center border-b border-gray-400
         transtition duration-300 absolute bottom-2
          right-4 hover:text-blue-200 hover:border-b-blue-200"
      >
        <button className="d-block">Read</button>
        <ChevronRightIcon className="ml-1 mb-[-3px]" width={14} height={14} />
      </a>
    </div>
  ));

  return <>{previews}</>;
}
