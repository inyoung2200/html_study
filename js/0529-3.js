const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener( "click" , dat  );

const $footer = document.querySelector("footer");
$footer.addEventListener( "click" , bo  );

function dat() {
    $popup.style.display = 'none';
}

function bo() {
    $popup.style.display = 'block';
}

//메뉴1에서 '서브메뉴1-2'를 클릭하면 바탕색이 빨간색이 된다
const $subMenu12 = document.querySelector("nav li:first-child a:last-child");

function red() {
    $subMenu12.style.background = 'red';
}

//서브메뉴2-4]를 클릭하면 배경색이 파란색이 된다.
const $subMenu24 = document.querySelector("#blue");

$subMenu24.addEventListener("click" , blue );

function blue() { 
    $subMenu24.style.background = 'blue';
}