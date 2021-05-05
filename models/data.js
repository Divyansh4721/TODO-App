const mongoose=require('mongoose');

const entryschema=new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:false
    }
});

const DataEntry = mongoose.model('TODOappentry',entryschema);

module.exports=DataEntry;