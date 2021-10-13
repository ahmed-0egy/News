let every = document.getElementById('every');
let tp = document.getElementById('top');
function check() {
    let everyThing = document.getElementById('every-thing');
    let topHeadlines = document.getElementById('top-headlines');
    console.log(every.checked);
    if (every.checked) {
        topHeadlines.style.display = 'none';
        everyThing.style.display = 'block';
    }
    else {
        topHeadlines.style.display = 'block';
        everyThing.style.display = 'none';
    }
}
every.addEventListener('click', check);
tp.addEventListener('click', check);

const default_src = '../images/error.jpg';
function handleError(image) {
    if (!image.complete || !image.naturalHeight)
        image.src = default_src;
}

let fetchUsers = async () => {
    try {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3');
        const info = await res.json();
        console.log(info);
        const data = info.articles;
        for (let i = 0; i < data.length; ++i) {
            const container = document.getElementById('container');
            const content = `
            <div class="container-card col-lg-6 col-xl-4 col-xxl-3">
                <div class="body-card card h-100">
                    <img src=${data[i].urlToImage} class="card-img-top" alt="Event Image" onerror="handleError(this);">
                    <div class=" card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <h5 class="card-title" style="color:red;">By ${data[i].author}</h5>
                        <p class="card-text">{{this.description}}${data[i].description}</p>
                    </div>
                </div>
            </div>
        `
            container.innerHTML += content;
        }
    }
    catch (e) {
        console.log(e);
    }
}

fetchUsers();

let submit = document.getElementById('search');
console.log(submit);
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    if (every.checked) {
        const title = document.getElementById('title').value;
        const subject = document.getElementById('subject').value;
        const lang = document.getElementById('lang').value;
        console.log(title == '', title);
        console.log(subject == '', subject);
        console.log(lang == '', lang);

    }
    else {
        console.log(document.getElementById('category').value);
        console.log(document.getElementById('keyword').value);
        console.log(document.getElementById('country').value)
    }
});




// console.log('\n--------------------------\n');
// console.log(data[i].source.id);
// console.log(data[i].source.name);
// console.log(data[i].author);
// console.log(data[i].title);
// console.log(data[i].description);
// console.log(data[i].url);
// console.log(data[i].urlToImage);
// console.log(data[i].publishedAt);
// console.log(data[i].content);
// console.log('\n\n\n\n');