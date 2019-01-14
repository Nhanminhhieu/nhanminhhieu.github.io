// add info when click button add
function addList() {
   // create li
   var li = document.createElement('li');
   var txtInput = document.getElementById("txtInput").value;
   var  liNode = document.createTextNode(txtInput);
   li.appendChild(liNode);
   // create button in li
   var input  = document.createElement("input");
   input.type = "button";
   input.className = "btn__remove";
   input.value = "X";
   li.appendChild(input);
   if(txtInput === "") {
      alert("Không được để trống");
   }
   else {
       document.getElementById("list").appendChild(li);
       document.getElementById("txtInput").value = '';
       document.getElementById("txtInput").focus();
   }
   // remove li
   removeList();
}
// Remove info when click button X
function removeList() {
    var remove = document.getElementsByClassName("btn__remove");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}