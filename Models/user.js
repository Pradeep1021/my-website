/**
 * Created by Pradeep on 5/7/14.
 */
var mongoose = require('mongoose');
var Schema={
    name:String,
    email:String,
    subject:String,
    message:String
}
var user = mongoose.model('user',Schema)