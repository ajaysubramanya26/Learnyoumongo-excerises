var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/"+process.argv[2];

// after udpating
var onInsert = function(err,data){
    if (err) throw err;
    db.close();
}

// updating the field
var onConnect = function(err,db){
    if (err) throw err;
    var users = db.collection('users');
    users.update({
        username: "tinatime"
    },{
        $set:{
            age:40
        }
    },onInsert.bind(this));
};

// connect
mongo.connect(url,onConnect);
