import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSignUp } from '@clerk/clerk-react';
import { SignUp } from '@clerk/clerk-react';

function SignUpPage() {
  return (
     <div className="signin-page">
      <SignUp />
    </div>
  );
}
export default SignUpPage;