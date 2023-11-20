const core = document.querySelectorAll(".stats")
const strat = document.querySelectorAll(".strategy")
const cards = document.querySelectorAll(".cards")
const charChoice = document.getElementById('charChoice')



document.getElementById('alice').onclick = aliceStats
document.getElementById('sinbad').onclick = sinbadStats
document.getElementById('medusa').onclick = medusaStats
document.getElementById('arthur').onclick = arthurStats
for(let i = 0; i <= document.querySelectorAll('.coreButton').length - 1; i++) {
	document.querySelectorAll('.coreButton')[i].onclick = coreShow
}
for(let i = 0; i <= document.querySelectorAll('.stratButton').length - 1; i++) {
	document.querySelectorAll('.stratButton')[i].onclick = stratShow
}
for(let i = 0; i <= document.querySelectorAll('.cardsButton').length - 1; i++) {
	document.querySelectorAll('.cardsButton')[i].onclick = cardShow
}
document.getElementById('logo').onclick = homePage


function aliceStats() {
	document.querySelector('body').style.background = 'deepSkyBlue'
	document.querySelector('.appContainer').style.display = 'none'
	document.querySelector('#aliceStats').classList.remove('hidden')
	document.getElementById('aliceMain').classList.remove('hidden')
	charChoice.style.display = 'block'
} 
function sinbadStats() {
	document.querySelector('body').style.background = 'orange'
	document.querySelector('.appContainer').style.display = 'none'
	document.querySelector('#sinbadStats').classList.remove('hidden')
	document.getElementById('sinbadMain').classList.remove('hidden')
	charChoice.style.display = 'block'
} 
function medusaStats() {
	document.querySelector('body').style.background = 'green'
	document.querySelector('.appContainer').style.display = 'none'
	document.querySelector('#medusaStats').classList.remove('hidden')
	document.getElementById('medusaMain').classList.remove('hidden')
	charChoice.style.display = 'block'
}
function arthurStats() {
	document.querySelector('body').style.background = 'red'
	document.querySelector('.appContainer').style.display = 'none'
	document.querySelector('#arthurStats').classList.remove('hidden')
	document.getElementById('arthurMain').classList.remove('hidden')
	charChoice.style.display = 'block'
}
function coreShow() {
	if (document.getElementById('aliceStats').style.display != 'none') {
		document.getElementById('aliceMain').classList.remove('hidden')
		document.getElementById('aliceStrats').classList.add('hidden')
		document.getElementById('aliceCards').classList.add('hidden')
	} else if (document.getElementById('sinbadStats').style.display != 'none') {
		document.getElementById('sinbadMain').classList.remove('hidden')
		document.getElementById('sinbadStrats').classList.add('hidden')
		document.getElementById('sinbadCards').classList.add('hidden')
	} else if (document.getElementById('medusaStats').style.display != 'none') {
		document.getElementById('medusaMain').classList.remove('hidden')
		document.getElementById('medusaStrats').classList.add('hidden')
		document.getElementById('medusaCards').classList.add('hidden')
	} else if (document.getElementById('arthurStats').style.display != 'none') {
		document.getElementById('arthurMain').classList.remove('hidden')
		document.getElementById('arthurStrats').classList.add('hidden')
		document.getElementById('arthurCards').classList.add('hidden')
	}


}
function stratShow() {
	if (document.getElementById('aliceStats').classList != 'charPage hidden') {
		document.getElementById('aliceStrats').classList.remove('hidden')
		document.getElementById('aliceMain').classList.add('hidden')
		document.getElementById('aliceCards').classList.add('hidden')
	} else if (document.getElementById('sinbadStats').classList != 'charPage hidden') {
		document.getElementById('sinbadStrats').classList.remove('hidden')
		document.getElementById('sinbadMain').classList.add('hidden')
		document.getElementById('sinbadCards').classList.add('hidden')
	} else if (document.getElementById('medusaStats').classList != 'charPage hidden') {
		document.getElementById('medusaStrats').classList.remove('hidden')
		document.getElementById('medusaMain').classList.add('hidden')
		document.getElementById('medusaCards').classList.add('hidden')
	} else if (document.getElementById('arthurStats').classList != 'charPage hidden') {
		document.getElementById('arthurStrats').classList.remove('hidden')
		document.getElementById('arthurMain').classList.add('hidden')
		document.getElementById('arthurCards').classList.add('hidden')
	}


}
function cardShow() {
if (document.getElementById('aliceStats').classList != 'charPage hidden') {
		document.getElementById('aliceCards').classList.remove('hidden')
		document.getElementById('aliceMain').classList.add('hidden')
		document.getElementById('aliceStrats').classList.add('hidden')
	} else if (document.getElementById('sinbadStats').classList != 'charPage hidden') {
		document.getElementById('sinbadCards').classList.remove('hidden')
		document.getElementById('sinbadMain').classList.add('hidden')
		document.getElementById('sinbadStrats').classList.add('hidden')
	} else if (document.getElementById('medusaStats').classList != 'charPage hidden') {
		document.getElementById('medusaCards').classList.remove('hidden')
		document.getElementById('medusaMain').classList.add('hidden')
		document.getElementById('medusaStrats').classList.add('hidden')
	} else if (document.getElementById('arthurStats').classList != 'charPage hidden') {
		document.getElementById('arthurCards').classList.remove('hidden')
		document.getElementById('arthurMain').classList.add('hidden')
		document.getElementById('arthurStrats').classList.add('hidden')
	}
}

function homePage() {
	document.querySelector('.appContainer').style.display = 'flex'
	charChoice.style.display = 'none'
	document.querySelector('body').style.background = 'slateGrey'
	//strat.classList.add('hidden')
	//core.classList.add('hidden')
	//cards.classList.add('hidden')
	for(let i = 0; i <= document.querySelectorAll('.charPage').length - 1; i++) {
	document.querySelectorAll('.charPage')[i].classList.add("hidden")
}
	for(let i = 0; i <= document.querySelectorAll('.stats').length - 1; i++) {
	document.querySelectorAll('.stats')[i].classList.add("hidden")
}
	for(let i = 0; i <= document.querySelectorAll('.strategy').length - 1; i++) {
	document.querySelectorAll('.strategy')[i].classList.add("hidden")
}
	for(let i = 0; i <= document.querySelectorAll('.cards').length - 1; i++) {
	document.querySelectorAll('.cards')[i].classList.add("hidden")
}

}

const charList = [aliceStats, sinbadStats, medusaStats, arthurStats]


function randomChar() {
 const characterGrab = Math.floor(Math.random() * charList.length)
 const executeRandom = charList[characterGrab]
 executeRandom()
} 

document.querySelector('.randomCharacter').onclick = randomChar