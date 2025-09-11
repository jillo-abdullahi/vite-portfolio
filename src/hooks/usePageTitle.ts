import { useEffect } from 'react';

/**
 * Custom hook to update the document title
 * @param title - The title to set for the page
 */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    // Cleanup: restore previous title when component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
