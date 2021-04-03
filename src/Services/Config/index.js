import PouchDB from "pouchdb-react-native";
// create a component
const localDB = new PouchDB("myDB");

export default { localDB };
