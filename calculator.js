let insert=(num)=>{
    document.calc.text.value=document.calc.text.value+num;
}
let equalto=()=>{
    let exp=document.calc.text.value;
    if(exp){
        document.calc.text.value=eval(exp);
    }
}
let do_back=()=>{
    let exp=document.calc.text.value;
    document.calc.text.value=exp.substring(0,exp.length-1);
}