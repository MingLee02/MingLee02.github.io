var showAll = function() {
    document.getElementById('work').style.display = '';
    document.getElementById('personal').style.display = '';
}

var filterWork = function (clickedId) {
	var ids = document.querySelectorAll('*[id]');
	var length = ids.length;

	for (var i=0; i < length; i++) {
		if (ids[i].id !== 'portfolio') {
			if (ids[i].id == clickedId) {
				ids[i].style.display = '';
			} else {
				ids[i].style.display = 'none';
			}
	   	}
	}
}
