import { Router } from "express";
import { getUser } from "../model/Users.js";

const router = Router();

router.get("/list_all", async function (req, res) {
  getUser
    .findAll({attributes: ["username", "email", "password", "phone_number"] })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create_data", async function (req, res) {
  getUser
    .create(
      {
        id: req.query.id,
        username: req.query.username,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,
      },
      { fields: ["username", "email", "password", "phone_number"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
