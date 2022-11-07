"use strict";

const db = require("../config/db");

class UserStorage{
  static getUsersInfo(id){
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }



                                                          // 회원가입 버튼 누르면 정보 저장하기
  static async save(userInfo){
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, psword, name, birth, phonenb, email) VALUES(?, ?, ?, ?, ?, ?);";
      db.query(query, 
        [userInfo.id, userInfo.psword, userInfo.name, userInfo.birth, userInfo.phonenb, userInfo.email],
        (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

    // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const usersKey = Object.keys(users);                  // users의 key값들만 리스트로만 만듦 = [id, psword, name]
  //   const userInfo = usersKey.reduce((newUser, info) => { // 초기값이 id이니 id의 idx를 불러와 id, psword, name 다 저장한거임.                     
  //     newUser[info] = users[info][idx];                   // User.js에서 getUserInfo입력 인덱스값을 불러와 저장
  //     return newUser;
  //   }, {});
  //   return userInfo;
  // }

  // static #getUsers(data, isAll, fields){
  //   const users = JSON.parse(data);
  //   if (isAll) return users;
  //   const newUsers = fields.reduce((newUsers, field) => { // reduce : 반복문인데 fields의 원소들을 하나씩 순회한다.
  //     if (users.hasOwnProperty(field)){                   // users라는 오브젝트에 해당하는 키 값이 있냐 ?
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;    
  //   }, {});                                               // {} : 오브젝트로 만듦
  //                                                         // reduce에서 field에 처음에 id가 들어가고 if에서 id라는 키가 있으면 id의 키와 값을 이 오브젝트에 넣음 
  //   return newUsers;
  // }
}

module.exports = UserStorage;