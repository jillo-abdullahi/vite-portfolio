import ContactLinks from "./ContactLinks";

export const PageFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full px-4 md:px-8 lg:px-26 xl:px-42 border-t border-b border-gray-700 mb-4">
      <footer className={`pb-6 w-full px-6 flex items-center justify-between sm:flex-row flex-col pt-6 `}>
        <ContactLinks />
        <div
          className={`text-center md:text-right text-sm font-semibold text-gray-400 mt-4 sm:mt-0`}
        >
          &copy; {new Date().getFullYear()} Jillo Woche
        </div>
      </footer>
    </div>
  );
};
