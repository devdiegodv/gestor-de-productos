const app = require('./server')

app.listen(app.get('port'), () => {
    console.log("Server open ", app.get('port'))
})