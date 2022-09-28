import { useForm, SubmitHandler } from "react-hook-form"
import { Typography, useTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import { Email } from "@mui/icons-material";

import { themeValidation } from "./utils/themeValidation";

type Inputs = {
  name: string,
  subject: string,
  email: string,
  message: string
}

export const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const { palette:{ mode } } = useTheme();
  const themeValidationDrk = mode === 'dark' && 'contact__dark';

  return (
    <div className={ `${themeValidationDrk} ${ themeValidation( mode ) } global__font   contact__container--font` } id="contact">
      <form onSubmit={ handleSubmit( onSubmit ) } className="contact__container animate__animated animate__lightSpeedInLeft text-red-900">
        <Typography variant='h2' component='h2' className="contact__title">
          <Email sx={{ width: '50px', height: '50px', color: mode === 'light' ? teal[600] : teal[500] }}/>
        </Typography>
        
        <input 
          { ...register('name') }
          name="name" className="contact__inputs" 
          type="text" placeholder="Nombre" spellCheck="false"
        />

        <input 
          { ...register('subject') }
          name="subject" className="contact__inputs" 
          type="text" placeholder="Asunto" spellCheck="false"
        />

        <input 
          { ...register('email') }
          name="email" className="contact__inputs" 
          type="text" placeholder="Correo" spellCheck="false"
        />

        <textarea 
          { ...register('message') }
          name="message" className="contact__textarea" 
          placeholder="Mensaje"
        />

        <button className="contact__button-send">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </form>
    </div> 
  )
}
