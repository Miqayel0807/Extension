const init = function () {
    const firstElement = document.querySelector('div')
    const element = document.createElement("iframe");
    element.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMeta&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=681387392879540"
    element.allowFullscreen = true
    element.className = "facebook";
    firstElement.prepend(element)
};

init()
