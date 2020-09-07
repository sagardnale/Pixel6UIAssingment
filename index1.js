var phonevalidate="";

//This function for get Data from first page and store into sessionStorage
function getData(){
  const fullname = document.getElementById('fullName').value;
    const emailid = document.getElementById('emailId').value;
    const phonenumber = document.getElementById('phoneNumber').value;
    
  // Call to generateOTP() function
    var otp = generateOTP();

    sessionStorage.setItem('FULLNAME',fullname);
    sessionStorage.setItem('EMAILID',emailid);
    sessionStorage.setItem('PHONENUMBER',phonenumber);
    sessionStorage.setItem('OTP',otp);
    sessionStorage.setItem('COUNT',3); 

    if(phonevalidate==="Spam"){
      alert("Please enter the valid Phone Number..");
      document.getElementById("phoneNumber").value="";
      phonevalidate="";
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
  var curval = phoneNum.value;
  var e = curval.slice(-1);
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
  }
  var curchr = curval.length;
  console.log(curchr);
  if (curchr == 3 && curval.indexOf("(") <= -1) {
      document.getElementById("phoneNumber").value= "(" +curval + ")" + "-";
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
  } else if (curchr == 4 && curval.indexOf("(") > -1) {
    document.getElementById("phoneNumber").value= curval + ")-";
  } else if (curchr == 5 && curval.indexOf(")") > -1) {
    document.getElementById("phoneNumber").value= curval + "-";
  } else if (curchr == 9) {
    //Here is the logic for the state and Uts range
    var lastdigits = curval.substring(curval.length-3);
    
    var stateandUTS = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli & Daman and Diu","National Capital Territory of Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"];
    
     var start = Math.floor(lastdigits/27);
    
    if(lastdigits >= start*27 && lastdigits < (start+1)*27 && lastdigits <=972) {
        document.getElementById("stateUTs").innerHTML= ','+stateandUTS[start-1];
    }else{
        document.getElementById("stateUTs").innerHTML= ','+"Spam";
    }
    document.getElementById("phoneNumber").value= curval + "-";  
  } 
  if(curchr==10){
    curval = curval.slice(0,9);
    document.getElementById("phoneNumber").value=curval;
  }else if(curchr==6){
    curval = curval.slice(0,4);
    document.getElementById("phoneNumber").value=curval;
  }else if(curval < 2){
    document.getElementById("phoneNumber").value="";
  }
  return;
}
