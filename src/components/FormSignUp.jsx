import { Button } from "@mui/material"

function FormSignup(){
    return (
        <form>
            <label> Nombre </label>
            <input type="text"/>

            <label> Apellido </label>
            <input type="text"/>

            <label> E-mail </label>
            <input type="email"/>

            <label> Promociones </label>
            <input type="checkbox"/>

            <label> Novedades </label>
            <input type="checkbox"/>

            <Button variant="contained"> Registrar </Button>
        </form>
    )
}

export default FormSignup