const showAll = function() {
    document.getElementById('work').style.display = '';
    document.getElementById('personal').style.display = '';
}

const filterWork = function (clickedId) {
	const ids = document.querySelectorAll('*[id]:not(#portfolio)');

	ids.forEach( id => { if (id.id === clickedId) id.style.display = '' else id.style.display = 'none'})
}
