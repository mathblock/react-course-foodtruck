import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SignIn } from '@clerk/clerk-react';

function SignInPage() {
  return (
     <div className="signin-page">
      <SignIn />
    </div>
  );
}
export default SignInPage;