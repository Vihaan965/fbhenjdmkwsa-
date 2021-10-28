students=[];
function show (){
    var name1=document.getElementById("Thing1").value;
    var name2=document.getElementById("Thing2").value;
    var name3=document.getElementById("Thing3").value;
    var name4=document.getElementById("Thing4").value;
    students.push (name1);
    students.push (name2);
    students.push (name3);
    students.push (name4);
    document.getElementById("output").innerHTML=students;
    document.getElementById("L").style.display="none";
    document.getElementById("Z").style.display="inline-block";
}
