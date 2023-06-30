// import bookvenue from "../database/bookvenue.json";
//Login and pop up full functionalities start
import navbarme from "../components/navbarme.js"
import footer from "../components/footer.js";
let navC=document.getElementById('navbarC');
navC.innerHTML=navbarme();

let foot=document.getElementById('foot');
foot.innerHTML=footer();

document.querySelector("#logo").addEventListener("click", ()=>{
    window.location.href = "index.html";
})


// navbar popup functionality
document.querySelector("#giveOTP").style.visibility = "hidden";

const open = document.getElementById("nav2div");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    modal_container.classList.add("show")
});

close.addEventListener("click", ()=>{
    modal_container.classList.remove("show")
});




//If user is logged in 
login()

function login(){
    console.log("test")
    let loginStatus = localStorage.getItem("login")
    console.log(typeof(loginStatus))
    if(loginStatus === "true"){
        let ph = localStorage.getItem("mobileNumber");
        console.log(ph)
        document.querySelector("#myBtn").textContent = ph;
        open.addEventListener("click", ()=>{
            modal_container.classList.remove("show")
            window.location.href = "login_profile.html";
        })
    
    }
    else{
        return false;
    }

}



//When user add mobile number to it
document.querySelector("#sendOTP").addEventListener("click", ()=>{
    let mobNo = document.querySelector("#input").value;
    if(mobNo.length != 10){
        alert("Please Give correct Mobile Number");
    }
    else{
        localStorage.setItem("mobileNumber", mobNo);
        // modal_container.style.visibility = "hidden";
        // document.querySelector(".loginp")
        document.querySelector("#entermobile").textContent = `We have sent an OTP to ${mobNo}`;
        document.querySelector("#rem1").style.visibility = "hidden";
        document.querySelector("#rem2").style.visibility = "hidden";
        document.querySelector("#countryDrop").style.visibility = "hidden";
        document.querySelector("#input").value = null;
        document.querySelector("#input").placeholder = "Enter OTP"
        document.querySelector("input").style.textAlign = "center";
        document.querySelector("#sendOTP").style.visibility = "hidden";
        document.querySelector("#giveOTP").style.visibility = "visible";

        document.querySelector("#giveOTP").addEventListener("click", ()=>{

            let otp = document.querySelector("input").value;
            if(otp == "123456"){
                // alert("success");
                modal_container.classList.remove("show")
                document.querySelector("#myBtn").textContent = mobNo;
                localStorage.setItem("login", true);


                open.addEventListener("click", ()=>{
                    modal_container.classList.remove("show")
                    window.location.href = "login_profile.html";
                    login()

                })


            }
            else{
                alert("Wrong OTP");
                document.querySelector("#entermobile").textContent = `Enter Your mobile number`;
                document.querySelector("#rem1").style.visibility = "visible";
                document.querySelector("#rem2").style.visibility = "visible";
                document.querySelector("#countryDrop").style.visibility = "visible";
                document.querySelector("#input").value = null;
                document.querySelector("#input").placeholder = "Enter Mobile Number"
                document.querySelector("#sendOTP").style.visibility = "visible";
                document.querySelector("#giveOTP").style.visibility = "hidden";

            }

        })
       
    }
})

//Login and pop up full functionalities end





//Filtering array of objects from the data base start (With Debouncing Feature)

//=======================================================================>

    //Selectiong Html Content

    let inputTag = document.querySelector("#search");
    let showDiv = document.querySelector("#show-results-div");


    // //Adding Event Listener
    // inputTag.addEventListener("input", ()=>{
    //     //Getting the value of input 
    //     let value = inputTag.value;

    //     //Dont Implement anything if length is less than equal to 2
    //     if(value.length <= 2){
    //         return false;
    //     }

    //     //Run Search Function
    //     searchLocation();

    // })
 var p=document.getElementById('search')
 p.addEventListener('keypress',()=>{
    debouncingFunction(fetchFunction,1000);
 })

    //Search Function Code 
    async function searchLocation(){
        //Getting the value again
        var search_value = inputTag.value;


        if(search_value.length <= 2 || search_value == ""){
            return false;
        }


        let response = await fetch(`https://kind-jade-cardigan.cyclic.app/bookvenue`);
        let data = await response.json();
        console.log(data);

        //Writing Function for filter data based on search results

        let filterData = data.filter((el)=>{
            let regex = new RegExp(`^${search_value}`, "gi" );
            return el.location.match(regex) || el.name.match(regex);
        })

        console.log(filterData);
       apprndData(filterData)
    }


  //===========================================================================>

  let id;

  //Creating Debouncing Function
  function debouncingFunction(fetchFunction , delay){

    if(inputTag.value.length == 0){
        document.querySelector("#show-results-div").style.visibility='hidden'
    }

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(()=>{
        fetchFunction()

    }, delay)

  }

  //Creating fetch Function
  async function fetchFunction(){
      
    
    searchLocation();

  }




   //Append Data Function 
   function apprndData(data){

    
    

    document.querySelector("#show-results-div").innerHTML = "";

    

    if(data.length >= 1){
    //Map Data
    data.map((el)=>{
        
        document.querySelector("#show-results-div").style.visibility='visible'

        //Destructuring of objects
        let { location, name,imgUrl } = el;
        console.log(location)

        //Creating Elements
        let mainDiv = document.createElement("div");
        let img = document.createElement("img");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");

        let imgsrc = imgUrl


        //set value to it
        img.src = imgsrc;
        span1.textContent = location;
        span2.textContent = name;

        //Append data 
        mainDiv.append(img, span1, span2)
        document.querySelector("#show-results-div").append(mainDiv);

        mainDiv.addEventListener("click", ()=>{
          
            window.location.href = "venueDetail.html";

            let arr = [];
            arr.push(el);
            localStorage.setItem("venueDetails", JSON.stringify(arr));
        })



       
        

    })

    inputTag.addEventListener("keypress", (event)=>{
        //console.log("Test");
        if(event.key == "Enter"){
        location.href = "./venueDetails.html";
        localStorage.setItem("venueDetails", JSON.stringify(data))
        }
    })


    }

    



   }

   



   








//Filtering array of objects from the data base End (With Debouncing Feature)