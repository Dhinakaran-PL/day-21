var div = document.createElement("div")
div.style.textAlign="center";
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button = document.createElement("button");
input.setAttribute("type","text");
input.setAttribute("id","country");
button.innerHTML="search";
button.addEventListener("click",foo);
let active=document.createElement("div")
active.setAttribute("id","active");

let Recover=document.createElement("div")
Recover.setAttribute("id","Recover");

let Death=document.createElement("div")
Death.setAttribute("id","Death");

div.append(input,button,active,Recover,Death)
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;

    let result = await fetch(url)
    let result1 = await result.json();
    var index=result1.length-1;
    console.log(result1[index].Active)
    active.innerHTML=`Total active cases :${result1[index].Active}`

    console.log(result1[index].Recovered)
    Recover.innerHTML=`Total Recover cases :${result1[index].Recovered}`

    console.log(result1[index].Deaths)
    Death.innerHTML=`Total Death cases :${result1[index].Deaths}`

}