export class User {
    constructor(
        public name : string,
        public email : string,
        public phone : number,
        public topic : string,
        public timePrefrence : string,
        public subscribe : boolean,
    ){}
}
//typescript shorter syntax, here the constructor will create & asssign  values to the props