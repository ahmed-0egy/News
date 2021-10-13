let home = document.getElementById('home');
let news = document.getElementById('news');
let about = document.getElementById('about');
let add = document.getElementById('add');

home.addEventListener('click', ()=>{
    window.location.href = '/';
});

news.addEventListener('click', ()=>{
    window.location.href = '/egnews';
});

about.addEventListener('click', ()=>{
    window.location.href = '/about';
});

add.addEventListener('click', ()=>{
    window.location.href = '/allnews';
});