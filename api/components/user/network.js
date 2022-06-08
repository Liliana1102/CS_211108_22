
import { Router } from 'express';


import { success as _success } from '../../../network/response.js';
import { getData } from '../../../model/db.js';


const router = Router();


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

//Get
router.get('/readme', async function (req, res) {
    //Realizar conexion a DB
    const client = await getData();

    const query_request = {
        text: 'Select * from tbl_usersdb',
    };

    client.query(query_request)
        .then(r => { _success(req, res, r, 200) })
        .catch(e => { _success(req, res, e.detail, 200) })


});

//Post
router.post('/register', async function (req, res) {
    //Realizar conexion a DB
    const client = await getData();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { _success(req, res, r, 200) })
        .catch(e => { _success(req, res, e, 400) })


});

//Delete
router.delete('/delete', async function (req, res) {
    const client = await getData();

    let id = req.query.id;


    const query_request = {
        text: 'DELETE From tbl_usersdb where id = $1',
        values: [id]
    };

    client.query(query_request)
        .then(r => { _success(req, res, r, 200) })
        .catch(e => { _success(req, res, e.detail, 400) })

});

//Update
router.put('/update', async function (req, res) {
    const client = await getData();

    let id = req.query.id;
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'Update tbl_usersdb set username=$2, email=$3, password=$4, phone_number=$5 where id= $1',
        values: [id, username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { _success(req, res, r, 200) })
        .catch(e => { _success(req, res, e.detail, 200) })


})



export default router;
