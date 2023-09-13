import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/formularios.css";
import { Card } from 'react-bootstrap';
import Usuario from './Usuario';
function Login() {
  return (
    <>
      <Card className="formulario-login">
        <Card.Header className="inputs">Inicio de Sesion</Card.Header>
        <Card.Body className="formulario-login-body">
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>correo</Form.Label>
              <Form.Control  type="email" placeholder="Enter email" />
              <Form.Text className="text-muted ">
                Ingrese el correo @emcali.com.co
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
