const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/TODOAppdb');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error db:'));
db.once('open', function() {
});