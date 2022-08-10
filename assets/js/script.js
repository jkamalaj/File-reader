let inp=document.querySelector("#files")
let drop=document.querySelector(".drop")
let table=document.querySelector("table")
let tbody=document.querySelector("tbody")


inp.addEventListener("change" , function(e){
   let files=Array.from(e.target.files)
   files.forEach((file)=>{
    showImage(file)
   })
})



  function showImage(file){
    if(!file.type.includes("image/")){
        alert("Please choose image file")
        return
    }

    const fileReader=new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.addEventListener("loadend",function(){
        let src=fileReader.result
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let tdsize=document.createElement("td")
        let td4=document.createElement("td")
      

        let btn=document.createElement("button")
        let img=document.createElement("img")

         btn.className="btn btn-outline-danger fa-solid fa-trash"
         btn.style.width="80px"
         btn.style.height="80px"
         btn.style.fontSize="40px"
         
         
         img.src=src
         img.style.width="100%"

         tr.append(td1)
         td1.append(img)
         tr.append(td2)
         td2.innerText=file.name
         tr.append(td3)
         td3.innerText=file.type
         tr.append(tdsize)
         tdsize.innerText=(file.size/1024).toString().substring(0,5)+" kb"
         tr.append(td4)
         td4.append(btn)
         tbody.append(tr)



         btn.addEventListener("click", function () {
            btn.parentElement.parentElement.remove()
          });

         if(!tbody.firstElementChild){
            table.style.display="none"
         }

    })
  }
  drop.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  drop.addEventListener("drop",function(){
    e.preventDafault()
    let files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      showImage(file);
    });
})
