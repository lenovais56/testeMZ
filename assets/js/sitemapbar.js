let btnSitemap = document.getElementById('btn__sitemap');
let sitemapBar = document.getElementById('sitemap-bar');
let btnSitemapClose = document.getElementById('sitemap--close');

btnSitemap.addEventListener('click', function() {
    if(sitemapBar.classList.contains('sitemapbar__open')==false){
        sitemapBar.classList.add('sitemapbar__open');
    }
});

btnSitemapClose.addEventListener('click', function() {
    if(sitemapBar.classList.contains('sitemapbar__open')==true){
        sitemapBar.classList.remove('sitemapbar__open');
    }
});