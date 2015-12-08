var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/"+process.argv[2];

// closing the db 
var onRemove = function(err,data){
    if (err) throw err;
    db.close();
}

// removing the document
var onConnect = function(err,db){
    if (err) throw err;
    var collection = db.collection(process.argv[3]);
    collection.remove({
        _id: process.argv[4]
    },onRemove.bind(this))
}

// connecting to db
mongo.connect(url,onConnect);
