const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    let reqPayload = req.body;
    if(!reqPayload.data){
       res.send({"message":"Invalid request"});
       res.status(415);
    }
    let wordArr = reqPayload.data.split("000");
    res.send({
        "firstName": wordArr[0],
        "lastName": wordArr[1],
        "clientId": wordArr[2]
    });
    res.status(200);

});
 
module.exports = router;