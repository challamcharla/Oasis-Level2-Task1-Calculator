function insert(v){
    
    var t=document.form.i.value;
    document.form.i.value=t+v;


}
function clean(){
    
    document.form.i.value='';
}
function back(){
    var t=document.form.i.value;
    document.form.i.value=t.substring(0,t.length-1);
}
function equals(){
    var t=document.form.i.value;
   if(t){
    
        document.form.i.value=eval(t);
    

   }else{
    document.form.i.value='Error';
    

   }
}