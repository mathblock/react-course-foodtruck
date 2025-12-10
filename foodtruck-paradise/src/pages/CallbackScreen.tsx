import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function CallbackScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <img src="/logo.svg" className="w-16 animate-pulse" />
      <p className="text-gray-600">Connexion sécurisée...</p>
      <AuthenticateWithRedirectCallback redirectUrl="/account" />
    </div>
  );
}
