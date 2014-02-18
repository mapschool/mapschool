var headers = document.querySelectorAll('h2, h3, h4');

for (var i = 0; i < headers.length; i++) {
    headers[i].id = headers[i].innerHTML
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/[^\w]/g, '-');
}
