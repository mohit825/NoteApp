const ProdEnvironment = require('./prod.environment');
const DevEnvironment = require('./dev.environment');


 const getEnvVariable = ()=>{
    if(process.env.NODE_ENV === 'production'){
        return ProdEnvironment
    }else{
        return DevEnvironment
    }
}

module.exports = getEnvVariable();