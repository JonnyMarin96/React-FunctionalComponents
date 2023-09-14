import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';

function FormSignup(){
    return (
        <form>
            <TextField id="name" label="Nombre" variant="outlined" fullWidth={true} margin="normal"/>

            <TextField id="last-name" label="Apellido" variant="outlined" fullWidth={true} margin="normal"/>

            <TextField id="email" label="E-mail" variant="outlined" fullWidth={true} margin="normal"/>

            <label> Promociones </label>
            <input type="checkbox"/>

            <label> Novedades </label>
            <input type="checkbox"/>

            <Button variant="contained"> Registrar </Button>
        </form>
    )
}

export default FormSignup