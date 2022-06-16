import { Router } from "express";
import { getUser } from "../../../model/users.js";
import cors from "cors";

const router = Router();
router.use(cors());

router.get('/all_users', async function (req, res) {
  getUser.findAll({ attributes: ['username', 'email', 'password', 'phone_number'] })
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      console.log(err)
    });
})

router.post('/create_users', async function (req, res) {
  getUser.create({
    id: req.query.id,
    username: req.query.username,
    email: req.query.email,
    password: req.query.password,
    phone_number: req.query.phone_number
  }).then(users => {
    res.send(users)
  }).catch(err => {
    console.log(err)
  })

});

router.put('/update_users', async function (req, res) {
  let id = req.query.id
  let newDato = req.query
  getUser.findOne({
    where: { id: id }
  }).then(users => {
    users.update(newDato)
    res.sendStatus(200);
  })
});

router.delete('/delete_users/:id', async function (req, res) {
  getUser.findByPk(req.params.id).then(function (users) {
    users.destroy();
  })
    .then((users) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err)
    });
});

export default router;
