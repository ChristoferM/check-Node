const configuracionApps = [
    {
      id: 28,
      endpoint: 'http://localhost:3001',
      usuario: 'usuario1',
      contrasenna: 'contraseña1',
      estado: 1,
      tiempo_espera: '2023-08-30T09:00:00',
      recurrencia_positiva: 3,
      respuesta_endpoint: {
        status: '200'
      },
      recurrencia_negativa: 100,
      codigo_respuesta_esperada: 200,
      codigo_respuesta_negativa: 400,
      correos_supervisores: ['correo1@example.com', 'correo2@example.com']
    },
    {
      id: 29,
      endpoint: 'http://localhost:3002',
      usuario: 'usuario2',
      contrasenna: 'contraseña2',
      estado: 1,
      tiempo_espera: '2023-08-30T09:00:01',
      recurrencia_positiva: 2,
      respuesta_endpoint: {
        status: '400'
      },
      recurrencia_negativa: 200,
      codigo_respuesta_esperada: 400,
      codigo_respuesta_negativa: 500,
      correos_supervisores: ['correo3@example.com', 'correo4@example.com']
    },
    {
      id: 36,
      endpoint: 'http://localhost:3003',
      usuario: 'usuario9',
      contrasenna: 'contraseña9',
      estado: 0,
      tiempo_espera: '2023-08-30T09:00:08',
      recurrencia_positiva: 5,
      respuesta_endpoint: {
        status: '207'
      },
      recurrencia_negativa: 900,
      codigo_respuesta_esperada: 207,
      codigo_respuesta_negativa: 400,
      correos_supervisores: ['correo17@example.com', 'correo18@example.com']
    }
  ];
  
  module.exports = configuracionApps;
  