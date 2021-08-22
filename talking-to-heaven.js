let btnRandom = document.querySelector('button');
let result = document.querySelector('h3');


let users = [
	"Although you may not understand it now, everything happens for a reason.",
	"As a soul, I can be in several places at once.",
	"Belive it yourself - you can do it.",
	"Don't be afraid.",
	"I always give you a good-night kiss.",
	"I am here helping you.",
	"I am just a thought away.",
	"I am learning over here.",
	"I am not dead.",
	"I am so much better now.",
	"I am sorry; please forgive me.",
	"I am standing right next to you.",
	"I am surrounded by loving animals.",
	"I am with the rest of the family,",
	"I feel healthy and happy.",
	"If I had only known then what I know now, I would have lived differently.",
	"I had to leave that way.",
	"I have a new understanding.",
	"I have become one of your guides.",
	"I have no more earthly worries.",
	"I see all of your thoughts.",
	"I send you all loving signs through nature.",
	"It is beautiful where I am.",
	"It is not your fault.",
	"It was my time to go.",
	"I was met by so many loving people.",
	"I watch over you every day.",
	"I will always point you in the right direction.",
	"I wish I had told you more often how much I love you.",
	"Life is a series of choices.  Choose love.",
	"My death was painless.  Please don't worry or hold on to guilt.",
	"My mind is free.",
	"Now I have no pain.",
	"Remember me by the happy memories we created.",
	"Tears cleanse the soul.",
	"The earth is our school.",
	"There is no such thing as death.",
	"There is no time where I am. Time is only on the earth.",
	"We are so connected.",
	"We are soul mates.",
	"We have been together in dreams.",
	"We will be together again.",
	"You are never alone.",
	"You have nothing to feel guity about."
	];
	
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});