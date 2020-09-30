var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = {
    name: [],
    phone: [],
    email: [],
    id: []
};

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'template', "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, 'template', "reservations.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, 'template', "tables.html"));
});

// displays all reservations to page
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// displays specific reservation
app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});


//creates new reservation
app.post("/api/reservations", function (req, res) {

    console.log('post request');

    var newReservation = req.body;

    console.log(newReservation);

    // reservations.push(newReservation);

    // res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
