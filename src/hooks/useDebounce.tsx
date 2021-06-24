import { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useDebounce(value: string, delay = 300): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
