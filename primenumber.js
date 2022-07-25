function largest(num1,num2,num3){
    var x=document.getElementById('num1').value
    var y=document.getElementById('num2').value
    var z=document.getElementById('num3').value
    if (x>=y  && x>=z){
       document.write('num1 is largest')
    }
    else if (y>=x && y>=z){
    document.write('num2 is largest')
   } 
   else{
    document.write('num3 is largest')
}
}
        
    