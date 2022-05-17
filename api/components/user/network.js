const { request } = require('express');
const express = require('express');

const router = express.Router();

router.get('/succes 1', function (req, res){
    res.send({
        success: 'succes 1',
    });

});


router.get('/succes 2', function (req, res){
    res.send({
        success: 'succes 2',
   });

});


router.post('/succes 1', function (req, res){
    request.send({
       
        success: 'succes 1',
    });

});

router.post('/login', function (req, res){
    console.log(req.query.username);
    console.log(req.query.password);

    res.send({
        token: 'token',
        id_user: 'id_user',
        success:'OK'
    });

});

router.post('/register', function (req, res){
    console.log(req.query.username);
    console.log(req.query.email);
    console.log(req.query.password);
    console.log(req.query.numberPhone);

    res.send({
        token: 'token',
        id_user: 'id_user',
        success:'OK',
        
    });

});



module.exports = router;