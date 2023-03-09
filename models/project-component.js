const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectcomponentSchema = new Schema({
taskName: {
type: String,
required: true
},
filename: {
type: String
},
employeelist: {
type: String
},
activity: {
type: String
}
}, {
collection: 'ListData'
});

module.exports = mongoose.model('ListData', projectcomponentSchema);




