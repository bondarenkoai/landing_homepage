function n(n,o,e,l){Object.defineProperty(n,o,{get:e,set:l,enumerable:!0,configurable:!0})}function o(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},s=e.parcelRequired7c6;null==s&&((s=function(n){if(n in l)return l[n].exports;if(n in a){var o=a[n];delete a[n];var e={id:n,exports:{}};return l[n]=e,o.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,o){a[n]=o},e.parcelRequired7c6=s),s.register("kyEFX",(function(o,e){var l,a;n(o.exports,"register",(function(){return l}),(function(n){return l=n})),n(o.exports,"resolve",(function(){return a}),(function(n){return a=n}));var s={};l=function(n){for(var o=Object.keys(n),e=0;e<o.length;e++)s[o[e]]=n[o[e]]},a=function(n){var o=s[n];if(null==o)throw new Error("Could not resolve bundle with id "+n);return o}})),s.register("bTcpz",(function(n,e){var l=s("dTQoQ");document.querySelector(".backdrop__login").innerHTML=`\n\n    <div class="modal-wrapper--login">\n                <div class="modal-wrapper--blur"></div>\n                <div class="modal-wrapper--content">\n\n                    <button class="modal-btn" data-modal-login-close>\n                        <svg width="20" height="20">\n                            // <use href="/icons.svg#cross"></use>\n                            <use href="/icons.adfc4680.svg#cross"></use>\n                        </svg>\n                    </button>\n\n                    <div class="modal-form--login">\n                        <div class="logo form-login__logo">\n                            <a href="./index.html" target="_blank">\n                                <img src="${o(l)}" alt="logo" class="logo__img" />\n                            </a>\n                        </div>\n                        <h2 class="form-login__title">Welcome Back</h2>\n                        <form class="form-login" name="form-login">\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="email" name="user-mail" placeholder="email@..">\n                                <span class="form-login__label">Email Address</span>\n                            </label>\n\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="password" name="user-name"\n                                    placeholder="your password..">\n                                <span class="form-login__label">Password</span>\n                            </label>\n                        </form>\n\n                        <button class="button form-login__btn ">Login</button>\n\n                        <p class="form-login__text">Don't have an account yet?\n                            <a role="button" class="form-login__text--link">\n                                <b data-modal-signup-open data-modal-login-close>Sign up</b>\n                            </a>\n                        </p>\n                        <p class="form-login__desc"> or </p>\n                        <p class="form-login__link">login with <a href="https://www.facebook.com/login.php/"\n                                target="_blank">facebook</a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        \x3c!-- Backdrop /// +"_backdrop--signup.scss"  --\x3e\n\n        <div class="backdrop__signup is-hidden" data-modal-signup>\n            <div class="modal-wrapper--signup">\n                <div class="modal-wrapper--blur"></div>\n                <div class="modal-wrapper--content">\n\n                    <button class="modal-btn" data-modal-signup-close>\n                        <svg width="20" height="20">\n                            // <use href="/icons.svg#cross"></use>\n                            <use href="/icons.adfc4680.svg#cross"></use>\n                        </svg>\n                    </button>\n\n                    <div class="modal-form--login">\n                        <div class="logo form-login__logo">\n                            <a href="./index.html" target="_blank">\n                                <img src="${o(l)}" alt="logo" class="logo__img" />\n                            </a>\n                        </div>\n                        <h2 class="form-login__title">Sign Up</h2>\n                        <form class="form-login" name="form-login">\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="name" name="user-name" placeholder="your name..">\n                                <span class="form-login__label">Name</span>\n                            </label>\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="email" name="user-mail" placeholder="email@..">\n                                <span class="form-login__label">Email Address</span>\n                            </label>\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="password" name="user-name"\n                                    placeholder="your password..">\n                                <span class="form-login__label">Password</span>\n                            </label>\n                            <label class="form-login__group">\n                                <input class="form-login__input" type="password" name="user-name"\n                                    placeholder="your password..">\n                                <span class="form-login__label">Retype Password</span>\n                            </label>\n                        </form>\n\n                        <button class="button form-login__btn ">Sign Up</button>\n\n                        <p class="form-login__desc"> or </p>\n                        <p class="form-login__link">login with <a href="https://www.facebook.com/login.php/"\n                                target="_blank">facebook</a></p>\n                    </div>\n                </div>\n            </div>\n\n    `,(()=>{const n={openModalBtn:document.querySelector("[data-modal-login-open]"),closeModalBtn:document.querySelector("[data-modal-login-close]"),modal:document.querySelector("[data-modal-login]"),backdrop:document.querySelector(".backdrop__login")};function o(){n.modal.classList.toggle("is-hidden"),n.backdrop.classList.toggle("is-visible")}n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o),n.backdrop.addEventListener("click",(function(e){e.target===n.backdrop&&o()}))})(),(()=>{const n={openModalBtn:document.querySelector("[data-modal-signup-open]"),closeModalBtn:document.querySelector("[data-modal-signup-close]"),modal:document.querySelector("[data-modal-signup]"),backdrop:document.querySelector(".backdrop__signup")};function o(){n.modal.classList.toggle("is-hidden"),n.backdrop.classList.toggle("is-visible")}n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o),n.backdrop.addEventListener("click",(function(e){e.target===n.backdrop&&o()}))})()})),s.register("dTQoQ",(function(n,o){n.exports=new URL(s("kyEFX").resolve("bdUzN"),import.meta.url).toString()})),s("kyEFX").register(JSON.parse('{"Ujaud":"blog.9feb7490.js","bdUzN":"logo.10152b12.png"}')),s("bTcpz");
//# sourceMappingURL=blog.9feb7490.js.map
