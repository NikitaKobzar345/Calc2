var a,b,result// переменные которые будут задействоваться 

const sum=()=>{
   
        a=document.getElementById('n1').value//получение элемента по его id. Получение  элемента как строки а затем вывод как числа
        a=parseFloat(a);// взяти из строки число 

        b=document.getElementById('n2').value// тоже самое только со вторым и последующие действия аналогичны
        b=parseFloat(b);

        result=a+b
        
document.getElementById('out').innerHTML=result// вывод и получение ожидаемого  результата

      
}


const sub=()=>{

        a=document.getElementById('n1').value
        a=parseFloat(a);

        b=document.getElementById('n2').value;
        b=parseFloat(b);

        result=a-b

document.getElementById('out').innerHTML=result

}


const mul=()=>{
   
     a=document.getElementById('n1').value
     a=parseFloat(a)

     b=document.getElementById('n2').value
     b=parseFloat(b)

     result=a*b

document.getElementById('out').innerHTML=result

}


const div=()=>{
   
     a=document.getElementById('n1').value
     a=parseFloat(a)

     b=document.getElementById('n2').value
     b=parseFloat(b)

     result=a/b 

document.getElementById('out').innerHTML=result 

}

const pow=()=>{
        a=document.getElementById('n1').value
        a=parseFloat(a)

        b=document.getElementById('n2').value
        b=parseFloat(b)

        result=Math.pow(a,b)

document.getElementById('out').innerHTML=result

}

const square=()=>{
        a=document.getElementById('n1').value
        a=parseFloat(a)

        b=document.getElementById('n2').value
        b=parseFloat(b)

        result=Math.pow(a,2)

document.getElementById('out').innerHTML=result
}

const cube=()=>{
        a=document.getElementById('n1').value
        a=parseFloat(a)

        b=document.getElementById('n2').value
        b=parseFloat(b)

        result=Math.pow(a,3)

document.getElementById('out').innerHTML=result
}
