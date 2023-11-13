const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let breeds = [
    {
        id: 1,
        name: "Russian Blue",
        personality: "Sweet, Loyal, Shy",
        appearance: "Short-haired, light-dark grey coat",
        origin: "Arkhangelsk, Russia",
        lifespan: "15-20 years",
        img: "images/russian-blue.jpg"
    },
    {
        id: 2,
        name: "Maine Coon",
        personality: "Extroverted, Playful, Affectionate",
        appearance: "Long-haired, range of colors, large in size",
        origin: "Maine",
        lifespan: "10-13 years",
        img: "images/maine-coon.jpg"
    },
    {
        id: 3,
        name: "Siamese",
        personality: "Social, Affectionate, Intelligent",
        appearance: "Short-haired, cream coat with dark points",
        origin: "Thailand",
        lifespan: "15-20 years",
        img: "images/siamese.jpg"
    },
    {
        id: 4,
        name: "Ragdoll",
        personality: "Affectionate, Gentle, Calm",
        appearance: "Long-haired, white/cream with dark points, blue eyes",
        origin: "Riverside, California",
        lifespan: "12-15 years",
        img: "images/ragdoll.jpg"
    },
    {
        id: 5,
        name: "British Shorthair",
        personality: "Loyal, Loving, Easygoing",
        appearance: "Short-haired, grey-blue coat, thick fur",
        origin: "Great Britain",
        lifespan: "12-20 years",
        img: "images/british-shorthair.jpg"
    },
    {
        id: 6,
        name: "Somali",
        personality: "Affectionate, Lively, Sociable",
        appearance: "Long-haired, reddish-brown coat, thick and silky fur",
        origin: "United States",
        lifespan: "12-14 years",
        img: "images/somali.jpg"
    },
];

app.get("/api/breeds", (req, res) => {
    res.send(breeds);
});

app.listen(3000, () => {
    console.log("listening");
});