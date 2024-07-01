//your JS code here. If required.
const outputDiv = document.getElementById("output");
const inputValue = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click", delayOutput);

async function delayOutput(e) {
	e.preventDefault;
  return await setTimeout(()=>{
		outputDiv.innerHTML = inputValue.target.value;
	}, delay.target.value);
}
