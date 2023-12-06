import { Hero } from "@/components";

export default function Home(): JSX.Element {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-full gap-20">
        <Hero />
      </div>
    </main>
  );
}
