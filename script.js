// your code here

let name=document.getElementById("name").value
let year=documet.getElementById("year").value
let btn=document.getElementById("button")
let h=document.getElementById("url")


btn.addEventListner("click",(e)=>{
	h.innerText=`https://localhost:8080/${(name) ?  `/?name=${name} : ''`}` + `${(year) ? `/?$year=${year}` :''}`
})