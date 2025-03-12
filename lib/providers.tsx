"use client";
import { ShowSignupProvider } from "@/context/ShowSignupContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShowSignupProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ShowSignupProvider>
  );
};

export default Providers;
