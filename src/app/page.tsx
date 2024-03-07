import Portfolio from "./components/portfolio/portfolio";

export default function Home() {
  return (
    <main
      id="main"
      className="min-h-screen flex flex-col items-center justify-between"
    >
      <Portfolio />
    </main>
  );
}
