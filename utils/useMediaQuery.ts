"use client";

import { useEffect, useState } from "react";
type useMediaQueryType = (query: string) => boolean;
const useMediaQuery: useMediaQueryType = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e: any) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
