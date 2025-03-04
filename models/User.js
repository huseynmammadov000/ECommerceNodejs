const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: Boolean, default: false },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order', default: [] }],
    basket: [{ type: mongoose.Schema.ObjectId, ref: 'Product', default: [] }],
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
