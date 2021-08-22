let btnRandom = document.querySelector('button');
let result = document.querySelector('h3');


let users = [	
	'A Year from Now',
	'Abundance',
	'Ask for Help from Others',
	'Ask Your Angels',
	'Be Assertive!',
	'Big, Happy Changes',
	'Choose a New Direction',
	'Communicate Clearly',
	'Compromise',
	'Don\'t Stop!',
	'Forgiveness',
	'Get More lnformation',
	'Helpful People',
	'If You Believe',
	'Improving Health',
	'In the Near Future',
	'You!','Let Go',
	'Listen to Your Intuition',
	'Look for a Sign',
	'Meditation Brings Answers',
	'No ','No!','No Need to Worry',
	'Not the Right Time',
	'Opportunity',
	'Peaceful Resolution',
	'Perfect Timing',
	'Reconsider',
	'Recovery',
	'Remain',
	'Positive',
	'Romance',
	'Success!',
	'Take Action',
	'The Situation Will Improve',
	'There\'s Something Better',
	'Trust',
	'Unlikely',
	'Wait',
	'Within the Next Few Months',
	'Within the Next Few Weeks',
	'Yes',
	'Yes!',
	'You\'re Ready'];

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