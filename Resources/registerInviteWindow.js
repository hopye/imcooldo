var registerInviteWindow = Titanium.UI.currentWindow;
//Animations

var registerWindow = Ti.UI.createWindow({
 	backgroundColor:'#F7F7F7',
fullscreen:true,
url:'registerWindow.js',
title:'Register',
left:'100%'
});



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
var lbl_text = Titanium.UI.createLabel({
	  font:{fontSize:12},
  color: '#336699',
  top: '48%',
  width: '80%', height: 40,
   text: 'This is a private network only. Want Access ? Email us at info@imcool.do',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});
 
var txt_code = Titanium.UI.createTextField({

  font:{fontSize:16},
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '58%',
  width: '80%', height: 40,
  hintText:'Invitation Code', 
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
var btn_Register = Titanium.UI.createButton({
   width: "80%",
  color: "#F94C5A",
  font:{fontSize: 20, fontWeight: "bold"},
  height: 40,
  top: '80%',
  title: "Get in!",
  backgroundColor:'#EEEEEE',
  borderRadius:10
});

// function to get values from input texts
function getUserInfo(){
  var code = txt_code.value;
     
  if(code !=""){
    check(code);
  } else {
    alert("You must enter your invitation code. Want Access ? Email us at info@imcool.do");
  }
}
// event listener register button
btn_Register.addEventListener('click',getUserInfo);
// Function to Register a New User
function check(code){
	//alert("check code started");
  var request = Titanium.Network.createHTTPClient();
  var url = "http://imcool.do/iphone_service/check_invitation.php?action=check&code=" + code;
  request.onload = function(){
  var arrData = JSON.parse(request.responseText);
  //	Ti.API.log(arrData);
  	 /*
  	 for (var i = 0 ; i < arrData.lenght ; i++ )
  	 {
  	var a  = data.push(arrData[i]);
  	 	Ti.API.log("aaa" + a + "ee ");
  	 	alert(a);
  	 } 
   */
    //arrData = eval('('+this.responseText+')');
    var success = arrData[0].success;
    var invitedBy = arrData[0].invitedBy;
    var invitedcode = arrData[0].code;
   Ti.App.Properties.setString('invitedcode', invitedcode);
    
    //Ti.API.log("success is " + success+ Ti.App.Properties.getString('invitedcode') + " ok");
    
    if(success == "true"){
      var alrt_Success = Titanium.UI.createAlertDialog({
        title: 'Success!',
        message: 'You were invited by '+ invitedBy +' with code ' + invitedcode ,
        buttonNames: ['OK'], 
      });
     alrt_Success.show();
    
     
 alrt_Success.addEventListener('click', function() {
 	Ti.API.log("ClickedOK");
 	//curWindow.close();
 	// registerInviteWindow.animate(slide_it_right); // current window animate right
     win1.openWindow(win1.registerWindow, {animated:true});// open the register window
 });
 
    } else if (success == "false"){
    var alrt_Sorry = Titanium.UI.createAlertDialog({
      title: 'Sorry!',
      message: 'Code invalid to use',
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
  
  request.open("GET",url);
  request.send();
  
}


view.add(imglogo);
view.add(lbl_text);
view.add(txt_code);
view.add(btn_Register);
scrollView.add(view); 
registerInviteWindow.add(scrollView);