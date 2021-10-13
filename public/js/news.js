const default_src = '../images/error.jpg';
function handleError(image) {
    if (!image.complete || !image.naturalHeight)
        image.src = default_src;
}