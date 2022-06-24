import { Router } from "express";
import { getUser } from "../models/Users.js";
import { getFather } from "../models/father.js";

const router = Router();

router.get("/all_user", async function (req, res) {
  getUser
    .findAll({
      include: {
        model: getFather,
        attributes: ["name", "lastNamef", "lastNamem", "age"],
      },
      attributes: ["name", "lastName", "email", "password", "phone_number"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create_user", async function (req, res) {
  getUser
    .create({
      name: req.query.name,
      lastName: req.query.lastName,
      email: req.query.email,
      password: req.query.password,
      phone_number: req.query.phone_number,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_users", async function (req, res) {
  let id = req.query.id;
  let newDato = req.query;
  getUser
    .findOne({
      where: { id: id },
    })
    .then((users) => {
      users.update(newDato).then((newuser) => {
        res.send(newuser);
      });
    });
});

router.delete("/destroy_users", async function (req, res) {
  let id = req.query.id;

  getUser
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.send("persona eliminada");
    });
});

export default router;
