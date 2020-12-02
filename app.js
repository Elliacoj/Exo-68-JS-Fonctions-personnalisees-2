function random1() {
    return  Math.trunc(Math.random() * 100);

}

let element = document.getElementsByTagName('p')
for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = random1().toString();
}