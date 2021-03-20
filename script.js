var a,b,result// переменные которые будут задействоваться 

const sum=()=>{
   
        a=document.getElementById('n1').value//получение элемента по его id. Получение  элемента как строки а затем вывод как числа
        a=parseInt(a);// взяти из строки число 

        b=document.getElementById('n2').value// тоже самое только со вторым и последующие действия аналогичны
        b=parseInt(b);

        result=a+b
        
document.getElementById('out').innerHTML=result// вывод и получение ожидаемого  результата

      
}


const sub=()=>{

        a=document.getElementById('n1').value
        a=parseInt(a);

        b=document.getElementById('n2').value;
        b=parseInt(b);

        result=a-b

document.getElementById('out').innerHTML=result

}


const mul=()=>{
   
     a=document.getElementById('n1').value
     a=parseInt(a)

     b=document.getElementById('n2').value
     b=parseInt(b)

     result=a*b

document.getElementById('out').innerHTML=result

}


const div=()=>{
   
     a=document.getElementById('n1').value
     a=parseInt(a)

     b=document.getElementById('n2').value
     b=parseInt(b)

     result=a/b 

document.getElementById('out').innerHTML=result 

}
