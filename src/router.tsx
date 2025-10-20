import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import NotFound from "@/components/NotFound";
import LandingPage from "@/components/pages/LandingPage";
import NavBar from "@/components/NavBar";
import { MyResume } from "./components/pages/MyResume";
import { MyProjects } from "./components/pages/MyProjects";
import { ContactMe } from "./components/pages/ContactMe";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { PageFooter } from "./components/PageFooter";

// root route that just provides the layout
const rootRoute = createRootRoute({
  component: () => {
    return (
      <>
        <div className="h-[10%] w-full max-w-7xl">
          <NavBar />
        </div>
        <ScrollToTop />
        <div className="w-full min-h-screen relative">
          <div className="absolute fixed flex justify-between w-screen h-full top-0 left-0 w-full h-full -z-10">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="w-2 md:w-6 lg:w-20 xl:w-30 h-full border border-gray-700/40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(145deg, rgba(231,161,26,0.16) 0, rgba(231,161,26,0.16) 2px, transparent 2px, transparent 8px)",
                }}
              />
            ))}
          </div>
          <Outlet />
          <PageFooter />
        </div>
      </>
    );
  },

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
  path: "/resume",
  component: MyResume,
});

// redirect /about to /
const aboutRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
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

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  aboutRedirectRoute,
  projectsRoute,
  contactRoute,
]);

// Create the router
export const router = createRouter({ routeTree });

// Register router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
