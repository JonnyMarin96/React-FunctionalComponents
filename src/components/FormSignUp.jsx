import { Button, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState } from "react";

import TextField from '@mui/material/TextField';



function FormSignup(props){

    const { handleSubmit } = props

    const [name, setName] = useState("") 
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("") 
    const [nov, setNov] = useState(false)
    const [promo, setPromo] = useState(true)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ""
        }
    })

    const validarNombre = (nombre) => {
        if(nombre.length >= 3){
            return {
                name: {
                    error: false,
                    message: ''
                }
            }
        }else{
            return {
                name: {
                    error: true,
                    message: "Deben ser al menos 3 caracteres"
                }
            }
        }
    }

    return (
        <form on onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({name, lastName, email, nov, promo})
        }}>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
                error = {errors.name.error}
                helperText = {errors.name.error ? errors.name.message : ''}
                onBlur={(e) => {
                    setErrors( validarNombre(e.target.value) )
                }}
            />

            <TextField 
                id="last-name" 
                label="Apellido" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />

            <TextField 
                id="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth={true} 
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <FormGroup>
                <FormControlLabel control={
                    <Switch checked={promo} onChange={
                        (e) => setPromo(e.target.checked)
                    }/>
                } label="Promociones"/>

                <FormControlLabel control={
                    <Switch checked={nov} onChange={
                        (e) => setNov(e.target.checked)
                    }/>
                } label="Novedades"/>
            </FormGroup>

            <Button variant="contained" type="submit"> Registrar </Button>
        </form>
    )
}

export default FormSignup