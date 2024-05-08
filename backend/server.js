const express = require('express');

const corsOptions = {
    origin: "http://localhost:3000"
}

const app = express();
const PORT = 4000;
// app.use(cors(corsOptions));

app.get('/api/home', (req, res) => {
    res.json({mess: 'hehe'})
})




app.listen(PORT, () => {
    console.log(`le server est lancer sur le port ${PORT} `);
});