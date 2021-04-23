const express = require('express');
const router = express.Router();

//Firestore

const data = [
    {
        "id": 1,
        "title": "La hojarasca",
        "description": "Good one",
        "author": "Gabo"
    },
    {
        "id": 2,
        "title": "El coronel no tiene quien le escriba",
        "description": "Interesting",
        "author": "Gabo"
    }
]


router.get('/books',(req,res) => {
    res.send({'books': data});
    //res.send(""+ data.length);
    //res.send(404);
});

module.exports = router;





