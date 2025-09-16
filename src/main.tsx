import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { inject } from "@vercel/analytics";

// Wait for the router to be ready
await router.load();

inject(); // Initialize Vercel Analytics

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
