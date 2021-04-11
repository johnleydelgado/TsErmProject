import PouchDB from "pouchdb-react-native";
// create a component
const localDB = new PouchDB("myDB");
const remoteDB = new PouchDB("http://192.168.100.69:5984/remotedb", {
  skipSetup: true,
  auth: {
    username: "admin",
    password: "admin"
  }
});

export default { localDB, remoteDB };
