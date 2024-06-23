import Nav from "./nav";

export function Intro() {
  return (
    <section className="flex flex-col items-start mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">Dead Villager Dead Adventurer</h1>
      <Nav includeHome={false} />
    </section>
  );
}

export default Intro;
