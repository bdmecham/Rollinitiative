// Add Function
function addCharacter(name, num) {
    var newli = document.createElement("li");
    newli.appendChild(document.createTextNode(num + " "));
    newli.appendChild(document.createTextNode(name));

    document.getElementById("init-list").appendChild(newli);

    document.getElementById("list-input").reset();
}

// Sort Function
function sort() {
    var list, i, switching, b, shouldSwitch;
  list = document.getElementById("init-list");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("li");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (parseInt(b[i].innerHTML) < parseInt(b[i+1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}