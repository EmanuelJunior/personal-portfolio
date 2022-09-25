import { createContext } from "react";

export interface IUIContext {
  openClose?: boolean;
  setOpenClose?: any;
}

export const UIContext = createContext<IUIContext>({});

