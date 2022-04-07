
import "./index.css";
document.querySelector("form").addEventListener("submit", bozaz);
  var bozazArr = JSON.parse(localStorage.getItem("bozazItems")) || [];
  displayTable(bozazArr);

  
  

  function bozaz(event) {
    event.preventDefault(); // only for forms
    
    var des = document.querySelector("#desc").value;
    
    console.log( des);

    var bozazObj = {
     
      description: des,
      
    };
    bozazArr.push(bozazObj);
    localStorage.setItem("bozazItems", JSON.stringify(bozazArr));
    displayTable(bozazArr);
  }

  function displayTable(bozazArr) {
    document.querySelector("tbody").textContent = "";
    bozazArr.map(function (elem, index) {
      var tr = document.createElement("tr");

     

      var td3 = document.createElement("td");
      td3.textContent = elem.description;

      

      //   var td5= document.createElement("td");
      //   td5.textContent = "delete"

      tr.append( td3);
      document.querySelector("tbody").append(tr);
    });
  }
