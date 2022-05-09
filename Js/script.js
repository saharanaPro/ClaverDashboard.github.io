const hambergarMenu = document.querySelector('.Hamburger_Menu');

hambergarMenu.onclick = () => {toggleFun()}


function toggleFun() {
    const navigation = document.querySelector('.navigation_clickable');

    if(navigation.style.display === 'block') {
        navigation.style.display = 'none';
    } 
    else {
        navigation.style.display = 'block';
    }
}

const close = document.querySelector('.close');

close.onclick = () => {toggleFun()}