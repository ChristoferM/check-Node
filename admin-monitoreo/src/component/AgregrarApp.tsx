import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../styles/formularios.css";

interface AgregarApp {
  endpoint: string;
  usuario: string;
  contrasenna: string;
  estado: boolean;
  tiempoEspera: string;
  recurrenciaPositiva: number;
  respuestaEndpoint: string;
  recurrenciaNegativa: number;
  codigoRespuestaEsperada: string;
  codigoRespuestaNegativa: string;
  correosSupervisores: string;
}

function AgregarApp() {
  const [agregarApp, setAgregarApp] = useState<AgregarApp>({
    endpoint: "",
    usuario: "",
    contrasenna: "",
    estado: true,
    tiempoEspera: "",
    recurrenciaPositiva: 0,
    respuestaEndpoint: "",
    recurrenciaNegativa: 0,
    codigoRespuestaEsperada: "",
    codigoRespuestaNegativa: "",
    correosSupervisores: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgregarApp({
      ...agregarApp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Card className="formulario">
        <Card.Header>Aplicaciones Activas</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endpoint</Form.Label>
              <Form.Control
                name="endpoint"
                type="text"
                placeholder="Ingrese el endpoint"
                required
                value={agregarApp.endpoint}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                name="usuario"
                type="text"
                placeholder="Ingrese el usuario"
                required
                value={agregarApp.usuario}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="contrasenna"
                type="password"
                placeholder="Ingrese la contraseña"
                required
                value={agregarApp.contrasenna}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Estado</Form.Label>
              <Form.Check
                type="checkbox"
                label="Estado activo por defecto"
                name="estado"
                disabled
                checked={agregarApp.estado}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Tiempo de espera</Form.Label>
              <Form.Control
                name="tiempoEspera"
                type="time"
                placeholder="Ingrese el tiempo de espera"
                required
                value={agregarApp.tiempoEspera}
                onChange={handleChange}
              />
            </Form.Group>
            ...
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Recurrencia positiva</Form.Label>
              <Form.Control
                name="recurrenciaPositiva"
                type="number"
                placeholder="Ingrese la recurrencia positiva"
                required
                value={agregarApp.recurrenciaPositiva}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Respuesta endpoint</Form.Label>
              <Form.Control
                name="respuestaEndpoint"
                type="text"
                placeholder="Ingrese la respuesta del endpoint"
                required
                value={agregarApp.respuestaEndpoint}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Recurrencia negativa</Form.Label>
              <Form.Control
                name="recurrenciaNegativa"
                type="number"
                placeholder="Ingrese la recurrencia negativa"
                required
                value={agregarApp.recurrenciaNegativa}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Código de respuesta esperada</Form.Label>
              <Form.Control
                name="codigoRespuestaEsperada"
                type="text"
                placeholder="Ingrese el código de respuesta esperada"
                required
                value={agregarApp.codigoRespuestaEsperada}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Código de respuesta negativa</Form.Label>
              <Form.Control
                name="codigoRespuestaNegativa"
                type="text"
                placeholder="Ingrese el código de respuesta negativa"
                required
                value={agregarApp.codigoRespuestaNegativa}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Correos de supervisores</Form.Label>
              <Form.Control
                name="correosSupervisores"
                type="textarea"
                placeholder="Ingrese los correos de los supervisores"
                required
                value={agregarApp.correosSupervisores}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AgregarApp;
