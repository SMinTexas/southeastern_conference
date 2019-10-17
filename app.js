const express = require("express");
const models = require("./models");
const app = express();

app.set("view engine", "pug");

app.get("/", async(req, res) => {
    let data = {};
    data.teams = await models.Team.findAll();
    res.render("index", data);
});

app.get("/teams/:id", async(req, res) => {
    let data = {};
    data.team = await models.Team.findOne({
        where: { id: req.params.id }
    });
    res.render("team", data);
});

app.listen(3000);