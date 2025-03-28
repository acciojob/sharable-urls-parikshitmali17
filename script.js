// // your code here


// let btn=document.getElementById("button")
// let h=document.getElementById("url")


// btn.addEventListener("click",(e)=>{
// let name=document.getElementById("name").value
// let year=document.getElementById("year").value
// 	let queryParameter=[];

	
// 	if(name) queryParameter.push(`name=${encodeURIComponent(name)}`)
// 	if(year) queryParameter.push(`year=${encodeURIComponent(year)}`)

// 	let queryString=queryParameter.length ? `?${queryParameter.join("&")} : ""`
// 		h.innerText=`https://localhost:8080/${queryString}`
// }

document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("button");
    let h = document.getElementById("url");

    btn.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let year = document.getElementById("year").value;

        // Construct query parameters
        let queryParams = [];
        if (name) queryParams.push(`name=${encodeURIComponent(name)}`);
        if (year) queryParams.push(`year=${encodeURIComponent(year)}`);

        let queryString = queryParams.length ? `?${queryParams.join("&")}` : "";
        h.textContent = `https://localhost:8080/${queryString}`;
    });
});
