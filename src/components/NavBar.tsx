import type { FC } from "react";
import {
  DisclosureButton,
  Disclosure,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import WorkAvailabilityIndicator from "@/components/WorkAvailabilityIndicator";
import { externalLinks } from "../data";
import Timer from "@/components/Timer";
import { Link } from "@tanstack/react-router";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Experience", href: "/about" },
  { name: "Stacks", href: "/stacks" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavBar: FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollOffset = window.scrollY;
    setScrollOffset(currentScrollOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`bg-[#272F37] border border-gray-900 rounded-xl mx-4 z-50 fixed right-0 lg:right-10 left-0 lg:left-10 h-16 slideInFromTop transition-all duration-200 shadowy ${
        scrollOffset > 0 ? "mt-2" : "mt-4"
      }`}
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl md:pl-4 md:pr-3 pl-2 md:px-4 relative">
            <div className="flex h-16 justify-between">
              <div className="flex flex-row-reverse md:flex-row items-center justify-between w-full md:w-fit">
                <div className="-ml-2 mr-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <a
                  className="flex flex-shrink-0 items-center cursor-pointer"
                  href="#home"
                >
                  <button className="relative inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <img
                      src={"/src/assets/sneakerhead985.png"}
                      alt="home"
                      className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden shadow-lg cursor-pointer"
                    />
                  </button>
                </a>
                <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <WorkAvailabilityIndicator />
                </div>
                <div className="flex-shrink-0">
                  <a
                    type="button"
                    className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-2 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                    href={externalLinks.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarDaysIcon
                      className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                      aria-hidden="true"
                    />
                    <span>schedule call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter="duration-300 ease-out"
            enterFrom="h-0 opacity-0 -translate-y-2"
            enterTo="h-32 opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="h-32 opacity-100 translate-y-0"
            leaveTo="h-0 opacity-0 -translate-y-2"
          >
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 p-3 mt-2 sm:px-3 bg-[#272F37] border border-gray-900 rounded-xl">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-lg px-3 py-2 text-base font-medium text-center"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <div className="flex py-3 w-full flex-col items-center justify-center space-y-4 md:hidden">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <WorkAvailabilityIndicator />
                    <div className="w-full text-center">
                      <a
                        type="button"
                        className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-2 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                        href={externalLinks.calLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CalendarDaysIcon
                          className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                          aria-hidden="true"
                        />
                        <span>schedule call</span>
                      </a>
                    </div>
                  </div>

                  <Timer />
                </div>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
