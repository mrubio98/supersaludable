Vue.component('custom-header',{
    template: `<header>
        <h1><a href="index.html">Super Saludable</a></h1>
        <nav>
            <ul id="navbar"> 
                <li><a href="index.html">
                    <img src="img/home_black_24dp.svg">
                    Home
                </a></li>
                <li><a href="aboutUs.html">
                    <img src="img/info_black_24dp.svg">
                    About Us
                </a></li>
                <li><a href="contacto.html">
                    <img src="img/question_answer_black_24dp.svg">
                    Contacto
                </a></li>
            </ul>
        </nav>
        </header>`
});

var header  = new Vue({ el: '#header' });

Vue.component('custom-footer',{
    template: `
    <footer>
        <div>
            <p>Visite nuestras redes sociales.</p>
            <div class="icons">
                <a href="https://twitter.com/?lang=es" target="_blanck"><img class="social_icon" src="img/104501_twitter_bird_icon.svg" alt="twitter icon"></a>
                <a href="https://www.instagram.com/?hl=es" target="_blanck"><img class="social_icon" src="img/1161953_instagram_icon.svg" alt="twitter icon"></a>
                <a href="https://es-la.facebook.com/" target="_blanck"><img class="social_icon" src="img/2959749_facebook_icon.svg" alt="twitter icon"></a>
            </div>
        </div>
    </footer>`
});

 var footer  = new Vue({ el: '#footer' });
