
export const toggleDrawer = ( open: boolean, setOpenClose: ( openClose: boolean ) => void ) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if ( event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenClose( open );
  };