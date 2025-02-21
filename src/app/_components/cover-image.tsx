import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type?: string;
};

const CoverImage = ({ title, src, slug, type = "posts" }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={512}
      height={512}
      priority
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/${type}/${slug}`}
          href={`/${type}/[slug]`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
