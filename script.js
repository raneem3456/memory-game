
var numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//shuffle();

var first = "";
var second = "";
// --------------------------------------------

function print_cards()
{
    for (var i=0 ; i<16; i++)
    {
        var d = "<div onclick='show_hide("+i+")' class='card' id='card"+i+"'> <div class='n' id='n"+i+"' >"+numbers[i]+"</div>  </div>";
        document.getElementById("main").innerHTML += d;
    }
}

// --------------------------------------------

function show_hide (id) {
    var div = document.getElementById("n" + id);
    
    if (document.getElementById("n"+id).style.display == "block")
        return;

    if (div.style.display == "none" || div.style.display == "")
        div.style.display = "block";
    else
        div.style.display = "none";

    if (first == "")
        first = id;
    else if ( second == "")
        second = id;

    console.log("first: " + first);
    console.log("second: " + second);

    if (first != "" && second != "")
    {
       setTimeout(delay_hide, 500);
    }

}

// --------------------------------------------

function delay_hide ()
{
    var d1 = document.getElementById("n" + first).innerHTML;
    var d2 = document.getElementById("n" + second).innerHTML;

    if (d1 != d2)
    {
        document.getElementById("n" + first).style.display = "none";
        document.getElementById("n" + second).style.display = "none"; 
    }
    first = "";
    second = "";
}
// --------------------------------------------

function shuffle() {
    let currentIndex = numbers.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [numbers[currentIndex], numbers[randomIndex]] = [
        numbers[randomIndex], numbers[currentIndex]];
    }

  }