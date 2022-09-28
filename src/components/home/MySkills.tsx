import { useTheme } from '@mui/material';
import { themeValidation } from './utils/themeValidation';

export const MySkills = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <div className={`global__font ${ themeValidation(mode) }`}>MySkills</div>
  )
}
