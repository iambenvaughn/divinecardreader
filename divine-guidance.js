let btnRandom = document.querySelector('button');
let result = document.querySelector('h3');


let users = [
	"A REMINDER TO CARE FOR YOUR BODY IS GIVEN.",  // 1
	"A RESET OR CLEANSING OF MIND AND SPIRIT IS NEEDED.",  // 2
	"A TWO-WAY STREET IS NECESSARY AT THIS TIME.",  // 3
	"ACCEPTANCE: IT IS WHAT IT IS. NO REASON. NO CAUSE.",  // 4
	"BALANCE IS NEEDED. PLAN IN ADVANCE.", // 5
	"BE CAUTIOUS OF WHAT YOU SEE AND WHAT YOU HEAR.", // 6
	"BE YOUR TRUE SELF WITH HONESTY AND TRUTH.", // 7
	"BELIEVE IN YOURSELF. POWER COMES FROM WITHIN.", // 8
	"CLEAR AND RECHARGE YOUR ENERGY VIBRATIONS.", //9
	"COMPARE YOUR SITUATION WITH PAST MISTAKES.", // 10
	"COMPARE YOUR SITUATION WITH PROVEN SUCCESSES.", // 11
	"CONNECT WITH YOUR GUIDES AND GUARDIAN ANGELS.", // 12
	"DON\'T BE TOO HARD ON YOURSELF. YOU'RE DOING IT.", // 13
	"DOUBLE BACK. TAKE ANOTHER LOOK.", // 14
	"EVERYTHING IS FINE. ALL IS WELL.", // 15
	"EXPRESS YOUR CREATIVITY. RECREATION. ENJOYMENT.", // 16
	"FEAR GENERATES FEAR. PRACTICE FAITH OVER FEAR.", // 17
	"FIGHT FOR WHAT YOU WANT WITH EXPECTANCY OF SUCCESS AND REWARDS.", // 18
	"FIND YOUR TRIBE. ASSESS FAMILY VALUES.", // 19
	"FINISH SOMETHING TODAY. GET IT DONE.", // 20
	"GET YOUR HANDS DIRTY. DANCE IN THE RAINFALL.", // 21
	"GO FOR IT.  MAKING YOUR DREAMS HAPPEN IS POSSIBLE.", // 22
	"IT\'S A TIME OF ACCEPTING ASSISTANCE.", // 23
	"IT\'S A TIME OF DEVELOPMENT.", // 24
	"IT\'S A TIME OF OFFERING ASSISTANCE.", // 25
	"IT\'S A TIME OF TRANSITION AND TRANSFORMATION.", // 26
	"IT\'S TIME TO FOCUS. GET BUSY.", // 27
	"IT\’S TIME TO REDEFINE YOUR THEORIES. FORGIVE REJECTION.", // 28
	"IT\'S TIME TO TAKE A BREAK. TAKE IT EASY. ENJOY NATURE.", // 29
	"KEEP UNKIND WORDS TO YOURSELF.  KEEPING A SECRET.", // 30
	"LET GO.", // 31
	"LET THE SEARCH FOR KNOWLEDGE BE A PRIORITY.", // 32
	"LET YOUR LIGHT SHINE. BE A GUIDING LIGHT FOR OTHERS.", // 33
	"LOOK BEYOND THE MOMENT. DESPAIR DOESN’T LAST.", // 34
	"LOOK FOR THE BEAUTY IN THIS SITUATION.", // 35
	"LOOK OUT FOR CHALLENGES. MAKE SAFE DECISIONS.", // 36
	"MAKE CHOICES AND DECISIONS WISELY.", // 37
	"MAKING A BREAKTHROUGH IS POSSIBLE AT THIS TIME.", // 38
	"MEDIATION IS BENEFICIAL. LET YOUR MIND PROCESS.", // 39
	"OVERT BEHAVIOR. THERE IS A SENSE OF INCAPABILITY.", // 40
	"RELEASE STRESS AND WORRY. THINGS WILL WORK OUT.", // 41
	"REMINDERS ARE NECESSARY AT THIS TIME.  MAKE A NOTE.", // 42
	"SECURE YOUR SURROUNDINGS, MIND, SPIRIT, AND BODY.",  // 43
	"SEEK ADVICE OR SOLUTIONS WHERE UNCERTAINTY LIES.", // 44
	"SOMEONE HAS YOUR BACK. STAY STRONG. TEAMWORK.", // 45
	"STAY AWARE. BE CONCERNED WITH AND IN ALL DETAILS.", // 46
	"THERE ARE SEASONS OF CHANGE. A NEW BEGINNING.", // 47
	"THERE CAN BE PEACE IN THE MIDST OF DANGER.", // 48
	"THERE IS SOME CONFUSION OR MISUNDERSTANDING.", // 49
	"THERE IS SOMETHING NEW TO LEARN.", // 50
	"THROUGH THE EYES OF CHILD, CHANGE YOUR PERSPECTIVE.", // 51
	"TRUST YOUR INTUITION. IT ALWAYS GUIDES YOU WELL.", // 52
	"UNDERSTANDING DUALITY IS BENEFICIAL.", // 53
	"YOU ARE RIGHT WHERE YOU NEED TO BE AT THIS TIME.", // 54
	"YOUR FEELINGS DO NOT SERVE YOU. CONNECT WITH OTHERS." // 55
	
	// Don't forget to remove the comma after the last entry above!!!
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