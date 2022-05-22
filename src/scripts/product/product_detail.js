
document.querySelector('.size_guide .guide_btn')?.addEventListener('click', () => {
    const guideArea = document.querySelector('.size_guide .guide_area')
    guideArea.style.display = 'block'
});
    
document.querySelector('.guide_area .close_btn')?.addEventListener('click', () => {
	const guideArea = document.querySelector('.size_guide .guide_area')
    guideArea.style.display = 'none'
});

Array.from(document.querySelectorAll('.info_toggle .section .tit'))?.forEach(item => {
    item?.addEventListener('click', function () {
        this.closest('.section').classList.toggle('on')
    })
});