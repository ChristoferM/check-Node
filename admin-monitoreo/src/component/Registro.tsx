import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/formularios.css";
import { Card } from 'react-bootstrap';
import Usuario from './Usuario';

function Registro() {
  return (
    <>
      <Card className="formulario-registro">
        <Card.Header className="inputs">Registro de usuario</Card.Header>
        <Card.Body className="formulario-registro-body">
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted ">
                Ingrese un correo electrónico válido
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
              <Form.Text className="text-muted ">
                La contraseña debe tener al menos 8 caracteres
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Repita la contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
              <Form.Text className="text-muted ">
                Repita la contraseña
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Registro;
