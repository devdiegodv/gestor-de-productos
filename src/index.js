require('dotenv').config();
const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log("Server open ", app.get('port'))
})