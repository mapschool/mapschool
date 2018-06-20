var headers = document.querySelectorAll('h2, h3, h4');

for (var i = 0; i < headers.length; i++) {
    // set header id from its content
    headers[i].id = headers[i].innerHTML
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/[^\w]/g, '-');

    // turn header into anchor
    headers[i].innerHTML = headers[i].innerHTML + '<a href="#' + headers[i].id + '" class="header-link"></a>';
}
