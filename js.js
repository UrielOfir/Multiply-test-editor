rightAnswers=[];
var test = document.getElementById("test");
right=0;
wrong=0;

document.getElementById("send_question").onclick = function() {add_question((rightAnswers.length+1))};

document.getElementById("send").onclick = function() {check()};

function add_question(qNumber)
{
	q=[];
	q.question=document.getElementById("question").value;
	q.answer1=document.getElementById("answer1").value;
	q.answer2=document.getElementById("answer2").value;
	q.answer3=document.getElementById("answer3").value;
	q.answer4=document.getElementById("answer4").value;
	q.right=document.getElementById("right").value;
	rightAnswers.push(q.right);
	
	form=document.createElement("form");
	br=document.createElement("BR");
	question=[];
	answer1=[];
	answer2=[];
	answer3=[];
	answer4=[];
	
	question.span=document.createElement("span");
	answer1.input=document.createElement("input");
	answer1.span=document.createElement("span");
	answer2.input=document.createElement("input");
	answer2.span=document.createElement("span");
	answer3.input=document.createElement("input");
	answer3.span=document.createElement("span");
	answer4.input=document.createElement("input");
	answer4.span=document.createElement("span");
	
	answer1.input.setAttribute("type","radio");
	answer2.input.setAttribute("type","radio");
	answer3.input.setAttribute("type","radio");
	answer4.input.setAttribute("type","radio");
	
	answer1.input.setAttribute("name",qNumber);
	answer1.input.setAttribute("value","1");
	answer2.input.setAttribute("name",qNumber);
	answer2.input.setAttribute("value","2");
	answer3.input.setAttribute("name",qNumber);
	answer3.input.setAttribute("value","3");
	answer4.input.setAttribute("name",qNumber);
	answer4.input.setAttribute("value","4");
	qNumber++;
	
	question.text=document.createTextNode(q.question);
	answer1.text=document.createTextNode(q.answer1);
	answer2.text=document.createTextNode(q.answer2);
	answer3.text=document.createTextNode(q.answer3);
	answer4.text=document.createTextNode(q.answer4);
	
	question.span.appendChild(question.text);
	answer1.span.appendChild(answer1.text);
	answer2.span.appendChild(answer2.text);
	answer3.span.appendChild(answer3.text);
	answer4.span.appendChild(answer4.text);
	
	test.appendChild(form);
	form.appendChild(question.span);
		form.appendChild(br.cloneNode());
	form.appendChild(answer1.input);
	form.appendChild(answer1.span);
		form.appendChild(br.cloneNode());
	form.appendChild(answer2.input);
	form.appendChild(answer2.span);
		form.appendChild(br.cloneNode());
	form.appendChild(answer3.input);
	form.appendChild(answer3.span);
		form.appendChild(br.cloneNode());
	form.appendChild(answer4.input);
	form.appendChild(answer4.span);
		form.appendChild(br.cloneNode());
}

function check()
{
	for(i=0;i<rightAnswers.length;i++)
	{
		if	(!!document.querySelector('input[name="'+(i+1)+'"]:checked'))
		{
			if (document.querySelector('input[name="'+(i+1)+'"]:checked').value==rightAnswers[i])
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
