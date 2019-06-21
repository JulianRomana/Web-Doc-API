const user = process.env.MONGO_USER;
const pswd = process.env.MONGO_PSWD;

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${user}:${pswd}@cluster0-qbgcb.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
const mongoConnect = () => {
  return new Promise((resolve, reject) => {
    client
      .connect()
      .then(db => resolve({ db: db, url: uri }))
      .catch(error => reject(`MongoDB not connected`, error));
  });
};
module.exports = {
  client,
  mongoConnect
};
