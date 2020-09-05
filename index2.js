window.addEventListener('load',() => {
    //const params = (new URL(document.location)).searchParams;

    //Here we are take value of the fullName and phoneNumber from sessionStroage
    const fullname = sessionStorage.getItem("FULLNAME");
    const phoneNumber = sessionStorage.getItem("PHONENUMBER");

    //Take the first Name from fullName String.
    var firstName = fullname.split(" ");

    //call to generate the 4 digit opt
    
    //store the generated otp in sessionStorage
    var otp=sessionStorage.getItem('OTP');

    
    //Give the First Name , Phone Number and OTP to second page id
    document.getElementById("name").innerHTML = firstName[0];
    document.getElementById("phonenumber").innerHTML = phoneNumber;
    document.getElementById("verificationcode").innerHTML = otp;    
})


//This function for check OTP 
function checkOTP(){
    //Here we are take the input OTP ,sessionStorage OTP and Count
    var inputOTP = document.getElementById("otpNumber").value;
    var otp = sessionStorage.getItem("OTP");
    var count = sessionStorage.getItem("COUNT");
    
     //condition for check opt
     if(otp === inputOTP){
        alert("Your OTP is correct..");
        document.getElementById("myForm").action="http://pixel6.co/";   
    }else{
        if(count == 1){
            document.getElementById("myForm").action="http://pixe.co/sdnsakjfnsdfds";
        }else
        sessionStorage.setItem("COUNT",count-1);
        alert("Please enter the correct OTP..");
    }    
}


