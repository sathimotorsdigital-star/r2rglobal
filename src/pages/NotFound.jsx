import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="section-y">
      <Seo title="Page not found | R2R Global" />
      <div className="container-r2r text-center">
        <h1>Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-r2r-muted">The page you are looking for does not exist.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
