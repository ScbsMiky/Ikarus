import { Dispatch, SetStateAction, useEffect, useState } from "react";

function usePersisted<I>(key: string, initial: I): [I, Dispatch<SetStateAction<I>>] {
  const [state, setState] = useState(( ) => {
    const storaged = localStorage.getItem(key);

    return storaged ? JSON.parse(storaged) : initial;
  });

  useEffect(( ) => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersisted;