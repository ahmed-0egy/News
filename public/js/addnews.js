let every = document.getElementById('every');
let tp = document.getElementById('top');
function check() {
    let everyThing = document.getElementById('every-thing');
    let topHeadlines = document.getElementById('top-headlines');
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

let getNews = async (url) => {
    try {
        const res = await fetch(url);
        const info = await res.json();
        if (info.status == 'error')
            return alert('Error! \n' + info.message); // here I use the return to end the funtion not for returning any value
        if (!info.totalResults)
            return alert('No Matching Results');
        const data = info.articles;
        const container = document.getElementById('container');
        container.innerHTML = '';
        for (let i = 0; i < data.length; ++i) {
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
        alert(e);
    }
}
let submit = document.getElementById('search');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (every.checked) {
        const title = document.getElementById('title').value;
        const subject = document.getElementById('subject').value;
        const lang = document.getElementById('lang').value;
        const url = 'https://newsapi.org/v2/everything?q=' + title + '&qInTitle=' + subject + '&language=' + lang + '&apiKey=3ee3b09d716e4f4cba4885ff308decbf';
        getNews(url);
    }
    else {
        const category = document.getElementById('category').value;
        const keyword = document.getElementById('keyword').value;  
        const country = document.getElementById('country').value;
        const url = 'https://newsapi.org/v2/top-headlines?q=' + keyword + '&category=' + category + '&country=' + country + '&apiKey=3ee3b09d716e4f4cba4885ff308decbf';
        getNews(url);
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