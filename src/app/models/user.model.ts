export class UserModel {
    constructor(
        public id: string,
        public name: String,
        public typeOfCompany: String,
        public username: String,
        public email: String,
        public password: String,
        public phone: String,
        public role: String,
    ) {}
}