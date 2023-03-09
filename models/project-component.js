const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectcomponentSchema = new Schema({
name: {
type: String,
required: true
},
position: {
type: String
},
office: {
type: String
},
salary: {
type: String
}
}, {
collection: 'projects'
});

module.exports = mongoose.model('Project', projectcomponentSchema);




