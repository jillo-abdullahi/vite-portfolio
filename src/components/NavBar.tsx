import type { FC } from "react";
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
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { ScheduleCallBtn } from "./ScheduleCallBtn";

interface NavigationItem {
  name: string;
  href: string;
  isActive: boolean;
}

const NavBar: FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const pathname = useLocation().pathname;
  const handleScroll = () => {
    const currentScrollOffset = window.scrollY;
    setScrollOffset(currentScrollOffset);
  };

  const navigation: NavigationItem[] = [
    { name: "Projects", href: "/projects", isActive: pathname === "/projects" },
    { name: "Resumé", href: "/resume", isActive: pathname === "/resume" },
    { name: "Contact", href: "/contact", isActive: pathname === "/contact" },
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
      className={`z-50 fixed right-0 left-0 slideInFromTop transition-all duration-200 px-4 md:px-10 lg:px-28 xl:px-42 border-t border-b border-gray-700 py-4 ${
        isScrolled ? "mt-2" : "mt-4"
      }`}
    >
      {({ open, close }: { open: boolean; close: () => void }) => (
        <>
          <div
            className={`mx-auto px-5 relative border border-gray-700/60 rounded-[20px] ${
              isScrolled ? "bg-gray-900" : "bg-gray-900/70"
            }`}
          >
            <div className="flex h-18 justify-between">
              <div className="flex flex-row-reverse md:flex-row items-center justify-between w-full md:w-fit">
                <div className="-ml-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800/80 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
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
                </div>
                <Link
                  className="flex flex-shrink-0 items-center cursor-pointer"
                  to="/"
                  onClick={close}
                >
                  <button className="relative inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <ResponsiveImage
                      src="/sneakerhead985"
                      alt="Profile picture - Navigate to home"
                      className={`flex-shrink-0 w-9 h-9 rounded-full overflow-hidden shadow-lg cursor-pointer ${
                        isHome ? "ring-2 ring-orange/80" : ""
                      }`}
                      width={40}
                      height={40}
                      priority={true}
                    />
                  </button>
                </Link>
                <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl px-3 py-1 text-base font-medium transition-all duration-300 border-2 ${
                        item.isActive
                          ? "bg-gray-800/60 text-gray-200 border-orange/50"
                          : "border-transparent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <WorkAvailabilityIndicator available />
                </div>
                <ScheduleCallBtn />
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
              <div className="space-y-1 p-3 mt-2 sm:px-3 bg-gray-900 border border-gray-700 rounded-[20px]">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`cursor-pointer text-gray-300 hover:bg-gray-800/90 hover:text-white block rounded-lg px-3 py-2 text-base font-medium text-center border ${
                      item.isActive
                        ? "bg-gray-800/60 text-gray-200 border-orange/50"
                        : "border-transparent"
                    }`}
                    onClick={() => {
                      close();
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex py-3 w-full flex-col items-center justify-center space-y-4 md:hidden">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <WorkAvailabilityIndicator available />
                    <ScheduleCallBtn />
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
