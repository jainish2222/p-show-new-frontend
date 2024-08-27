import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
      <div className="text-center p-5 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Newz are Coming Soon</h1>
        <p className="text-lg mb-4 dark:text-white">
          We're working hard to bring something amazing to you! Stay tuned for updates.
        </p>
        <p className="text-lg text-indigo-600">
          <strong>P-Show</strong>
        </p>
      </div>
    </div>
    </Container>
  );
}

