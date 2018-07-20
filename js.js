questions=[1,2];
right=0;
wrong=0;

document.getElementById("send").onclick = function() {check()};

function check()
{
	for(i=0;i<questions.length;i++)
	{
		if (document.querySelector('input[name="'+questions[i]+'"]:checked').value=="true")
		{
			right++;
		}
		else
		{
			wrong++;
		}
	}
	
	alert("you have "+right+" right answers, and "+wrong+" wrong answers");
	right=wrong=0;
}

function save() {
  var htmlContent = ["your-content-here"];
  var bl = new Blob(htmlContent, {type: "text/html"});
  var a = document.createElement("a");
  a.href = URL.createObjectURL(bl);
  a.download = "your-download-name-here.html";
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
  a.click();
}