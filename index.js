const express = require('express');
const app = express();
const Presidentes = require('./dados/Presidentes')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/presidentes', (request, response) =>{
    response.json(Presidentes.data);
    response.statusCode = 200;
});

app.get('/api/presidente/:id', (request, response) =>{
    var id = parseInt(request.params.id);

    if(isNaN(id)){
        response.sendStatus(400)
    } else {
        var presidente = Presidentes.data.find(P => P.numero == id)
        if(presidente != undefined){
            response.json(presidente);
            response.statusCode = 200;
        } else {
            response.sendStatus(404);
        }
    }

});

app.listen(8794, () =>{
    console.log('server on');
});