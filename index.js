var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'),
	render : 'svg',
	loo : true,
	autoplay : true,
	path : 'uno.json'
})

var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm2'),
	render : 'svg',
	loo : true,
	autoplay : true,
	path : 'dos.json'
})

document.addEventListener('load',(e)=>{
	document.getElementById('loader').classList.remove('cargando')
})