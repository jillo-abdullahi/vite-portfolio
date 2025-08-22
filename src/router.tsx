import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import NotFound from "@/components/NotFound";
import LandingPage from "./components/LandingPage";

// Create a root route that just provides the layout
const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <NotFound />,
});

// Create the '/' route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

// Create a catch-all route for 404s
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
  beforeLoad: () => {
    throw new Error("Not Found");
  },
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, notFoundRoute]);

// Create the router
export const router = createRouter({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
