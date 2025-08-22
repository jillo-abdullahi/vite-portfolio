import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import NotFound from "@/components/NotFound";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import { AboutMe } from "./components/pages/AboutMe";
import { MyStacks } from "./components/pages/MyStacks";
import { MyProjects } from "./components/pages/MyProjects";
import { ContactMe } from "./components/pages/ContactMe";

// Create a root route that just provides the layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="h-[10%] w-full max-w-7xl">
        <NavBar />
      </div>
      <Outlet />
    </>
  ),

  notFoundComponent: () => <NotFound />,
});

// Create the '/' route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

// create about route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutMe,
});

// create stacks route
const stacksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stacks",
  component: MyStacks,
});

// create projects route
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: MyProjects,
});

// create contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactMe,
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
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  stacksRoute,
  projectsRoute,
  contactRoute,
  notFoundRoute,
]);

// Create the router
export const router = createRouter({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
