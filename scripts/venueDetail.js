import footer from "../components/footer.js";
import navbarme from "../components/navbarme.js";
let navC=document.getElementById('navbarC');
navC.innerHTML=navbarme();

let foot=document.getElementById('foot');
foot.innerHTML=footer();



    
//Login and pop up full functionalities start

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







    let data = JSON.parse(localStorage.getItem("singleVenueDetails"));
    let { name, imgUrl ,rating , filter_by} = data;
    let category = filter_by[0];
    let vote = localStorage.getItem("votes")
    console.log(data, category, vote)

    //Append value
    document.querySelector("#name").textContent = name;
    document.querySelector("#ground_name").textContent = "RBANM's Ground";
    document.querySelector("#rate").textContent = rating;
    document.querySelector("#rateCount").textContent = vote;
    document.querySelector("#cat").textContent = category;
    document.querySelector("#notBlur").src = imgUrl;
    document.querySelector("#svgBlur").src = imgUrl;

    map_div.innerHTML = `<iframe
                                width= "100%"
                                height= "100%"
                                style="border:0"
                                loading="lazy"
                                allowfullscreen
                                src="https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8$iwloc=&output=embed">
                        </iframe>`

    

    let rateVenue = document.getElementById("rateVenue");
    let different_ratings = document.getElementById("different_ratings");
    rateVenue.addEventListener("click", ()=>{
        different_ratings.classList.add("show")
    })
    
    let count = 0;
    document.addEventListener('click', (event)=>{
        if(event.target) {
            count++;
        }
        if(count == 2) {
            count =0;
            different_ratings.classList.remove("show")
        }
    });


   // mobile page append here
    document.addEventListener("click", (event) => {
        if (!event.target.matches('.bodyy') && event.target.matches('.different_ratings')) {
            different_ratings.classList.add("");
        }
    }, true)


    // document.addEventListener('click', (event) => {
    //     if (!event.target.matches('.bodyy')) {
    //         different_ratings.classList.remove("show");
    //     }
    // }, true);

    // document.addEventListener('click', function (event) {
    //     if (!event.target.matches('.different_ratings')) {
    //         // location.reload();
    //         different_ratings.classList.add("show");
    //     }
    // }, false);

    // let venue_arr = [
    //     {
    //         name : "South United Football Club",
    //         groundName : "RBANM's Ground",
    //         lat : 12.871859,
    //         lng : 77.615578,
    //         rating : 5,
    //         ratingCount : 6,
    //         filter_by : "Football"
    //     }
    // ];

    // let map_div = document.getElementById("map_div");
    // let clubname = document.getElementById("name");
    // let ground_name = document.getElementById("ground_name");
    // let rate = document.getElementById("rate");
    // let rateCount = document.getElementById("rateCount");


    // let clicked = "South United Football Club"
    // venue_arr.forEach((ele) => {
    //     if(ele.name === clicked){
    //         map_div.innerHTML = "";
    //         clubname.innerHTML = "";
    //         ground_name.innerHTML = "";
    //         rate.innerHTML = "";
    //         rateCount.innerHTML = "";
    //         map_div.innerHTML = `<iframe
    //                             width= "100%"
    //                             height= "100%"
    //                             style="border:0"
    //                             loading="lazy"
    //                             allowfullscreen
    //                             src="https://maps.google.com/maps?q=${ele.name}&t=&z=13&ie=UTF8$iwloc=&output=embed">
    //                     </iframe>`
    //         clubname.innerHTML = ele.name;
    //         ground_name.innerHTML = ele.groundName;  
    //         rate.innerHTML = ele.rating;
    //         rateCount.innerHTML = ele.ratingCount;          

    //     }
    // })




    document.querySelector("#booknow_btn").addEventListener("click", ()=>{
        window.location.href = "bookVenue.html";
    })

    document.querySelector("#booknow_btn2").addEventListener("click", ()=>{
        window.location.href = "bookVenue.html";
    })
