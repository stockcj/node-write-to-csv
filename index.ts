import fs = require('fs');

const myJSON = [
            {
              "_id": "5b918c4344b2d27361d83062",
              "index": 0,
              "age": 21,
              "eyeColor": "blue",
              "name": "Suzette Paul",
              "gender": "female",
              "company": "XIIX",
              "email": "suzettepaul@xiix.com"
            },
            {
              "_id": "5b918c43e54d6363fbd85f04",
              "index": 1,
              "age": 31,
              "eyeColor": "blue",
              "name": "Mooney Stout",
              "gender": "male",
              "company": "BEZAL",
              "email": "mooneystout@bezal.com"
            },
            {
              "_id": "5b918c43501b1910616b75b0",
              "index": 2,
              "age": 20,
              "eyeColor": "green",
              "name": "Keisha Frederick",
              "gender": "female",
              "company": "COMBOGEN",
              "email": "keishafrederick@combogen.com"
            }
]

function convertToCsv(args: any) {
    const data = args.data || null;
    if (data == null || !data.length) {
        return null;
    };

    const columnDelimiter = args.columnDelimiter || ',';
    const lineDelimiter = args.lineDelimiter || '\n';

    const keys = Object.keys(data[0]);

    let result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item: any) {
        let ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function writeToCsv(data: any) {
    fs.writeFile('people.csv', convertToCsv({data: data}), 'utf8', (err) => {
        if (err) {
            console.log('an error');
        } else {
            console.log('Done!');
        }
    });
}

writeToCsv(myJSON);
