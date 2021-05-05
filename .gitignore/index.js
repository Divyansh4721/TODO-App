const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const DataEntry = require('./models/data');
// ***************************************************
// install
// npm install 
// "ejs": "^3.1.6",
// "express": "^4.17.1",
// "mongoose": "^5.12.7"

// **************************************************
const app = express();
const files = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/', function (req, res) {

    DataEntry.find({}, function (err, data) {
        if (err) {
            console.log('error in fetching entry from db');
            return;
        }
        return res.render('TODO', {
            title: "TODO App",
            data_list: data

        });
    });
});

app.post('/addform', function (req, res) {
    let a = req.body.date;
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let year = a.slice(0, 4);
    let month = a.slice(5, 7);
    let day = a.slice(8, 10);
    req.body.date = months[month - 1] + ' ' + day + ', ' + year;
    DataEntry.create(req.body, function (err, newEntry) {
        if (err) {
            console.log('Error in Creating Entry');
            return;
        }
        return res.redirect('back');
    })
});
app.post('/deleteform', function (req, res) {
    if (typeof (req.body.id) != 'string') {
        for (let i of req.body.id) {
            console.log(i);
            DataEntry.findByIdAndDelete(i, function (err) {
                if (err) {
                    console.log('Error in Deleting Entry');
                    return;
                }
            });
        }
        return res.redirect('back');
    }
    else {
        DataEntry.findByIdAndDelete(req.body.id, function (err) {
            if (err) {
                console.log('Error in Deleting Entry');
                return;
            }
            return res.redirect('back');
        });
    }
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in Running the Server', err);
        return;
    }
});