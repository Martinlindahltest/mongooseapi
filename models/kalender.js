const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KalenderSchema = new Schema({
    Verksamhetstyp: {
        type: String,
    },
    Datum: {
        type: String,
    },
    Dag: {
        type: String,
    },
    Aktivitet: {
        type: String,
    },
    startSlut: {
        type: String,
    },
    Lokal: {
        type: String,
    },
    Präst: {
        type: String,
    },
    Musiker: {
        type: String,
    },
    Vaktmästare: {
        type: String,
    },
    Personal: {
        type: String,
    },
    InternNotering: {
        type: String,
    },


})

const Kalender = mongoose.model('t188', KalenderSchema)

module.exports = Kalender

/**
 * Verksamhetstyp
:
"Gtj"
Datum
:
"10/13/2019"
Dag
:
"söndag"
Aktivitet
:
"Mässa med stora och små"
startSlut
:
"11.00-13.00"
Lokal
:
"Tullinge kyrka"
Präst
:
"Erik Dufva"
Musiker
:
"Camilla Helander"
Vaktmästare
:
"Pia Karlström"
Personal
:
""
InternNotering
:
""Barn"
 */