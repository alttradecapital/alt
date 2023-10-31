function myFunction() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("todayProfit").innerHTML ="$ " + x +"M";
  }

  myFunction();


  function myFunction2() {
    var x = Math.floor((Math.random() * 1392) + 1);
    document.getElementById("totalOrders").innerHTML = x.toLocaleString()
  }

  myFunction2();


  function myFunction3() {
    var x = Math.floor((Math.random() * 1392) + 1);
    document.getElementById("averageOrder").innerHTML = x.toLocaleString()
  }

  myFunction3();


  function myFunction4() {
    var x = Math.random() 
    document.getElementById("lossEquity").innerHTML = parseFloat(x).toFixed(2);
  }

  myFunction4();