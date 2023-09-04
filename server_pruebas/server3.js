const express = require('express')
const app = express()
const port = 3003


app.get('/', (req, res) => {
  console.log('====================================');
  console.log('Server 3');
  console.log('====================================');
  const number = Math.floor(Math.random() * 3) + 1;
  const secondsLazy = Math.floor(Math.random() * 5) + 1;
  switch (number) {
    case 1:
      console.log(number);
      console.log('====================================');
        console.log(`Tiempo de espera ${secondsLazy}`);
        console.log('====================================');
      setTimeout(() => {
        res.status(200).send({data:'Test Server'});  
      }, secondsLazy*1000);
      
      break;
    case 2:
      console.log(number);
      console.log('====================================');
        console.log(`Tiempo de espera ${secondsLazy}`);
        console.log('====================================');
      setTimeout(() => {
        
        res.status(400).send({data:'Code 400 Server'});
      }, secondsLazy*1000);
      
      break;
    case 3:
      console.log(number);
      console.log('====================================');
        console.log(`Tiempo de espera ${secondsLazy}`);
        console.log('====================================');
      setTimeout(() => {
        res.status(500).send({data:'Code 500 Server'});  
      }, secondsLazy*1000);
      
        break
    default:
      console.log('====================================');
      console.log('numero fuera de rango');
      console.log('====================================');;
  }


  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})