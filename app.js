const cors = require ('cors')
const express = require ('express')
const morgan = require ('morgan')
const path = require ('path')

const app = express ()
app.use (cors())

app.set('port', process.env.PORT || 3001);

app.use (morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')))
app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/nuestro-menu')))
app.get ('/nuestro-menu', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/nuestro-menu', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/reservas')))
app.get ('/reservas', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/reservas', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/nuestro-blog')))
app.get ('/nuestro-blog', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/nuestro-blog', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/contactanos')))
app.get ('/contactanos', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/contactanos', 'index'))
})

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
