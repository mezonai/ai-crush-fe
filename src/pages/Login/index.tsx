import React from 'react';

import { Button } from "../../components/ui/button";


const LoginPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button>Login</Button>
    </div>
  );
}

export default LoginPage;