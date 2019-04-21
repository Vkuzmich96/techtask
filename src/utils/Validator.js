class Validator {
    static regexp = /@/;
    static isRegistrationValid(state, callBack){
        if(   this.isRegistrationFieldsFilled(state, callBack)
            &&this.isItEmail(state, callBack)
            &&this.isPasswordEqualsCheck(state, callBack)
        ){
            callBack("true");
            return ("true");
        } else {
            return ("false")
        }
    }

    static isEnterValid(state, callBack){
        if(   this.isEnterFieldsFilled(state, callBack)
            &&this.isItEmail(state, callBack)
        ){
            callBack("true");
            return ("true");
        } else {
            return ("false")
        }
    }

    static isItEmail(state, callBack){
        if (state.email.search(this.regexp)!==-1) {
            callBack("true");
            return true;
        } else {
            callBack("incorrect email");
            return false;
        }
    }

    static isPasswordEqualsCheck(state, callBack){
        if(state.password===state.check){
            return true;
        }
        else {
            callBack("password is different from check");
            return false;
        }
    }

    static isRegistrationFieldsFilled(state, callBack){
        if(state.name&&state.email&&state.password!==''){
            return true;
        } else {
            callBack("please fill all fields ");
            return false;
        }
    }

    static isEnterFieldsFilled(state, callBack){
        if(state.email&&state.password!==''){
            return true;
        } else {
            callBack("please fill all fields ");
            return false;
        }
    }
}

export default Validator