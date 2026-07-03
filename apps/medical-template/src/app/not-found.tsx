import { Container, Button } from "@daric/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">404</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Page not found</h1>
      <p className="max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button href="/">Return home</Button>
    </Container>
  );
}
