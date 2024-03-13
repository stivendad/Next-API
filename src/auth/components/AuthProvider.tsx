'use client'

import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export function AuthProvider( { children, ...rest }: Props ) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}