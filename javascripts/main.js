var txt = "NERIKI"
var ch = {
  "N": "|\\|",
  "E": "3",
  "R": "|?",
  "I": "1",
  "K": "|&lt;"
};

function changeText() {
  var spantxt = document.getElementById("neriki");
 
  var nchar = Math.round(Math.random() * txt.length) - 1;
  
  if (nchar<0)nchar=0;

  var txt2 = txt.substring(0, nchar ) + ch[txt.substring(nchar, nchar + 1)] + txt.substring(nchar + 1, txt.length);

  //txt += " pouet";

  spantxt.innerHTML = txt2 + "    " + nchar;
}


setInterval(changeText, 5000);

