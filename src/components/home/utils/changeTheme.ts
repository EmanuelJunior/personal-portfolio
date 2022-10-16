import { IUIContext } from '../../../context/UIContext';

export const changeTheme = ({ ui, setUi }: IUIContext) => {
  const darkOrLight = ui.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', darkOrLight );
  setUi({ ...ui, theme: darkOrLight });
}