import { type FC, useRef } from "react";
import {
  DisclosureButton,
  Disclosure,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import WorkAvailabilityIndicator from "@/components/WorkAvailabilityIndicator";
import Timer from "@/components/Timer";
import { Link, useLocation } from "@tanstack/react-router";
import { ScheduleCallBtn } from "./ScheduleCallBtn";
import { ThemeToggle } from "./ThemeToggle";
import { HouseIcon, type HouseHandle } from "./ui/HouseIcon";

interface NavigationItem {
  name: string;
  href: string;
  isActive: boolean;
}

const NavBar: FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const houseRef = useRef<HouseHandle>(null);

  const pathname = useLocation().pathname;
  const handleScroll = () => {
    const currentScrollOffset = window.scrollY;
    setScrollOffset(currentScrollOffset);
  };

  const navigation: NavigationItem[] = [
    { name: "projects", href: "/projects", isActive: pathname === "/projects" },
    { name: "resumé", href: "/resume", isActive: pathname === "/resume" },
    { name: "contact", href: "/contact", isActive: pathname === "/contact" },
  ];
  const isHome = pathname === "/";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollOffset > 0;

  return (
    <Disclosure
      as="nav"
      className={`z-50 fixed right-0 left-0 slideInFromTop transition-all duration-200 px-4 md:px-10 lg:px-28 xl:px-42 md:border-t-2 md:border-b-2 md:border-[var(--color-primary)]/10 md:bg-[var(--color-primary)]/3 py-4 ${
        isScrolled ? "mt-2" : "mt-4"
      }`}
    >
      {({ open, close }: { open: boolean; close: () => void }) => (
        <>
          <div
            className={`mx-auto px-5 relative border-2 border-[var(--color-primary)]/10 rounded-3xl transition-colors duration-300 ${
              isScrolled ? "bg-gray-900/50 backdrop-blur-sm" : "bg-gray-900/50"
            }`}
          >
            <div className="flex h-18 justify-between">
              <div className="flex flex-row-reverse md:flex-row items-center justify-between w-full md:w-fit">
                <div className="-ml-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}

                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 bg-[var(--color-primary)]/10 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent mr-0 md:mr-2 lg:mr-0">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-7 w-7 cursor-pointer"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-7 w-7 cursor-pointer"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                  <div
                    className="ml-4 border-l border-[var(--color-primary)]/15 pl-3 md:hidden"
                    onClick={() => close()}
                  >
                    <ThemeToggle />
                  </div>
                </div>
                <Link
                  className={`group flex flex-shrink-0 items-center cursor-pointer p-2 justify-center rounded-full ${
                    isHome ? "bg-gray-800/60" : ""
                  } hover:bg-gray-800/70 transition-colors duration-300 border-2 border-transparent hover:border-[var(--color-primary)]/30`}
                  to="/"
                  onClick={close}
                  onMouseEnter={() => houseRef.current?.startAnimation()}
                  onMouseLeave={() => houseRef.current?.stopAnimation()}
                >
                  <HouseIcon
                    ref={houseRef}
                    size={24}
                    className="text-[var(--color-primary)]/90 rounded-full group-hover:scale-115 transition-transform duration-200"
                  />
                </Link>
                <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`hover:bg-[var(--color-primary)]/10 hover:text-gray-300 rounded-xl px-3 py-1 text-base font-medium transition-all duration-300 border-2 ${
                        item.isActive
                          ? "bg-gray-800/60 text-gray-300 border-[var(--color-primary)]/50"
                          : "border-transparent text-gray-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <WorkAvailabilityIndicator available />
                <ScheduleCallBtn isInNavBar />
                <div className="pl-3 border-l border-[var(--color-primary)]/15">
                  <ThemeToggle />
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
              <div className="space-y-1 p-3 mt-2 sm:px-3 bg-gray-900 border-2 border-[var(--color-primary)]/30 rounded-3xl">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`cursor-pointer  hover:bg-[var(--color-primary)]/10 hover:text-gray-300 block rounded-lg px-3 py-2 text-base font-medium text-center border ${
                      item.isActive
                        ? "bg-gray-800/60 text-gray-300 border-[var(--color-primary)]/50"
                        : "border-transparent text-gray-400"
                    }`}
                    onClick={() => {
                      close();
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex py-3 w-full flex-col items-center justify-center space-y-4 md:hidden">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <WorkAvailabilityIndicator available />
                    <ScheduleCallBtn isInNavBar />
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
