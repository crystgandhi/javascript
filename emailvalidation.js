
function emailValidation(emailid){
    var validid=document.getElementById('emailid').value
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (emailRegex.test(validid)){
    document.write("This is a valid Email id")
  }
  else{
    document.write("This is a not valid Email id")
  }
}