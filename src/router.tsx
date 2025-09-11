import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
  useLocation,
} from "@tanstack/react-router";
import NotFound from "@/components/NotFound";
import LandingPage from "@/components/pages/LandingPage";
import NavBar from "@/components/NavBar";
import { MyResume } from "./components/pages/MyResume";
import { MyProjects } from "./components/pages/MyProjects";
import { ContactMe } from "./components/pages/ContactMe";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { PageFooter } from "./components/PageFooter";

const bgStyle = {
  backgroundImage: "url('/icon-bg.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// root route that just provides the layout
const rootRoute = createRootRoute({
  component: () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
      <>
        <div className="h-[10%] w-full max-w-7xl">
          <NavBar />
        </div>
        <ScrollToTop />
        <div
          className="w-full min-h-screen relative"
          style={isHomePage ? bgStyle : {}}
        >
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
