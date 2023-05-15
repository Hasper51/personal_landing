
const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.cartoon_preview');
let modalInner = document.querySelector('.modal_inner');

// buttonsModal.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         modalWindow.classList.add('active')
//         let video = `<div class="player"><video id="my_video" onclick="this[this.paused ? 'play' : 'pause']()" controls width="100%" height="auto" poster="../cartoons/posters/${index+1}.png" autoplay preload="none"><source src="../cartoons/media/${index+1}.webm" type="video/webm"></video></div>`
//         modalWindow.innerHTML = video
//         // modalInner.insertAdjacentHTML('afterBegin', video);
//         // modalInner.appendChild = `<video controls width="100%" height="auto" poster="../cartoons/posters/${index+1}.png" preload="none"><source src="../cartoons/media/${index+1}.webm" type="video/webm"></video>`

        
//     })
// })

modalWindow.addEventListener('click', () => {
    document.querySelector('#my_video').pause()
})