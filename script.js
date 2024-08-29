const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


