var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var givenAge = process.argv[2];


var onGettingDocs = function(err , documents, db){
    if (err) throw err;
    console.log(documents);
    this.db.close();
}

var onConnect = function(err,db){
    if (err) throw err;
    var parrots =  db.collection("parrots");
    parrots.find({
        age : { $gt : parseInt(givenAge,10)  }
    },{
        age : true,
        name : true,
        _id : false
    }).toArray(onGettingDocs.bind(this));
}

mongo.connect(url,onConnect);
