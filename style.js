

  
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper1", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });




  

let RegisterKaro=()=>
{
  let username=document.querySelector("#Rname").value;
  let nameerr=document.querySelector("#Rname");
  let password=document.querySelector("#Rpass").value;
  let passworderr=document.querySelector("#Rpass");
  let cpassword=document.querySelector("#Rcpass").value;
  let cpassworderr=document.querySelector("#Rcpass");
  let error=document.querySelector("#error");
  
  
  if(username=="")
  {
  document.querySelector("#Rname").placeholder="Enter your valid Name";
  nameerr.style.borderColor="red";
  nameerr.style.outlineColor = "red";
  error.innerHTML="Enter Valid Name";
  error.style.color="red";
  error.style.fontSize="30px"
  return false;

  }

  else if(password=="")
  {
    document.querySelector("#Rpass").placeholder="Enter your valid Password";
    passworderr.style.borderColor="red";
    passworderr.style.outlineColor = "red";
    error.innerHTML="Enter Valid Password";
  error.style.color="red";
  error.style.fontSize="30px"
    return false;
  }
  
  else if(!
    (
         password.match(/[1234567890]/) 
         && 
         password.match(/[!@#$%^&*()]/) 
         && 
         password.match(/[a-z]/) 
         && 
         password.match(/[A-Z]/)
    ))
{
  document.querySelector("#Rpass").placeholder="Enter your valid Password";
  passworderr.style.borderColor="red";
  error.innerHTML="Enter Valid Password";
  error.style.color="red";
  error.style.fontSize="30px"
  return false;
}

else if((cpassword!=password))
{
  document.querySelector("#Rcpass").placeholder="Enter your Confirm same Password";
  cpassworderr.style.borderColor="red";
  error.innerHTML="Enter same Confirm  Password";
  error.style.color="red";
  error.style.fontSize="30px"
  return false;
}
let login=document.querySelector("#login");
  let reg=document.querySelector("#Register");
  login.style.display="block";
  reg.style.display="none";
  

  
  localStorage.setItem("name",username);
  localStorage.setItem("userpassword",password);

  return false;
  }



  
  let loginKaro=()=>
  {
    let logname=document.querySelector("#logname").value;
    let lnameerr=document.querySelector("#logname");
    let logpass=document.querySelector("#logpass").value;
    let lpasser=document.querySelector("#logpass");
    let error=document.querySelector("#error");
    let para3=localStorage.getItem("name");
    let para4=localStorage.getItem("userpassword");
    if(logname!=para3)
    {
    document.querySelector("#logname").placeholder="Enter your valid Username";
    lnameerr.style.borderColor="red";
    error.innerHTML="Enter valid Username";
  return false;
    }
    else if(logpass!=para4)
    {
    document.querySelector("#logpass").placeholder="Enter your Valid Password";
    lpasser.style.borderColor="red";
    error.innerHTML="Enter your Valid Password";
    return false;
    }
    let login=document.querySelector("#login");
    login.style.display="none";

    let profile=document.querySelector(".login");
    let yourprofile=document.querySelector("#profile");
    profile.style.display="none";
    let proname=para3.slice(0,7);
    yourprofile.innerHTML=`Hello..<br>${proname}..`;

    return false;
  }

 


  
let login=()=>
{
  let login=document.querySelector("#login");
  let reg=document.querySelector("#Register");
  reg.style.display="none";
 login.style.display="block"

}
let register=()=>
{
  let login=document.querySelector("#login");
  let reg=document.querySelector("#Register");
  login.style.display="none";
  reg.style.display="block";
  
}
let registerPageHide=document.querySelector("#registerPageHide");
registerPageHide.addEventListener("click",function()
{
  let reg=document.querySelector("#Register");
  reg.style.display="none";
})

let loginPageHide=document.querySelector("#loginPageHide");
loginPageHide.addEventListener("click",function()
{
  let login=document.querySelector("#login");
  login.style.display="none";
})

let showlocation=()=>
{
  let location=document.querySelector("#location .location");
  let show=document.querySelector("#show");
  let hide=document.querySelector("#hide");
  location.style.display="block";
  gsap.from("#location .location",{
  scale:0,
  y:-500,
  stop:5,
  duration:2,
  borderRadius:"20px",
  display:"block"
})
show.style.display="none";
hide.style.display="block";
}

let locationhide=()=>
{
  let location=document.querySelector("#location .location");
  let show=document.querySelector("#show");
  let hide=document.querySelector("#hide");
  location.style.display="none";
  hide.style.display="none";
  show.style.display="block";
}




bhopal.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let bhopal=document.querySelector("#bhopal");
  let currentLocation=bhopal.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";
})
indore.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let indore=document.querySelector("#indore");
  let currentLocation=indore.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";
})
banaras.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let banaras=document.querySelector("#banaras");
  let currentLocation=banaras.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";
})
mumbai.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let mumbai=document.querySelector("#mumbai");
  let currentLocation=mumbai.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";
})
prayagaraj.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let prayagaraj=document.querySelector("#prayagaraj");
  let currentLocation=prayagaraj.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";
})
rewa.addEventListener("click",function()
{
  let yourLocation=document.querySelector("#yourlocation");
  let rewa=document.querySelector("#rewa");
  let currentLocation=rewa.textContent;
  let currentLocation1=currentLocation.slice(0,6);
  yourLocation.textContent=currentLocation1;
  let location=document.querySelector("#location .location");
  location.style.display="none";

})

