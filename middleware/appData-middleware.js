const papa = require("papaparse")
const fs = require("fs");

const fillAppData = async (request, response, next) => {
    if (!request.files.app_data) {return next()}

    // const reader = fs.createReadStream('/home/svsvetli/reactProjects/sas-file-uploader-mock/uploads/test.csv')
    // const reader = fs.createReadStream('uploads/test.csv')
    // const reader = fs.createReadStream(request.files[0].path)
    // const file = fs.readFile(request.files[0].path)
    // const data = papa.parse(file, {worker: true})
    // const data = papa.parse(request.files[0].buffer.toString(), {worker: true})
    // console.log(request.files[0].buffer.toString())
    // reader.on('data', function (chunk) {
    //     console.log(chunk.toString());
    // });
    // console.log(data)

    // const file = fs.createReadStream('uploads/test.csv');
    // var count = 0; 
    // var rows;
    // papa.parse(file.read(), {
    //     worker: true, 
    //     step: function(result) {
        
    //     },
    //     complete: function(results, file) {
    //         console.log('parsing complete read', count, 'records.');
    //         console.log(results)
    //         rows = results.data;
    //     }
    // });
    fs.readFile(request.files.app_data[0].path, 'utf8', function(err, data){   
        const file = papa.parse(data, {worker: true})
        request.app_data = file
        next();
    });        
}

module.exports = {
    fillAppData
}