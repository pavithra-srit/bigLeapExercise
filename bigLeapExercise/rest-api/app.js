const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.get("/userDetails", (request, response) => {
    const userDetails = {

        "user": [
            {
                "name": "john",
                "gender": "male",
                "state": "GA"
            },
            {
                "name": "Ann",
                "gender": "female",
                "state": "FL"
            }
        ]

    };

    response.send(userDetails);
});

app.get('/', (request, response) => {
    response.send('Hello, BigLeap!');
});