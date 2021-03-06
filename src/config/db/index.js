const mongoose = require('mongoose');

async function connect()
{
    try {
        await mongoose.connect('mongodb://localhost:27017/beoDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect successfully!');
    } catch (error) {
        console.log('failure');
    }

}

module.exports = { connect };