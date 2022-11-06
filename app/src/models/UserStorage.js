"use strict";

const fs = require("fs").promises;                        // promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 효과적

class UserStorage{
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKey = Object.keys(users);                  // users의 key값들만 리스트로만 만듦 = [id, psword, name]
    const userInfo = usersKey.reduce((newUser, info) => { // 초기값이 id이니 id의 idx를 불러와 id, psword, name 다 저장한거임.                     
      newUser[info] = users[info][idx];                   // User.js에서 getUserInfo입력 인덱스값을 불러와 저장
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields){                             // 변수명의 형식이 리스트로 들어옴
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => { // reduce : 반복문인데 fields의 원소들을 하나씩 순회한다.
      if (users.hasOwnProperty(field)){                   // users라는 오브젝트에 해당하는 키 값이 있냐 ?
        newUsers[field] = users[field];
      }
      return newUsers;    
    }, {});                                               // {} : 오브젝트로 만듦
                                                          // reduce에서 field에 처음에 id가 들어가고 if에서 id라는 키가 있으면 id의 키와 값을 이 오브젝트에 넣음 
    return newUsers;
  }

  static getUsersInfo(id){                                // User.js에서 id를 넘기면 그에 해당하는 데이터를 가져옴
    return fs 
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error);
  }   



                                                          // 회원가입 버튼 누르면 정보 저장하기
  static save(userInfo){    
    // const users = this.#users
    users.id.push(userInfo.id)
    users.psword.push(userInfo.psword)
    users.name.push(userInfo.name)
    return {success: true};
  }
}

module.exports = UserStorage;