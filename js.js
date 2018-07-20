questions=[1,2];
right=0;
wrong=0;

document.getElementById("send").onclick = function() {check()};

function check()
{
	for(i=0;i<questions.length;i++)
	{
		if	((!'input[name="'+questions[i]+'"]:checked').value)
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
	}
	
	alert("you have "+right+" right answers, and "+wrong+" wrong answers");
	right=wrong=0;
}
