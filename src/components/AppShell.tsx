import { ThemeProvider } from "@/contexts/ThemeContext";
import { PathProvider } from "@/contexts/PathContext";
import NavBar from "@/components/NavBar";
import { PageFooter } from "@/components/PageFooter";
import { BackToTopBtn } from "@/components/shared/BackToTopBtn";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LandingPage from "@/components/pages/LandingPage/LandingPage";
import { MyResume } from "@/components/pages/MyResume";
import { MyProjects } from "@/components/pages/ProjectsPage/MyProjects";
import { ContactMe } from "@/components/pages/ContactMe";
import NotFound from "@/components/pages/NotFound";

export type PageName = "home" | "resume" | "projects" | "contact" | "404";

const PAGE_COMPONENTS: Record<PageName, React.ComponentType> = {
  home: LandingPage,
  resume: MyResume,
  projects: MyProjects,
  contact: ContactMe,
  "404": NotFound,
};

interface AppShellProps {
  /** The current URL pathname forwarded from the Astro page (e.g. "/projects"). */
  currentPath: string;
  page: PageName;
}

/**
 * Client-only React shell rendered via `client:only="react"` in Astro pages.
 * Provides ThemeContext, PathContext, NavBar, decorative side rails, PageFooter,
 * and Vercel analytics. The HTML <head> (title, meta, OG, structured data) is
 * fully static via Layout.astro — that's where the SSG/SEO value lives.
 */
export default function AppShell({ currentPath, page }: AppShellProps) {
  const PageComponent = PAGE_COMPONENTS[page];

  return (
    <ThemeProvider>
      <PathProvider path={currentPath}>
        {/* Nav bar */}
        <div className="h-[10%] w-full max-w-7xl">
          <NavBar />
        </div>

        {/* Page body with decorative side rails */}
        <div className="w-full min-h-screen relative">
          {/* Background gradient + vertical stripe rails */}
          <div className="absolute fixed flex justify-between w-screen h-full top-0 left-0 -z-10 bg-gradient-to-b from-gray-100/20 to-gray-100/80 dark:from-gray-900/20 dark:to-gray-900/80">
            {[145, -145].map((deg, idx) => (
              <div
                key={idx}
                className="w-2 md:w-10 h-full border border-[var(--color-primary)] opacity-40 dark:opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(${deg}deg, var(--color-primary) 0, var(--color-primary) 2px, transparent 2px, transparent 6px)`,
                }}
              />
            ))}
          </div>

          <PageComponent />
          <PageFooter />
          <BackToTopBtn />
        </div>

        <Analytics />
        <SpeedInsights />
      </PathProvider>
    </ThemeProvider>
  );
}
