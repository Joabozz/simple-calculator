function dis(val) {
    document.getElementById("result").value += val;
}
  
function clr() {
    document.getElementById("result").value = " ";
}

function solve()
{
  let x = document.getElementById("result").value;
  let y;
  try {
    y = eval(x);
  } catch (error) {
    //alert("Syntax Error, Osea que papo");
    document.getElementById("result").value = "Syntax Error";
    //clr()
    return;
  }

  document.getElementById("result").value = y ;
}
  
let input = document.getElementById("result");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("solveBtn").click();
  }
});