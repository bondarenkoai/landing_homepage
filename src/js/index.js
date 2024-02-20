import {
    firstNumber,
    secondNumber,
    handleClick,
} from './background/changeBgImage';
import changeNavLinkColor from './background/changeNavLink';
import handleScrollLink from './background/handleScrollLink';
// import modal from './modal';

// import { setupLoginModal, setupSignupModal } from './modal.js';

// setupLoginModal();
// setupSignupModal();

import { createMarkup } from './modalMarkup';

const backdropLogin = document.querySelector('.backdrop__login');
backdropLogin.innerHTML = createMarkup();

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// sliderWrapper.innerHTML = createMarkup(bgImageArray);

AOS.init();

// const iframe = document.querySelector('iframe');

// const options = {
//     id: 24551969,
//     width: 640,
//     loop: true,
//     autoplay: true,
// };

// const player = new Vimeo.Player(iframe, options);

// player.on('play', function () {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });
