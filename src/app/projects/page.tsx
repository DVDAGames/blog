import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects } from "../../lib/api";
import Container from "../_components/container";
import Header from "../_components/header";
import { ProjectPreview } from "../_components/project-preview";

export default async function Projects() {
  const projects = getAllProjects();

  if (!projects) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight mb-[20px]">Our Projects</h1>
        <p className="text-md mb-[10px]">Some open-source tools we've created for you to use for free.</p>
        <article className="mb-32">
          {projects.map((project) => (
            <ProjectPreview
              key={project.slug}
              title={project.title}
              coverImage={project.coverImage}
              releaseDate={project.date}
              ctas={project.ctas}
              excerpt={project.excerpt}
              slug={project.slug}
              price={project.price}
            />
          ))}
        </article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const projects = getAllProjects();

  if (!projects) {
    return notFound();
  }

  const title = `Our Projects | DVDA Games`;

  return {
    openGraph: {
      title,
      images: projects.map((project) => project.ogImage.url),
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
