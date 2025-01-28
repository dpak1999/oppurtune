import { LoginForm } from "@/components/forms/LoginForm";
import Logo from "@/components/general/Logo";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
