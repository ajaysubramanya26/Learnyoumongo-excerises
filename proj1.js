var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var ageInput = process.argv[2];


mongo.connect(url,function(err,db){
    if(err) throw err
    var parrots = db.collection('parrots')
    //this is how you find for something
    parrots.find({
        age : { $gt : parseInt(ageInput,10) }
    }).toArray(function(err, documents) {
        if(err) throw err
        console.log(documents);
        db.close();
    });
});
