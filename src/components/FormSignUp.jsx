import { Button, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState } from "react";

import TextField from '@mui/material/TextField';



function FormSignup(){

    const [name, setName] = useState("QWERTY") 

    return (
        <form>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />

            <TextField 
                id="last-name" 
                label="Apellido" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal"
            />

            <TextField 
                id="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal"
            />

            <FormGroup>
                <FormControlLabel control={
                    <Switch/>
                } label="Promociones"/>

            <FormControlLabel control={
                    <Switch/>
                } label="Novedades"/>
            </FormGroup>

            <Button variant="contained"> Registrar </Button>
        </form>
    )
}

export default FormSignup