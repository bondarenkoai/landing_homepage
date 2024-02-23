import {
    firstNumber,
    secondNumber,
    handleClick,
} from './background/changeBgImage';
import changeNavLinkColor from './background/changeNavLink';
import handleScrollLink from './background/handleScrollLink';

import { createMarkup } from './modalMarkup';

const backdropLogin = document.querySelector('.backdrop__login');
backdropLogin.innerHTML = createMarkup();

AOS.init();
