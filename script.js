const createButton = document.getElementById("create");
const passwordBox = document.getElementById("passwordBox");

createButton.addEventListener("click", () => {

    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const markLenght = document.getElementById("lenght").value;
    const errorText = document.getElementById("error");

                if (markLenght > 0 && markLenght < 26){
                    function makeid(length) {
                    var result           = '';
                        if(lowercase.checked == true && uppercase.checked == true && numbers.checked == true && symbols.checked == true){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == true && uppercase.checked == true && numbers.checked == true && symbols.checked == false){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        }
                        else if(lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == true){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == true && uppercase.checked == false && numbers.checked == true && symbols.checked == true){
                            var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == false && uppercase.checked == true && numbers.checked == true && symbols.checked == true){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == false){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                        }
                        else if(lowercase.checked == true && uppercase.checked == false && numbers.checked == true && symbols.checked == false){
                            var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
                        }
                        else if(lowercase.checked == false && uppercase.checked == true && numbers.checked == true && symbols.checked == false){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                        }
                        else if(lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == true){
                            var characters       = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == false && uppercase.checked == true && numbers.checked == false && symbols.checked == true){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == false && uppercase.checked == false && numbers.checked == true && symbols.checked == true){
                            var characters       = '0123456789!@#$%^&*+-/';
                        }
                        else if(lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == false){
                            var characters       = 'abcdefghijklmnopqrstuvwxyz';
                        }
                        else if(lowercase.checked == false && uppercase.checked == true && numbers.checked == false && symbols.checked == false){
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        }
                        else if(lowercase.checked == false && uppercase.checked == false && numbers.checked == true && symbols.checked == false){
                            var characters       = '0123456789';
                        }
                        else if(lowercase.checked == false && uppercase.checked == false && numbers.checked == false && symbols.checked == true){
                            var characters       = '!@#$%^&*+-/';
                        }
                        else{
                            passwordBox.innerHTML = "";
                            errorText.innerHTML = "Please indicate what the password should consist of"
                        }
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random()*charactersLength));
                        }
                    return result;
                    }
                    passwordBox.innerHTML = makeid(markLenght);
                    errorText.innerHTML = "";
                }
                else{
                    passwordBox.innerHTML = "";
                    errorText.innerHTML = "Please enter a valid password length (1 to 25)"
                }
})
