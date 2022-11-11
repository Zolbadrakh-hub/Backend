const asyncHandler = require('express-async-handler');
const fs = require('fs');

//Read txt file

function readData(err, data) {
    console.log(data);
}

fs.readFile('hello.txt', 'utf-8', readData);

module.exports = asyncHandler(async (req, res) => {
    res.send({data: re})
})

