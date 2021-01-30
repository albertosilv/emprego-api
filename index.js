require("dotenv").config({
    path: process.env.NODE_ENV === "development" ? ".env.test" : ".env",
});

const app = require('./src/app');

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})
