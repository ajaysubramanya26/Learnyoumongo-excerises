var mongo = require("mongodb").MongoClient;
var givenSize = process.argv[2];
var url = "mongodb://localhost:27017/learnyoumongo";

var onConnect = function(err,db){
    if (err) throw err;
    var prices = db.collection('prices');
    prices.aggregate([
        {$match: {size: givenSize}},
        {$group: {
            _id: 'avg',
            avg:{
                $avg:'$price'
            }
        }}
    ]).toArray(function(err, results){
        if (err) throw err;
        if(!results.length){
            throw new Error('No results found');
        }
        var avg = results[0].avg
        console.log(Number(avg).toFixed(2));
        db.close();
    });
}

mongo.connect(url , onConnect);
