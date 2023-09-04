const configuracionApps = require("../models/cornDataModel");

class callCronDataConfig{

    constructor(){
        
    }

    async callConfigApp() {
        return await  configuracionApps;
    }

    
}
module.exports = callCronDataConfig;