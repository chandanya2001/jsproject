

const grade=()=>{
var total=500;
var math=document.getElementById('math').value;
var english=document.getElementById('english').value;
var physics=document.getElementById('physics').value;
var chemistry=document.getElementById('chemistry').value;
var hindi=document.getElementById('hindi').value;
var obtmks=parseInt(math) + parseInt(physics) +parseInt(chemistry) +parseInt(hindi) + parseInt(english);


var perstg=(obtmks)*100/total;

document.getElementById('tm').innerHTML=total;
document.getElementById('ob').innerHTML=obtmks;
document.getElementById('per').innerHTML=`${perstg}%`;
var grd=Math.floor(perstg/10);
if(grd==10 || grd==9){

    document.getElementById('gd').innerHTML="A+";
    document.getElementById('res').innerHTML="Pass(First Division)";

}else if(grd==8 ){

    document.getElementById('gd').innerHTML="A";
    document.getElementById('res').innerHTML="pass(First Division)";
}

else if(grd<8 && grd>=7 ){

    document.getElementById('gd').innerHTML="B+";
    document.getElementById('res').innerHTML="Pass(First Division)";
}
else if(grd<7&& grd>=6 ){

    document.getElementById('gd').innerHTML="B";
    document.getElementById('res').innerHTML="Pass(First Division)";
}
else if(grd<6 && grd>=4 ){

    document.getElementById('gd').innerHTML="C";
    document.getElementById('res').innerHTML="Pass(Second Division)";
}
else if(grd<4  && grd>=3){

    document.getElementById('gd').innerHTML="D";
    document.getElementById('res').innerHTML="Pass(Third Division)";
}else{

    document.getElementById('gd').innerHTML="E";
    document.getElementById('res').innerHTML="Fail.....";

}


}