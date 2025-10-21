const lightbox = document.getElementByld('lightbox');
const imagenAmpliada = document.getElementByld('imagen-ampliada');
const caption = document.getElementByld('caption');
const cerrar = document.querySelector('.cerrar');
const imagenes = document.querySelectorAll('.galeria.img');

imagenes.forEach(img=>{
	img.addEventListener('click', ()=>{
		lightbox.style.display='block';
		imagenAmpliada.src = img.src;
		caption.textContent = img.alt;
	});

});

cerrar.addEventListener('click',() => {
	lightbox.style.display = 'none';
});