let detailsDekho=()=>
{
   let dekho=document.querySelector("#details");
   dekho.style.display="block";
   gsap.from("#details",{
   duration:2,
   display:"block"
  })
}

let closeKaro=()=>
{
  let dekho=document.querySelector("#details");
  dekho.style.display="none";
}

let moreOpen=()=>
{
  let more =document.querySelector("#more");
 
  gsap.from("#more",{
    scale:0,
    y:-500,
    stop:5,
    duration:2,
    borderRadius:"20px",
    display:"block"
  })
 

}
let moreClose=()=>
{
  let more =document.querySelector("#more");
  more.style.display="none";
}

let priceOne1=()=>
{
 
  let priceOne=document.querySelector("#bookKaro .brandwithPrice1");
  priceOne.style.opacity="100%";
}
let priceOnel1=()=>
{
  let priceOne=document.querySelector("#bookKaro .brandwithPrice1");
  priceOne.style.opacity="0";
}

let priceOne2=()=>
  {
   
    let priceOne=document.querySelector("#bookKaro .brandwithPrice2");
    priceOne.style.opacity="100%";
  }
  let priceOnel2=()=>
  {
    let priceOne=document.querySelector("#bookKaro .brandwithPrice2");
    priceOne.style.opacity="0";
  }
  let priceOne3=()=>
    {
     
      let priceOne=document.querySelector("#bookKaro .brandwithPrice3");
      priceOne.style.opacity="100%";
    }
    let priceOnel3=()=>
    {
      let priceOne=document.querySelector("#bookKaro .brandwithPrice3");
      priceOne.style.opacity="0";
    }


    let priceOne4=()=>
      {
      
        let priceOne=document.querySelector("#bookKaro .brandwithPrice4");
        priceOne.style.opacity="100%";
      }
      let priceOnel4=()=>
      {
        let priceOne=document.querySelector("#bookKaro .brandwithPrice4");
        priceOne.style.opacity="0";
      }
      
      let priceOne5=()=>
        {
         
          let priceOne=document.querySelector("#bookKaro .brandwithPrice5");
          priceOne.style.opacity="100%";
        }
        let priceOnel5=()=>
        {
          let priceOne=document.querySelector("#bookKaro .brandwithPrice5");
          priceOne.style.opacity="0";
        }
        let priceOne6=()=>
          {
           
            let priceOne=document.querySelector("#bookKaro .brandwithPrice6");
            priceOne.style.opacity="100%";
          }
          let priceOnel6=()=>
          {
            let priceOne=document.querySelector("#bookKaro .brandwithPrice6");
            priceOne.style.opacity="0";
          }




          let priceOne7=()=>
            {
            
              let priceOne=document.querySelector("#bookKaro .brandwithPrice7");
              priceOne.style.opacity="100%";
            }
            let priceOnel7=()=>
            {
              let priceOne=document.querySelector("#bookKaro .brandwithPrice7");
              priceOne.style.opacity="0";
            }
            
            let priceOne8=()=>
              {
               
                let priceOne=document.querySelector("#bookKaro .brandwithPrice8");
                priceOne.style.opacity="100%";
              }
              let priceOnel8=()=>
              {
                let priceOne=document.querySelector("#bookKaro .brandwithPrice8");
                priceOne.style.opacity="0";
              }
              let priceOne9=()=>
                {
                 
                  let priceOne=document.querySelector("#bookKaro .brandwithPrice9");
                  priceOne.style.opacity="100%";
                }
                let priceOnel9=()=>
                {
                  let priceOne=document.querySelector("#bookKaro .brandwithPrice9");
                  priceOne.style.opacity="0";
                }

                let priceOne10=()=>
                  {
                   
                    let priceOne=document.querySelector("#bookKaro .brandwithPrice10");
                    priceOne.style.opacity="100%";
                  }
                  let priceOnel10=()=>
                  {
                    let priceOne=document.querySelector("#bookKaro .brandwithPrice10");
                    priceOne.style.opacity="0";
                  }


                let priceOne11=()=>
                  {
                   
                    let priceOne=document.querySelector("#bookKaro .brandwithPrice28");
                    priceOne.style.opacity="100%";
                  }
                  let priceOnel11=()=>
                  {
                    let priceOne=document.querySelector("#bookKaro .brandwithPrice28");
                    priceOne.style.opacity="0";
                  }
  

                  let priceOne12=()=>
                    {
                     
                      let priceOne=document.querySelector("#bookKaro .brandwithPrice29");
                      priceOne.style.opacity="100%";
                    }
                    let priceOnel12=()=>
                    {
                      let priceOne=document.querySelector("#bookKaro .brandwithPrice29");
                      priceOne.style.opacity="0";
                    }
                    let priceOne13=()=>
                      {
                       
                        let priceOne=document.querySelector("#bookKaro .brandwithPrice30");
                        priceOne.style.opacity="100%";
                      }
                      let priceOnel13=()=>
                      {
                        let priceOne=document.querySelector("#bookKaro .brandwithPrice30");
                        priceOne.style.opacity="0";
                      }



                      let priceOne14=()=>
                        {
                         
                          let priceOne=document.querySelector("#bookKaro .brandwithPrice23");
                          priceOne.style.opacity="100%";
                        }
                        let priceOnel14=()=>
                        {
                          let priceOne=document.querySelector("#bookKaro .brandwithPrice23");
                          priceOne.style.opacity="0";
                        }
                        let priceOne15=()=>
                          {
                           
                            let priceOne=document.querySelector("#bookKaro .brandwithPrice24");
                            priceOne.style.opacity="100%";
                          }
                          let priceOnel15=()=>
                          {
                            let priceOne=document.querySelector("#bookKaro .brandwithPrice24");
                            priceOne.style.opacity="0";
                          }
          
                          let priceOne16=()=>
                            {
                             
                              let priceOne=document.querySelector("#bookKaro .brandwithPrice25");
                              priceOne.style.opacity="100%";
                            }
                            let priceOnel16=()=>
                            {
                              let priceOne=document.querySelector("#bookKaro .brandwithPrice25");
                              priceOne.style.opacity="0";
                            }
          
          
                          let priceOne17=()=>
                            {
                             
                              let priceOne=document.querySelector("#bookKaro .brandwithPrice26");
                              priceOne.style.opacity="100%";
                            }
                            let priceOnel17=()=>
                            {
                              let priceOne=document.querySelector("#bookKaro .brandwithPrice26");
                              priceOne.style.opacity="0";
                            }
            
          
                            let priceOne18=()=>
                              {
                               
                                let priceOne=document.querySelector("#bookKaro .brandwithPrice27");
                                priceOne.style.opacity="100%";
                              }
                              let priceOnel18=()=>
                              {
                                let priceOne=document.querySelector("#bookKaro .brandwithPrice27");
                                priceOne.style.opacity="0";
                              }
                           


                              let priceOne19=()=>
                                {
                                 
                                  let priceOne=document.querySelector("#bookKaro .brandwithPrice20");
                                  priceOne.style.opacity="100%";
                                }
                                let priceOnel19=()=>
                                {
                                  let priceOne=document.querySelector("#bookKaro .brandwithPrice20");
                                  priceOne.style.opacity="0";
                                }
              
              
                              let priceOne20=()=>
                                {
                                 
                                  let priceOne=document.querySelector("#bookKaro .brandwithPrice21");
                                  priceOne.style.opacity="100%";
                                }
                                let priceOnel20=()=>
                                {
                                  let priceOne=document.querySelector("#bookKaro .brandwithPrice21");
                                  priceOne.style.opacity="0";
                                }
                
              
                                let priceOne21=()=>
                                  {
                                   
                                    let priceOne=document.querySelector("#bookKaro .brandwithPrice22");
                                    priceOne.style.opacity="100%";
                                  }
                                  let priceOnel21=()=>
                                  {
                                    let priceOne=document.querySelector("#bookKaro .brandwithPrice22");
                                    priceOne.style.opacity="0";
                                  }
                                  let priceOne22=()=>
                                    {
                                     
                                      let priceOne=document.querySelector("#bookKaro .brandwithPrice14");
                                      priceOne.style.opacity="100%";
                                    }
                                    let priceOnel22=()=>
                                    {
                                      let priceOne=document.querySelector("#bookKaro .brandwithPrice14");
                                      priceOne.style.opacity="0";
                                    }
