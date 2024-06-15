const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/salary-slip-project", {
    serverSelectionTimeoutMS: 5000, // Example: Set timeout to 5 seconds
    socketTimeoutMS: 45000, // Example: Set socket timeout to 45 seconds
})
.then(() => console.log('Connected With Database Successfully'))
.catch((err) => console.error('Error Connecting with Database', err));


const userSchema = new mongoose.Schema({
    name: String,
    fatherName: String, 
    basicPay: String,
    homeAll: String,
    dearAllo: String,
    medicalAll: String,
    totalDays: String,
    grossPay: String,
    salaryPayable: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}