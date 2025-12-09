import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <h1 className="text-6xl font-bold text-yellow-900 mb-4">404</h1>
      <p className="text-2xl text-yellow-700 mb-8">Page Not Found</p>
      <Link to="/" className="text-yellow-600 hover:text-yellow-900 underline">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}
