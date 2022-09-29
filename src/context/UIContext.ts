import { createContext } from "react";

export interface IUi {
  openClose: boolean,
  theme: 'dark' | 'light'
}

export interface IUIContext {
  ui: IUi;
  setUi?: any;
}

export const UIContext = createContext<IUIContext>({
  ui: {
    openClose: false,
    theme: 'dark'
  }
});

