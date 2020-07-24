const Server = require('./src/server');

const app = new Server().app

app.listen(5000, ()=>{
    console.log('Server started at port 5000');
    
})