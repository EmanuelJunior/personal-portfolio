import { useTheme } from '@mui/material';
import { themeValidation } from "./utils/themeValidation"

export const Projects = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <div className={`global__font ${ themeValidation(mode) }`}>Projects</div>
  )
}
