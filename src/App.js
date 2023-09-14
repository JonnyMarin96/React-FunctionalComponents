import './App.css';
import { Container } from '@mui/material';
import FormSignup from './components/FormSignUp';

function App() {
  return (
    <>
      <Container component="section" maxWidth="sm">
        <h1> Formulario Registro </h1>
        <FormSignup/>
      </Container>
    </>
  );
}

export default App;
