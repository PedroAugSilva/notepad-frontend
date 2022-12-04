import { useState, useEffect } from "react";

const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const hasItem = JSON.parse(localStorage.getItem(key));
    if (hasItem) {
      return hasItem;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default usePersistedState;