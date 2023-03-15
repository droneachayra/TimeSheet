// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const projectcomponentSchema = new Schema({
// taskName: {
// type: String,
// required: true
// },
// filename: {
// type: String,

// },

// activitylist: {
// type: String,
// required: true
// },
// employeelist: {
//     type: String,
//     required: true
//     }
// }, {
// collection: 'ListData'
// });

// module.exports = mongoose.model('ListData', projectcomponentSchema);

const { Binary } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectcomponentSchema = new Schema({
    taskName: {type: String, required: true},
    filename: {type: String, required:true},
    activitylist: {type: String, required: true},
    employeelist: {type: String, required: true},
    csvFile: {
        data:Buffer,
        contentType:String,
    // required:true
        // originalname: String,
        // mimetype: String,
        // size: Number,
        // path: String
        // file: { type: Buffer, required: true },
        // filename: { type: String, required: true },
        // mimetype: { type: String, required: true }
    }
},
{
    collection: 'ListData'
});
module.exports = mongoose.model('ListData', projectcomponentSchema);