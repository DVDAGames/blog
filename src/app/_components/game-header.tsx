import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { CTA } from "@/interfaces/cta";

type Props = {
  title: string;
  bannerImage: string;
  releaseDate: string;
  ctas: CTA[];
};

export function GameHeader({ title, bannerImage, releaseDate, ctas }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={bannerImage} />
      </div>
      {typeof ctas !== "undefined" &&
        ctas.length > 0 &&
        ctas.map((cta) => (
          <a key={cta.label} href={cta.url} className="btn">
            {cta.label}
          </a>
        ))}
      <div className="max-w-2xl mx-auto">
        {releaseDate !== "" && (
          <div className="mb-6 text-lg">
            Release Date: <DateFormatter dateString={releaseDate} />
          </div>
        )}
      </div>
    </>
  );
}
