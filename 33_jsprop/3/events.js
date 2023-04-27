// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  // predition: instead of the user having to manually close the popup, it'll automatically close 
  // actual: only runs the first alert call and stops the rest of the loops
  e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
// prediction: displays when true and does not display when false 
// actual: reverses order of display. (sets order of calling) When the boolean is entirely removed, the "boolean" is automatically set to false 
//   (Leave exactly 1 version uncommented to test...)

table.addEventListener('click', clicky,true);
//table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// same answer as the above question except if boolean == true, then the contents of the entire table are shown first 