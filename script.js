// your code here


let btn=document.getElementById("button")
let h=document.getElementById("url")


btn.addEventListener("click",(e)=>{
let name=document.getElementById("name").value
let year=document.getElementById("year").value
	let queryParameter=[];

	
	if(name) queryParameter.push(`name=${encodeURIComponent(name)}`)
	if(year) queryParameter.push(`year=${encodeURIComponent(year)}`)

	let queryString=queryParameter.length ? `?${queryParameter.join("&")} : ""`
		h.innerText=`https://localhost:8080/${queryString}`
}