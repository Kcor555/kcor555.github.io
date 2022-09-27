/*
========================
      COOL CARDS
========================
*/
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
	card.addEventListener('click', () => {
		removeActive()
		card.classList.add('active')
	})
})

function removeActive() {
	cards.forEach((card) => {
		card.classList.remove('active')
	})
}


/*
========================
      DASHBOARD
========================
*/
const list_item = document.querySelectorAll(".list_item");

list_item.forEach((list_item) => {
	list_item.addEventListener("click", () => {
		removeSelected();
		list_item.classList.add("active");
	});
});

function removeSelected() {
	list_item.forEach((list_item) => {
		list_item.classList.remove("active");
	});
}

/*
========================
     SEARCH WIDGET
========================
*/
const search = document.querySelector('.cool-search');
const input = document.querySelector('.input');
const button = document.querySelector('.cool-search-button');

if (button) {
	button.addEventListener('click', () => {
		search.classList.toggle('active');
		input.focus();
	});
}

/*
========================
   rotate hidden nav
========================
*/

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.rotate-container');

if (open) {
	open.addEventListener('click', () => container.classList.add('show-nav'));
}

if (close) {
	close.addEventListener('click', () => container.classList.remove('show-nav'));
}

/*
========================
   progressing steps
========================
*/

const progress = document.getElementById('progress-bar')
const step = document.querySelectorAll('.step')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentActive = 1

if (next) {
	next.addEventListener('click', () => {
		currentActive++

		if (currentActive > step.length) {
			currentActive = step.length
		}
		refresh()
	})
}

if (prev) {
	prev.addEventListener('click', () => {
		currentActive--

		if (currentActive < 1) {
			currentActive = 1
		}
		refresh()
	})
}

function refresh() {
	step.forEach((step, idx) => {
		if (idx < currentActive) {
			step.classList.add('active')
		} else {
			step.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')

	progress.style.width = (actives.length - 1) / (step.length - 1) * 100 + '%'

	if (currentActive === 1) {
		prev.disabled = true
	} else if (currentActive === step.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}
