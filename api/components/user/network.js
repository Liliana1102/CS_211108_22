
const express = require('express');
const response = require('../../../network/response.js');
const { getConnection } = require('../../../model/db');

const router = express.Router();

router.get('/success1', function (req, res) {
    response.success(req, res, '', 200);
});


router.get('/succes 2', function (req, res) {
    res.send({
        success: 'succes 2',
    });

});


router.post('/succes 1', function (req, res) {
    request.send({

        success: 'succes 1',
    });

});

router.post('/login', function (req, res) {
    console.log(req.query.username);
    console.log(req.query.password);

    res.send({
        token: 'token',
        id_user: 'id_user',
        success: 'OK'
    });

});

router.post('/register1', function (req, res) {
    console.log(req.query.username);
    console.log(req.query.email);
    console.log(req.query.password);
    console.log(req.query.numberPhone);

    res.send({
        token: 'token',
        id_user: 'id_user',
        success: 'OK',

    });

});



router.post('/register', async function (req, res){
    const client = await getConnection();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;
    
    
    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    }

    client.query(query_request)
        .then(r => { response.success (req, res, r, 200) })
        .catch(e => { response.success (req, res, e.detail, 200) });
});

module.exports = router;