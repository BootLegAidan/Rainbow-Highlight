let root = document.documentElement;
var color = 0
function rainbow(){
	color++
	if (color > 360){
		color = 0
	}
		root.style.setProperty('--color', `hsl(${color},100%,50%)`)
	requestAnimationFrame(rainbow)
}
rainbow()
