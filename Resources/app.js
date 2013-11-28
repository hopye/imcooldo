

// Check db if not created then create..
//bootstrap the database

var firsttime_window = Ti.UI.createWindow({
	
backgroundColor:'#F7F7F7',
fullscreen:'true',
url:'firsttime_window.js'
});

var usernamedata = 'hopye';
var passdata = 'root1515';
var db = Ti.Database.open('imcooldb');
var rs = db.execute('CREATE TABLE IF NOT EXISTS user (username TEXT, password TEXT)');
var deleteall = db.execute('DELETE FROM  user');
//var insertuserdata = db.execute('INSERT INTO user (username,password) VALUES (?,?)', usernamedata, passdata);
var userRS = db.execute('SELECT username,password FROM user');

if(userRS.getRowCount()  < 1 ) {
	
	firsttime_window.open();
} else {
	
while (userRS.isValidRow())
{
 
  var userName = userRS.fieldByName('username');
  var userPass = userRS.fieldByName('password');
  var disp = Ti.API.info(userName + ' ' + userPass);
  alert('user : ' + userName + 'pass: ' + userPass);
  userRS.next();
}

userRS.close();
db.close();
//set the default background color
Titanium.UI.setBackgroundColor('#FFF');
 
//create tab group
var tabGroup = Titanium.UI.createTabGroup({ 
	tabsTintColor:'#F35656',
	backgroundColor:'#F7F7F7'	
	});
 
//create our home window
var homeWindow = Titanium.UI.createWindow({
  title: 'Home',
  backgroundColor: '#FFF',
  url: "homeWindow.js"
});
//create our home window
var universeWindow = Titanium.UI.createWindow({
  title: 'Universe',
  backgroundColor: '#FFF',
  url: "universeWindow.js"
});
 
 
 var connectWindow = Titanium.UI.createWindow({
  title: 'Connect',
  backgroundColor: '#FFF',
  url: "connectWindow.js"
});
 
 
 var meWindow = Titanium.UI.createWindow({
  title: 'me',
  backgroundColor: '#FFF',
  url: "meWindow.js"
});
 
 
//create the tab to hold the home window
var homeTab = Titanium.UI.createTab({
 
  icon: 'icons/home.png',
    activeIcon: 'icons/home2.png',
  title: 'Home',
  window: homeWindow
});
 //create the tab to hold the universe window
var universeTab = Titanium.UI.createTab({
  icon: 'icons/universe.png',
  title: 'Universe',
  window: universeWindow
});
 
 var connectTab = Titanium.UI.createTab({
  icon: 'icons/connect.png',
  title: 'Connect',
  window: connectWindow
});
var meTab = Titanium.UI.createTab({
  icon: 'icons/me.png',
  title: 'Me',
  window: meWindow
});
//add our tabs to the tabgroup
tabGroup.addTab(homeTab);
tabGroup.addTab(universeTab);
tabGroup.addTab(connectTab);
tabGroup.addTab(meTab);
 
//display the tabgroup
tabGroup.open();

}