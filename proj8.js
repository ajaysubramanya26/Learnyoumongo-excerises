var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

// var handleCount = function(err,count){
//     if (err) throw err;
//     console.log(count);
//     //this.db.close();
// };

var onConnect = function(err,db){
    if (err) throw err;
    var parrots = db.collection('parrots');
    parrots.count({
        age : { $gt : parseInt(process.argv[2],10) }
    },function(err,count){
        if (err) throw err;
        console.log(count);
        db.close();
    });
};

mongo.connect(url, onConnect);
