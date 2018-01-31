import { getAuth } from "js/api";
const PATH = process.env.REACT_APP_BACK_END_PATH;

class Store {
  constructor() {
    this.local = new Map();
  }

  findOne(id) {
    if (this.local.has(id)) {
      return Promise.resolve(this.local.get(id));
    } else {
      return getAuth(`${PATH}/public/templateOperations/${id}`).then(template => {
        this.local.set(id, template);

        return template;
      });
    }
  }
}

const store = new Store();

export default store;
