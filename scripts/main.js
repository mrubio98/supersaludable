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

// Vue.component('custom-footer',{
//     template: ``
// });

// var footer  = new Vue({ el: '#footer' });
