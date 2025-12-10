import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function CallbackScreen() {
  return (
    <div className="callback-container">
      <img src="/spinner-8565_256.gif" className="callback-logo" />
      <p className="callback-text">Connexion sécurisée...</p>
      <AuthenticateWithRedirectCallback redirectUrl="/account" />
    </div>
  );
}
