/**
 * Employee Model
 *
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    position: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Employee", EmployeeSchema);
