


let fetchData=async()=>{


    let url='http://localhost:3000/movie'

    let res= await fetch(url)
    let data=await res.json()
    console.log(data);

    let show=document.querySelector("#display")

    data.map((e)=>{

     show.innerHTML+=`
     
       <tr>
       <td>${e.Name}</td>
       <td>${e.Mobile}</td>
       <td>${e.Email}</td>
       <td>${e.Age}</td>
       <td>${e.Address}</td>
       <td>${e.Date}</td>
       <td>${e.City}</td>
       <td>${e.DOB}</td>
       <td onclick="del('${e.id}')">Delete</td>
       <td  onclick="fromfill('${e.id}')" >Update</td>
       </tr>
     
     
     `



    })
    
    

}


let del=(id)=>{

    let url=`http://localhost:3000/movie/${id}`

    fetch(url,{method:"DELETE"})



}


let ins=()=>{

    let name=document.querySelector("#name").value
    let number=document.querySelector("#mobno").value
    let email=document.querySelector("#email").value
    let age=document.querySelector("#age").value
    let address=document.querySelector("#add").value
    let date=document.querySelector("#date").value
    let city=document.querySelector("#city").value
    let dob=document.querySelector("#dob").value


    let url='http://localhost:3000/movie'

    fetch(url,{

        method:"POST",        
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                "Name":name,
                "Mobile":number,
                "Email":email,
                "Age":age,
                "Address":address,
                "Date":date,
                "City":city,
                "DOB":dob


            }
        )

    })


    location.href="Ticket.html"
    return false;


}

let fromfill=async(id)=>{


       let url=`http://localhost:3000/movie/${id}`

       let res= await fetch(url)
       let data=await res.json()

       let formdata=`
       
      Enter your Name:  <input type="text" value="${data.Name}" id="updatename" > <br>
      Enter Mob No:  <input type="text" value="${data.Mobile}" id="updatemob" > <br>
      Enter Email:  <input type="text" value="${data.Email}" id="updateemail" > <br>
      Enter Age : <input type="text" value="${data.Age}" id="updateage" > <br>
      Enter Address: <input type="text" value="${data.Address}" id="updateadd" > <br>
      Enter Date : <input type="date" value="${data.Date}" id="updatedate" > <br>
      Enter City : <input type="text" value="${data.City}" id="updatecity" > <br>
      Enter DOB : <input type="date" value="${data.DOB}" id="updatedob" > <br>
      .<input type="submit" onclick="finalupdate('${data.id}')" value="Update">      
       
       
       `

       document.querySelector("#updateshow").innerHTML=formdata


}


let finalupdate=(id)=>{

     let name=document.querySelector("#updatename").value;
     let mob=document.querySelector("#updatemob").value;
     let email=document.querySelector("#updateemail").value;
     let age=document.querySelector("#updateage").value;
     let add=document.querySelector("#updateadd").value;
     let date=document.querySelector("#updatedate").value;
     let city=document.querySelector("#updatecity").value;
     let dob=document.querySelector("#updatedob").value;

     let url=`http://localhost:3000/movie/${id}`
    

     fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                "Name":name,
                "Mobile":mob,
                "Email":email,
                "Age":age,
                "Address":add,
                "Date":date,
                "City":city,
                "DOB":dob


            }
        )
        
     })




}
updatekaro=()=>
{
    let uma=document.querySelector("#updateshow");
    uma.style.display="block";
}