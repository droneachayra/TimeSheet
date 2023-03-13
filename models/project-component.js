const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectcomponentSchema = new Schema({
taskName: {
type: String,
required: true
},
filename: {
type: String,

},

activitylist: {
type: String,
required: true
},
employeelist: {
    type: String,
    required: true
    }
}, {
collection: 'ListData'
});

module.exports = mongoose.model('ListData', projectcomponentSchema);


//blob to do for the file upload


