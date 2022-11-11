"use strict"

const UserStorage = require("./UserStorage");

class User {
  constructor(body){
    this.body = body;
  }
  
  async login(){                           // async : await을 사용하기 위해
    const client = this.body;
    try{
      const {id, psword} = await UserStorage.getUsersInfo(client.id);      // promise를 반환하는 애한테 주는 옵션
      
      if (id){
        if (id === client.id && psword === client.psword){
          return {success: true};
        }
        return {success: false, msg: "비밀번호가 틀렸습니다."};
      }
      return {success: false, msg: "존재하지 않는 아이디입니다."};
    } catch (err){
      return { success: false, msg: err };
    }
  }

  async register(){
    const client = this.body;
    try{
    const response = await UserStorage.save(client);
    return response;
    } catch (err) {
      return { success: false, msg: err};
    }
  }
}

module.exports = User;