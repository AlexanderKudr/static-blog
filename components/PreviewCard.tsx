import Link from "next/link";
import getStoriesMetadata from "../functions/getStoriesMetadata";
import Image from "next/image";

export default function PreviewCard() {
  const previews = getStoriesMetadata().map(({ ...props }) => (
    <div key={props.key}>
      <Image className="border rounded-full" alt={props.title} src={`${props.imgSrc}`} width={30} height={30} />
      <h2>
        <Link className="font-semibold" href={`/stories/${props.slug}`}>
          &quot;{props.title}&quot;{" "}
        </Link>{" "}
        by{" "}
        <Link
          className="font-semibold border-b-2 border-grey transition duration-150 hover:border-sky-700"
          href={`${props.authorLink}`}
          target={"_blank"}
        >
          {props.author}
        </Link>
      </h2>
      <Link href={`/stories/${props.slug}`}>
        <p>{props.preview}</p>
      </Link>
    </div>
  ));

  return <>{previews}</>;
}
