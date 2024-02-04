import postImageArray from '../../images/post/post-img-arr';

const postSection = document.querySelector('.post');

function createMarkup({ id, src, alt, title, description }) {
    let markup = `
       <img class="post__img" src="${src}" alt="${alt}">
            <div class="container post__position">
                <h4 class="post__subtitle">EXCURSIONS No.${id}</h4>
                <h2 class="post__title">${title}</h2>
                <p class="post__text">${description}</p>
            </div>
    `;

    return markup;
}

postImageArray.forEach(post => {
    const markup = createMarkup(post);
    postSection.innerHTML += markup;
});
