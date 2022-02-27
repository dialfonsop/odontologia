const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
require('./database');


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.set('port',8000);

app.use('/sala', require('./src/routes/sala.routes'));

app.listen(app.get('port'), () => {
    console.log(`WS esta siendo escuhado ${app.get('port')}`)
})

