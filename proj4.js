var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

// sent by learnyoumongo
var fName = process.argv[2];
var lName = process.argv[3];

// the doc to insert into the collection
var doc = {
    firstName: fName,
    lastName: lName
};

// print result and close
var onInsert = function(err,data){
    if(err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
};

// insert the doc into the collection
var onConnect = function(err,db){
    if(err) throw err;
    var collection = db.collection('docs');
    collection.insert(doc , onInsert.bind(this));
};

//connect to db
mongo.connect(url,onConnect);
