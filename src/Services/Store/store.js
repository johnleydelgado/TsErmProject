import {
  configure,
  makeObservable,
  observable,
  action,
  computed,
  toJS
} from "mobx";
import { persist } from "mobx-persist";
import { db } from "../../Services";

configure({
  enforceActions: "never"
});

class store {
  @observable patient = {};
  @observable fetching = false;
  @observable allPatient = [];

  constructor() {
    makeObservable(this);
  }

  @action getPatient() {
    this.allPatient = [];
    db.localDB
      .allDocs({
        include_docs: true
        // attachments: true
      })
      .then((result) => {
        result.rows.forEach((item) => {
          // console.log(item.doc);
          // console.log(this.allPatient);
          this.allPatient = [...this.allPatient, item.doc];
        });
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log(this.fetching);
  }

  @action logout() {
    this.profile = {};
    this.Id = "";
    this.thread_id = "";
    this.appointments = [];
    this.appointment = {};
    this.recieverInfo = [];
  }
}
export default store;
