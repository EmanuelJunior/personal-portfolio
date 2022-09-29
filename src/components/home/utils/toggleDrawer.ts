import { IUi } from '../../../context/UIContext';

export const toggleDrawer = ( open: boolean, setOpenClose: any ) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if ( event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenClose( (ui: IUi) => ({ ...ui, openClose: open }) );
  };