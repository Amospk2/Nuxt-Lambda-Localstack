const express = require('express');
const app = express();
const PORT = 4000;
var cors = require('cors')

app.use(cors())
app.use('/', express.static('public'))


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));