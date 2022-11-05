"use strict";

class UserStorage{
  static #users = {
    id: ["함상진", "곽민정"],
    psword: ["000116", "010214"],
    name: ["함상진", "곽민정"],
  };

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => { // reduce가 뭘까 ?
      if (users.hasOwnProperty(field)){       // users에 해당하는 키 값이 있냐 ?
        newUsers[field] = users[field];
      }
      return newUsers;    
    }, {});
    return newUsers;
  }

}

module.exports = UserStorage;