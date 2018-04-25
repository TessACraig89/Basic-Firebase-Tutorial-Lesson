// alert('Hello')
var mainText = document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');
var fireHeading = document.getElementById('fireHeading');

var firebaseHeadingRef = firebase.database().ref().child('Heading');

firebaseHeadingRef.on('value', function(datasnapshot){
  fireHeading.innerText = datasnapshot.val();
});

function submitClick(){
  // window.alert('hello')
  var messageText = mainText.value;
  var firebaseRef = firebase.database().ref()
  firebaseRef.push().set(messageText);
}
