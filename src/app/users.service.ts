export class UsersService {

    constructor(dbuser: string, dbpass: string){
        console.log(dbuser + dbpass);
    }

    getUsers(){
        return [
            {user:'User0201', pass: '123456'},
            {user:'User0552', pass: '121212'},
            {user:'User0779', pass: '556677'}
        ];
    }
}