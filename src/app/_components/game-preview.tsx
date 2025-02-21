import { type CTA } from "@/interfaces/cta";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  releaseDate: string;
  excerpt: string;
  slug: string;
  price: string;
  ctas: CTA[];
};

export function GamePreview({
  title,
  coverImage,
  releaseDate,
  excerpt,
  slug,
  price,
  ctas,
}: Props) {
  return (
    <div className="w-[100%] md:w-[47%] 2xl:w-[30%]">
      <h3 className="text-xl mb-3 leading-snug">
        <Link
          as={`/games/${slug}`}
          href="/games/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} type="games" />
      </div>
      <div className="text-lg mb-4">
        <strong>Release Date:</strong>{" "}
        <DateFormatter dateString={releaseDate} />
      </div>
      {typeof ctas !== "undefined" && (
        <div className="mb-4">
          {ctas.length > 0 &&
            ctas.map((cta) => (
              <a key={cta.label} href={cta.url} className="btn">
                {cta.label}
              </a>
            ))}
        </div>
      )}
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
