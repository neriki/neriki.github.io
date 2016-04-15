var txt = "Neriki"
var ch = {
  "N": "|\\|",
  //"N": "n",
  "e": "3",
  //"R": "|?",
  "r": "|?",
  //"r": "R",
  "i": "1",
  "k": "|&lt;"
  //"K": "|&lt;"
  //"k": "K"
};

function restoreText(){
	var spantxt = document.getElementById("neriki");
	spantxt.innerHTML = txt;
  setTimeout(changeText, Math.random() *5000);
}

function changeText() {
  var spantxt = document.getElementById("neriki");

  var nchar = Math.round(Math.random() * txt.length) - 1;
  
  if (nchar<0)nchar=0;

	//document.getElementById("debug").innerHTML=nchar;

  var txt2 = txt.substring(0, nchar ) + ch[txt.substring(nchar, nchar + 1)] + txt.substring(nchar + 1, txt.length);

  //txt += " pouet";

  spantxt.innerHTML = txt2;
  
  setTimeout(restoreText, Math.round(Math.random() *2000));
  
}


setTimeout(changeText, 1000);
