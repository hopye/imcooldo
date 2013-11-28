var windows_firsttime= Titanium.UI.currentWindow;
    
    
var winna = Titanium.UI.iOS.createNavigationWindow({
   window: windows_firsttime
});

    
// create register window 
var registerInviteWindow = Ti.UI.createWindow({
 	backgroundColor:'#F7F7F7',
fullscreen:false,
url:'registerInviteWindow.js',
title:'Invitation Code',
fullscreen:true
});
var registerWindow = Ti.UI.createWindow({
 	backgroundColor:'#F7F7F7',
fullscreen:true,
url:'registerWindow.js',
title:'Register',
left:'100%'
});


 // create forgot pass window
 var forgotWindow = Ti.UI.createWindow({
 	backgroundColor:'#F7F7F7',
fullscreen:'true',
url:'forgotWindow.js',
title:'Forgot Password',
fullscreen:true
});
var v1 = Ti.UI.createView({
	width:'100%',
	height:'100%',
});

var img = Ti.UI.createImageView({
  image:'images/imcool_logo.png',
  top:'17%'
});
var inputemail = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '48%',
  width: '80%', height: 40,
  hintText:'Email', autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
});
var inputpassword = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  clearOnEdit:true,
  top: '58%',
  passwordMask:true,
  width: '80%', height: 40,
  hintText:'Password'
});
var btn_login = Titanium.UI.createButton({
   width: "80%",
  color: "#F94C5A",
  font:{fontSize: 20, fontWeight: "bold"},
  height: 40,
  top: '70%',
  title: "Sign in",
  backgroundColor:'#EEEEEE',
  borderRadius:10
});
var btn_register = Titanium.UI.createButton({
  width: "80%",
  color: "#F94C5A",
  font:{fontSize: 20, fontWeight: "bold"},
  height: 40,
  top: '80%',
  title: "Register",
  backgroundColor:'#EEEEEE',
  borderRadius:10
});
 btn_register.addEventListener('click',function(){
//registerInviteWindow.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
Ti.API.log("you cliked the register button");
//windowsNAV.openWindow(registerInviteWindow, {animated:true});
//nav.open(registerWindow.open({animated:true});
win1.openWindow(registerInviteWindow, {animated:true});
});
var btn_forgot = Titanium.UI.createButton({
  width: "80%",
  color: "#AAAAAA",
  font:{fontSize: 20, fontWeight: "regular"},
  height: 40,
  top: '90%',
  title: "Forgot Password", 
});
 btn_forgot.addEventListener('click',function(){

});

btn_login.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked login");
});


btn_forgot.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked forgot");
});
v1.add(img,inputemail,inputpassword,btn_login,btn_register,btn_forgot);

windows_firsttime.add(v1);
win1.open();

