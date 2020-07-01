import { createContext, useContext } from 'react';

export const CVContext = createContext({});
export const useCV = () => useContext(CVContext);
