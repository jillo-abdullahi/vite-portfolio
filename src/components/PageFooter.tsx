import ContactLinks from "./ContactLinks";

export const PageFooter = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 w-full px-4 md:px-14 lg:px-28 border-t-2 border-b-2 border-[var(--color-primary)]/10 mb-4 bg-[var(--color-primary)]/3"
      style={{
        backgroundImage: "url('/icon-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer
        className={`pb-6 w-full flex items-center justify-between sm:flex-row flex-col pt-6`}
      >
        <ContactLinks />
        <div
          className={`text-center md:text-right text-sm font-semibold text-gray-400 mt-4 sm:mt-0`}
        >
          <span className="text-[var(--color-primary)]">&copy;</span>{" "}
          {new Date().getFullYear()} Jillo Woche
        </div>
      </footer>
    </div>
  );
};
