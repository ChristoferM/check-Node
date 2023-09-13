import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "../styles/admin-monitoreo.css";

function AdminMonitoreo() {
  const [Inactivos, seInactivos] = useState( [
    {
      uid: "987654321",
      nombreApp: "App Undefined",
      url: "https://www.myapp-Undefin.com",
      urlMetricas: "https://metrics.Undefin.com",
    },
    {
      uid: "32165489",
      nombreApp: "Your Undefin",
      url: "https://www.yourapp-Undefin.com",
      urlMetricas: "https://metrics.Undefin.com",
    },
  ]);
  const [data, setData] = useState( [
    {
      uid: "1234567890",
      nombreApp: "My App",
      url: "https://www.myapp.com",
      urlMetricas: "https://metrics.myapp.com",
    },
    {
      uid: "9876543210",
      nombreApp: "Your App",
      url: "https://www.yourapp.com",
      urlMetricas: "https://metrics.yourapp.com",
    },
  ]);
  
  useEffect(() => {
    // Obtener datos de la API.
    // ...
  }, []);
  const handleDesabilitar = (id = '') => {
    // Realiza una llamada a la API para deshabilitar la aplicación con ID especificado.
    // ...
    // Devuelve un mensaje de confirmación.
  };

  const handleEditar = (id = '') => {
    // Abre un popUp con los datos de la aplicación con ID especificado.
    // ...
    // Devuelve un mensaje de confirmación.
  };
  return (
    <div>
      <Card className="admin-monitoreo">
        <Card.Header>Aplicaciones Activas</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>UID</th>
                <th>Nombre App</th>
                <th>URL</th>
                <th>URL Metricas</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((app, index) => (
                <tr key={index}>
                  <td>{app.uid}</td>
                  <td>{app.nombreApp}</td>
                  <td>{app.url}</td>
                  <td>{app.urlMetricas}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleDesabilitar(app.uid)}
                    >
                      Desabilitar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleEditar(app.uid)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="admin-monitoreo">
        <Card.Header>Inactivas</Card.Header>
        <Card.Body>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>UID</th>
                <th>Nombre App</th>
                <th>URL</th>
                <th>URL Metricas</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {Inactivos.map((app, index) => (
                <tr key={index}>
                  <td>{app.uid}</td>
                  <td>{app.nombreApp}</td>
                  <td>{app.url}</td>
                  <td>{app.urlMetricas}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleDesabilitar(app.uid)}
                    >
                      Habilitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminMonitoreo;
