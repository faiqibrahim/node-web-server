const express = require('express');
const expressUtils = require('./utils/expressUtils');

var app = express();

expressUtils.init(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

