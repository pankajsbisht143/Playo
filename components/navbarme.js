function navbarme()
{
   return `<div id="navbar">
    <div id="explorenavbar">

        <div id="logodiv" >
            <img id="logo" src="https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2FLogo%2Bwith%2BTrademark_Filled.png%3Fq%3D20%26format%3Dauto&w=1920&q=75" alt="playo logo">
        </div>

        <div id="nav2div"> 
            <img id="pplogo" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJaNa1-cw9dtAcD7Xu_fdevMPRGuf2oZZ8P9hchayuoRF1WWiN" alt="">
            <p id="myBtn" class="loginp">Login/Signup</p>
            <img id="dropdownarrow" src="https://playo-website.gumlet.net/playo_functional/Icons/arrow_light.svg" alt="arrow">
        </div>

       

        <!--    popupwindow -->
        <div id="modal_container">

            <div id="modal">
                <img id="close" src="https://playo-website.gumlet.net/playo_functional/Icons/closeButton.svg" alt="">

                <div id="login_left_div">
                    <img width="100%" src="https://playo-website.gumlet.net/icons/login-graphics.png?auto=compress,format" alt="">
                </div>
                <div id="login_right_div">
                    <p id="entermobile">Enter Your Mobile Number</p>

                    <div id="user_phone_div">
                        <div>
                            <div id="countrySpan">
                                <span>
                                    <div id="selectCallingCode">
                                        <span style="font-size: 14px; color: #424242;" id="rem1">IND</span>
                                        <span style="font-size: 14px; color: #424242;" id="rem2">+91</span>
                                        <img id="countryDrop" src="https://s3.ap-south-1.amazonaws.com/playo-website/booking/selectCountry.svg" alt="dropdown">
                                    </div>
                                </span>
                            </div>
                        </div>
                        <span>
                            <input id="input" type="number" placeholder="Mobile Number *" value="">
                            <hr style="margin-top: -1px; margin-left: -65%; width: 220%;">
                        </span>
                        
                    </div>

                    <button id="sendOTP" style="font-size: 1em;">SEND OTP</button>
                    <button id="giveOTP"  style="font-size: 1em;" >Enter OTP</button>
                </div>
            </div>
        </div>

    </div>
</div>`
}

export default navbarme;