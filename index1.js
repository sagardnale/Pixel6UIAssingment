var phonevalidate="";

//This function for get Data from first page and store into sessionStorage
function getData(){
  const fullname = document.getElementById('fullName').value;
    const emailid = document.getElementById('emailId').value;
    const phonenumber = document.getElementById('phoneNumber').value;
    
    var otp = generateOTP();

    sessionStorage.setItem('FULLNAME',fullname);
    sessionStorage.setItem('EMAILID',emailid);
    sessionStorage.setItem('PHONENUMBER',phonenumber);
    sessionStorage.setItem('OTP',otp);
    sessionStorage.setItem('COUNT',3);
    

    if(phonevalidate==="Spam"){
      alert("Please enter the valid Phone Number..");
      phonevalidate="";
      window.location.reload(false);
      return false;
    }else{
      return true;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}


//This function for generate the 4 digit otp
function generateOTP(){
  var digits = '0123456789';
  let OTP='';
  for (let i = 0; i < 4; i++ ) { 
      OTP += digits[Math.floor(Math.random() * 10)]; 
  } 
  return OTP; 
}

function invalidFullNameMsg(message){
  
  if(message.value ==''){
    message.setCustomValidity('Please enter first name and last Name format: Abc Xyz');
  }
  else{
    message.setCustomValidity('');
  }
}

function invalidEmail(message){
  if(message.value==''){
    message.setCustomValidity('Enter your correct email id');
  }else{
    message.setCustomValidity('');
  }
}

/*function invalidPhoneNumber(message){
  if(message.value == ''){
    message.setCustomValidity('Enter Phone Number format (123)-456-7890');
  }else{
    message.setCustomValidity('');
  }
}*/


/**
 * Here I have apply for logic State(28) and UTs(8) range
 * There are 1000 combinations of the 3 digit number
 * I have taken the range 1-27 per state or UTs.
 * 27(range count) * 36(No. of State and UTs) = 972
 * 1000-972=28
 * I have given 28 numbers have Spam String
 */

 //Phone number validation
function takePhoneNumber(phoneNum){
  var number = phoneNum.value;
  var lastchar = number.slice(-1);
  var numberlength = number.length;
  if(numberlength==1){
    number="("+number;
    document.getElementById("phoneNumber").value=number;
    }else if(numberlength==4){
      var curval= number.slice(-3);
      if(curval >= 621 && curval<=799){
        document.getElementById("myImg").src= "jio.png";
        document.getElementById("comapnyName").innerHTML="Jio";
    } else if(curval >= 801 && curval<=920){
        document.getElementById("myImg").src= "idea.png";
        document.getElementById("comapnyName").innerHTML="Idea";
    }else if(curval >= 921 && curval<=999){
        document.getElementById("myImg").src="vodaphone.png";
        document.getElementById("comapnyName").innerHTML="Vodaphone";
    }else{
        document.getElementById("myImg").src="invalid.png";
        document.getElementById("comapnyName").innerHTML="Spam";
        phonevalidate="Spam";
    }
    number=number+")-";
    document.getElementById("phoneNumber").value=number; 
  }else if(numberlength==9){
    var lastdigits = number.slice(-3);
         var stateandUTS = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli & Daman and Diu","National Capital Territory of Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"];
        
         var start = Math.floor(lastdigits/27);
        
        if(lastdigits >= start*27 && lastdigits < (start+1)*27 && lastdigits <=972) {
            document.getElementById("stateUTs").innerHTML= ','+stateandUTS[start-1];
        }else{
            document.getElementById("stateUTs").innerHTML= ','+"Spam";
        }
    number=number+"-";
    document.getElementById("phoneNumber").value=number;
  }
  document.getElementById("phoneNumber").value=number;
  return ;
}
