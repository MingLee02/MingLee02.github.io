const showAll = function() {
	const ids = document.querySelectorAll('*[id]:not(#portfolio)');
    ids.forEach( id => { id.style.display = '' })
}

const filterWork = function (clickedId) {
	const ids = document.querySelectorAll('*[id]:not(#portfolio)');
	ids.forEach( id => { id.id === clickedId ? id.style.display = '' : id.style.display = 'none' })
}
