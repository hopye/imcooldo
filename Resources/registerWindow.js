var registerWindow = Titanium.UI.currentWindow;

 //Animations
Ti.include('animations.js');  
/*  
var b = Titanium.UI.createButton({title:'<',top:'1%'});
curWindow.leftNavButton = b;
    b.addEventListener('click', function()
    {
      // alert('I was clicked'); // to confirm its being called
    // do the stuff here
        curWindow.close({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
  });
  */
var scrollView = Titanium.UI.createScrollView({
  contentWidth:'auto',
  contentHeight:'auto',
  top:0,
  showVerticalScrollIndicator:true,
  showHorizontalScrollIndicator:true
});
 
var view = Titanium.UI.createView({
  width:"100%",
  height: 'auto',
  top:10,
  paddingBottom: 15
});
 
 var imglogo = Ti.UI.createImageView({
  image:'images/imcool_logo.png',
  top:'17%'
	
});

 
var txt_Email = Titanium.UI.createTextField({

  font:{fontSize:16},
  top: 40,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '49%',
  width: '80%', height: 40,
  hintText:'Email', 
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
 
var txt_User = Titanium.UI.createTextField({
font:{fontSize:16},
  top: 40,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '40%',
  width: '80%', height: 40,
  hintText:'Username', 
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
 
var txt_Pass1 = Titanium.UI.createTextField({
  passwordMask: true,
  font:{fontSize:16},
  top: 40,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '58%',
  width: '80%', height: 40,
  hintText:'Password', 
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
 
 
var txt_Pass2 = Titanium.UI.createTextField({
 passwordMask: true,
  font:{fontSize:16},
  top: 40,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '67%',
  width: '80%', height: 40,
  hintText:'Repeat Password', 
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
 
 
var btn_Register = Titanium.UI.createButton({
   width: "80%",
  color: "#F94C5A",
  font:{fontSize: 20, fontWeight: "bold"},
  height: 40,
  top: '80%',
  title: "Register",
  backgroundColor:'#EEEEEE',
  borderRadius:10
});

// function to get values from input texts
function getUserInfo(){
  var email = txt_Email.value;
  var user = txt_User.value;
  var pass1 = txt_Pass1.value;
  var pass2 = txt_Pass2.value;    
  if(pass1 == pass2){
    registerUser(email, user, pass1);
  } else {
    alert("Your passwords do not match.");
  }
}
// event listener register button
btn_Register.addEventListener('click',getUserInfo);
// Function to Register a New User
function registerUser(email, user, pass){
  var request = Titanium.Network.createHTTPClient();
  var url = "http://imcool.do/ipgone_service/account.php?action=create&email="+email+"&username="+user+"&password="+pass;
  request.open("GET",url);
  request.onload = function(){
     var arrData = JSON.parse(request.responseText);
    Ti.API.log(arrData);
    var success = arrData[0].success;
    if(result == "true"){
      var alrt_Success = Titanium.UI.createAlertDialog({
        title: 'Success!',
        message: 'You have successfuly created a new account. Now you can log in.',
        buttonNames: ['OK']
      });
      alrt_Success.show();
    } else if (result == "another_user"){
    var alrt_Sorry = Titanium.UI.createAlertDialog({
      title: 'Sorry!',
      message: 'According to our database, that username is already in use.',
      buttonNames: ['OK']
      });
      alrt_Sorry.show();
    } else {
      var alrt_Fail = Titanium.UI.createAlertDialog({
        title: 'Error!',
        message: 'It seems we are experiencing problems... please try again later.',
        buttonNames: ['OK']
      });
      alrt_Fail.show();
    }
  };
  request.send();
}


view.add(imglogo);
view.add(txt_Email);
view.add(txt_User);
view.add(txt_Pass1);
view.add(txt_Pass2);
view.add(btn_Register);
scrollView.add(view); 
registerWindow.add(scrollView);