let bookKaro4=()=>
{
  let username=localStorage.name;
  let pass=localStorage.userpassword;
  let logname=document.querySelector("#logname").value;
  let lnameerr=document.querySelector("#logname");
  let logpass=document.querySelector("#logpass").value;
  let lpasser=document.querySelector("#logpass");

 
  if(username!=null  && pass!=null && logname!="" && logpass!="")
  {
  let bookKaro=document.querySelector("#bookKaro");
  bookKaro.style.display="block";
  let movieName=document.querySelector(" #nowShowing .box .box4 h5 ").textContent;
  let movieNamereal=document.querySelector("#bookKaro h1 p");
  movieNamereal.textContent=movieName;



  let date=()=>
    {
      let ans = new Date ();

      let ans2=ans.toDateString();
     
      let ans3=document.querySelector("#bookKaro .nav2 .date").textContent;
      ans3=ans2;
    
    };
    date();
  }
  else
  {
    alert("login First ");
    if(alert.value=true)
    {
      let login=document.querySelector("#login");
      login.style.display="block";
    }
  }
  
  
 
 
}

let bookKaro3=()=>
  {
    let username=localStorage.name;
    let pass=localStorage.userpassword;
    let logname=document.querySelector("#logname").value;
    let lnameerr=document.querySelector("#logname");
    let logpass=document.querySelector("#logpass").value;
    let lpasser=document.querySelector("#logpass");
   
    if(username!=null  && pass!=null && logname!="" && logpass!="")
    {
    let bookKaro=document.querySelector("#bookKaro");
  bookKaro.style.display="block";
  let movieName=document.querySelector(" #nowShowing .box .box3 h5 ").textContent;
  let movieNamereal=document.querySelector("#bookKaro h1 p");
  movieNamereal.textContent=movieName;


  let date=()=>
    {
      let ans = new Date ();
    let month=ans.getMonth()+1;
    let year=ans.getFullYear();
    // alert(year);

    
      let ans3=document.querySelector("#bookKaro .nav2 .date #today") ;
                                                       ;
       ans3.innerHTML=`${month}   ${year}`;
    
     
             
    
    };
    date();
  }
  else
  {
    alert("login First ");
    if(alert.value=true)
    {
      let login=document.querySelector("#login");
      login.style.display="block";
    }
  }
  }

  let bookKaro2=()=>
    {
      let username=localStorage.name;
      let pass=localStorage.userpassword;
      let logname=document.querySelector("#logname").value;
      let lnameerr=document.querySelector("#logname");
      let logpass=document.querySelector("#logpass").value;
      let lpasser=document.querySelector("#logpass");
     
      if(username!=null  && pass!=null && logname!="" && logpass!="")
      {
      let bookKaro=document.querySelector("#bookKaro");
  bookKaro.style.display="block";
  let movieName=document.querySelector(" #nowShowing .box .box2 h5 ").textContent;
  let movieNamereal=document.querySelector("#bookKaro h1 p");
  movieNamereal.textContent=movieName;

  let date=()=>
    {
      let ans = new Date ();

      let ans2=ans.toDateString();
     
      let ans3=document.querySelector("#bookKaro .nav2 .date").textContent;
      ans3=ans2;
    
    };
    date();
  }
  else
  {
    alert("login First ");
    if(alert.value=true)
    {
      let login=document.querySelector("#login");
      login.style.display="block";
    }
  }
    }

    let bookKaro1=()=>
    {
     let username=localStorage.name;
     let pass=localStorage.userpassword;
     let logname=document.querySelector("#logname").value;
    let lnameerr=document.querySelector("#logname");
    let logpass=document.querySelector("#logpass").value;
    let lpasser=document.querySelector("#logpass");
    
    
    
     if(username!=null  && pass!=null && logname!="" && logpass!="")
     {
  let bookKaro=document.querySelector("#bookKaro");
  bookKaro.style.display="block";
  let movieName=document.querySelector(" #nowShowing .box .box1 h5 ").textContent;
  let movieNamereal=document.querySelector("#bookKaro h1 p");
  movieNamereal.textContent=movieName;

  let date=()=>
    {
      let ans = new Date ();

      let ans2=ans.toDateString();
     
      let ans3=document.querySelector("#bookKaro .nav2 .date").textContent;
      ans3=ans2;
    
    };
    date();
  }
  else
  {
    alert("login First ");
    if(alert.value=true)
    {
      let login=document.querySelector("#login");
      login.style.display="block";
    }
  }
  }
  let logout=()=>
  {
    localStorage.clear();
    confirm("Are you Sure want to Logout");
    if(confirm.value=true)
    {
      alert("you have logout Successfully...");
      location.reload()
    }
  }
  
      













          
      
    





