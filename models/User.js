const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true},
    email: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    cart:{type: [], required: false},

    
});



userSchema.pre("save", async function (next){
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10 
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
})

userSchema.methods.checkpassword = async function (password){
    return(bcrypt.compare(password, this.password))
}

const User = mongoose.model('User', userSchema);

module.exports = User;

