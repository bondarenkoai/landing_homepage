import imgLogo from '../images/logo.png';

function createMarkup() {
    return `

    <div class="modal-wrapper--login">
                <div class="modal-wrapper--blur"></div>
                <div class="modal-wrapper--content">

                    <button class="modal-btn" data-modal-login-close>
                        <svg width="20" height="20">
                            // <use href="/icons.svg#cross"></use>
                            <use href="/icons.adfc4680.svg#cross"></use>
                        </svg>
                    </button>

                    <div class="modal-form--login">
                        <div class="logo form-login__logo">
                            <a href="./index.html" target="_blank">
                                <img src="${imgLogo}" alt="logo" class="logo__img" />
                            </a>
                        </div>
                        <h2 class="form-login__title">Welcome Back</h2>
                        <form class="form-login" name="form-login">
                            <label class="form-login__group">
                                <input class="form-login__input" type="email" name="user-mail" placeholder="email@..">
                                <span class="form-login__label">Email Address</span>
                            </label>

                            <label class="form-login__group">
                                <input class="form-login__input" type="password" name="user-name"
                                    placeholder="your password..">
                                <span class="form-login__label">Password</span>
                            </label>
                        </form>

                        <button class="button form-login__btn ">Login</button>

                        <p class="form-login__text">Don't have an account yet?
                            <a role="button" class="form-login__text--link">
                                <b data-modal-signup-open data-modal-login-close>Sign up</b>
                            </a>
                        </p>
                        <p class="form-login__desc"> or </p>
                        <p class="form-login__link">login with <a href="https://www.facebook.com/login.php/"
                                target="_blank">facebook</a></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Backdrop /// +"_backdrop--signup.scss"  -->

        <div class="backdrop__signup is-hidden" data-modal-signup>
            <div class="modal-wrapper--signup">
                <div class="modal-wrapper--blur"></div>
                <div class="modal-wrapper--content">

                    <button class="modal-btn" data-modal-signup-close>
                        <svg width="20" height="20">
                            // <use href="/icons.svg#cross"></use>
                            <use href="/icons.adfc4680.svg#cross"></use>
                        </svg>
                    </button>

                    <div class="modal-form--login">
                        <div class="logo form-login__logo">
                            <a href="./index.html" target="_blank">
                                <img src="${imgLogo}" alt="logo" class="logo__img" />
                            </a>
                        </div>
                        <h2 class="form-login__title">Sign Up</h2>
                        <form class="form-login" name="form-login">
                            <label class="form-login__group">
                                <input class="form-login__input" type="name" name="user-name" placeholder="your name..">
                                <span class="form-login__label">Name</span>
                            </label>
                            <label class="form-login__group">
                                <input class="form-login__input" type="email" name="user-mail" placeholder="email@..">
                                <span class="form-login__label">Email Address</span>
                            </label>
                            <label class="form-login__group">
                                <input class="form-login__input" type="password" name="user-name"
                                    placeholder="your password..">
                                <span class="form-login__label">Password</span>
                            </label>
                            <label class="form-login__group">
                                <input class="form-login__input" type="password" name="user-name"
                                    placeholder="your password..">
                                <span class="form-login__label">Retype Password</span>
                            </label>
                        </form>

                        <button class="button form-login__btn ">Sign Up</button>

                        <p class="form-login__desc"> or </p>
                        <p class="form-login__link">login with <a href="https://www.facebook.com/login.php/"
                                target="_blank">facebook</a></p>
                    </div>
                </div>
            </div>

    `;
}

export { createMarkup };
