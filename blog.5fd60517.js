!function(){var e=[{id:1,src:src="https://player.vimeo.com/progressive_redirect/playback/776933578/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=14ab3d26f88c93a78b0ea36f3def144b050a16ab5c62d36ccb4a1a643a3569a4",alt:"Video load error. Sorry!",description:"Perfectible Hills ",place:"Kyiv, Ukraine"},{id:2,src:src="https://player.vimeo.com/external/453089535.sd.mp4?s=160c61215b295c634d6d25fbab1f53b0939b8408&profile_id=164&oauth2_token_id=57447761",alt:"Video load error. Sorry!",description:"Perfectible Hills ",place:"Kharkiv, Ukraine"},{id:3,src:src="https://player.vimeo.com/progressive_redirect/playback/689198918/rendition/360p?loc=external&oauth2_token_id=57447761&signature=3413d16ada0a85555e1606fd3748cb266746a76659ea2c72e9f93835fdba4099",description:"Perfectible Hills ",place:"Carpathian, Ukraine"},{id:4,src:src="https://player.vimeo.com/progressive_redirect/playback/731352068/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=5d7937e94e6c8e4e63f77b172221948893457bc14e102a40f890c2f3212766dc",alt:"Video load error. Sorry!",description:"Opera House in Lviv",place:"Lviv, Ukraine"},{id:5,src:src="https://player.vimeo.com/external/614709914.sd.mp4?s=0686c1f9be4d106e56d0e223007c54fb558f22b8&profile_id=164&oauth2_token_id=57447761",alt:"Video load error. Sorry!",description:"Beautiful Odessa Theater",place:"Odesa, Ukraine"}];console.log(e);var r,c=document.querySelector(".carousel"),a=document.querySelectorAll(".blog__years .years__item"),i=(r=Math.random(),Math.floor(r*e.length));function o(){a.forEach((function(e,r){r===i?e.classList.add("active"):e.classList.remove("active")}))}function t(r){i=(i+r+e.length)%e.length,s(),o()}var n=document.querySelector("#next"),l=document.querySelector("#prev");function s(){var r,a,o;c.innerHTML=(a=e[r=i],o=e[(r+1)%e.length],'\n        <div class="carousel__item">\n            <video class="carousel__video" src="'.concat(e[(r-1+e.length)%e.length].src,'" loop muted height="100%"></video>\n        </div>\n        <div class="carousel__item active">\n            <video class="carousel__video active" src="').concat(a.src,'" autoplay loop muted height="100%"></video>\n            <div class="carousel__caption">\n                <h3 class="carousel__description">').concat(a.description,'</h3>\n                <p class="carousel__place">').concat(a.place,'</p>\n            </div>\n        </div>\n        <div class="carousel__item">\n            <video class="carousel__video" src="').concat(o.src,'" loop muted height="100%"></video>\n        </div>\n    '))}n.addEventListener("click",(function(){return t(1)})),l.addEventListener("click",(function(){return t(-1)})),s(),o();var d=document.getElementById("volume-slider");d.addEventListener("input",(function(){var e=d.value/100;document.querySelector(".carousel__item.active video").volume=e}))}();
//# sourceMappingURL=blog.5fd60517.js.map