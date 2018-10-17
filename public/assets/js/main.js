
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/



  var label = inp.nextSibling;
  while(label && label.nodeType != 1) {
      label = label.nextSibling
  }


  var btn = inp.parentNode.parentNode.getElementsByClassName("popup__more")[0];
  if(btn){

  btn.addEventListener("click", function (e) {
     a = document.createElement("div");
     a.setAttribute("class", "input-new-wrapper");
     b = document.createElement("input");
     b.setAttribute("class", "input");
     b.setAttribute("placeholder", "введите ваш текст");

      /*append the DIV element as a child of the autocomplete container:*/
      a.appendChild(b);
      var c = inp.parentNode.parentNode;
      c.insertBefore(a, c.childNodes[c.childElementCount]);
      setTimeout(() => a.style.opacity = 1);
});
}

  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { 
        return false;
      }

    
      if (val && label) { 
        label.style.opacity = "0";
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      if(arr){
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].word.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<span>" + "<strong>" + arr[i].word.substr(0, val.length) + "</strong>" + arr[i].word.substr(val.length) + "</span>";
          b.innerHTML += "<p>" + arr[i].translate + "</p>";
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].word + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
   function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

 

  function showLabel(elmnt) {
    if(label){
    if(elmnt == inp){
      label.style.opacity = "0";
    }
    if (elmnt != inp && !inp.value) {
      label.style.opacity = "1";
    } 
  }
  }

  function addInput(elmnt) {
    a
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }

}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
    showLabel(e.target);
});
}



var modal = document.getElementById('popup__add');
var btn = document.getElementById('add-button');
var btnMobile = document.getElementById('add-buttonMobile');
var span = document.getElementsByClassName("popup__close")[0];
var modal_login = document.getElementById('popup__login');
var btn_loginMobile = document.getElementById('login-buttonMobile');
var btn_login = document.getElementById('login-button');
var span_login = document.getElementsByClassName("popup__close")[1];

btn.onclick = function() {
    modal.style.display = "flex";
}
btnMobile.onclick = function() {
    modal.style.display = "flex";
    menu();
}
btn_login.onclick = function() {
    modal_login.style.display = "flex";
}
btn_loginMobile.onclick = function() {
    modal_login.style.display = "flex";
    menu();
}

span.onclick = function() {
    modal.style.display = "none";
}
span_login.onclick = function() {
    modal_login.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal_login) {
        modal_login.style.display = "none";
    }
}

var s = 0;

function menu() {
  var x = document.getElementById("mobileMenu");
  var r = document.body;
  if (s === 0) {
    x.style.right = "0";
    r.style.overflow = "hidden";
    s = 1;
  } else{
    r.style.overflow = "auto";
    x.style.right = "-576px";
    s = 0;
  }
}