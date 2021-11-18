
    function addRow() {
    console.log ("RRR")
    document.getElementById("First_name")
    console.log (document.getElementById("First_name"))
    var table = document.getElementById("tableA");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount-2);
   var newCell = row.insertCell(0);
   var newText = document.createTextNode(document.getElementById("First_name").value);
     newCell.appendChild(newText);

     newCell = row.insertCell(1);
        newText = document.createTextNode(document.getElementById("select").selectedOptions[0].value);
         newCell.appendChild(newText);

         newCell = row.insertCell(2);
         var x = document.getElementById("date").value;
         newText = document.createTextNode(x);
         newCell.appendChild(newText);
         var age = ((new Date().getTime() - new Date(x)) / (24 * 3600 * 365.25 * 1000)) | 0;
         var newCell = row.insertCell(3);
         var newText = document.createTextNode(age);
         newCell.appendChild(newText);


//           var number = arguments.length;
//           var sum = 0;
//           for(var i = 0; i < number; i++){
//            sum+=arguments[i];
//           }
//           var av = sum/number;
// var newRow = table.insertRow();
//var newCell = row.insertCell(4);
//var allRows = document.getElementByTagName("TR");
//   var newText = document.createTextNode(document.getElementByTagName("TR").value);
//     newCell.appendChild(newText);





              var allRows = document.getElementsByTagName("tr");
              //var newCell = row.insertCell(0);
              var num = 0;
              var sum = 0;
              for (var i = 1; i< allRows.length; i++){
              var currentR = allRows[i].cells[3];
              if (currentR) {
              sum+= +currentR.innerText;
              num = num+1;
              }
              }
               console.log (sum)
               console.log (num)
//              var tds = document.getElementsByTagName("td");
//              for (var i = 0; i< allRows.length; i++){
//              if (tds [i].className == "age") {
//              tds[i].innerText = sum/num;
//              }
//              }
              allRows[allRows.length - 1].cells[1].innerHTML = sum/num;



}






