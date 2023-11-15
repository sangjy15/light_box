// 인디케이터 초기화
var indicator = document.querySelectorAll('.indicator button');
var lightbox = document.querySelector('#lightbox');
var block = document.querySelector('#block');

// 라이트 박스 표시
function lightbox_open(num) {
    var lightbox1 = document.querySelector('#lightbox');
    console.log(lightbox1);
    lightbox1.setAttribute('class', 'active');
    block.setAttribute('class', 'active');

    change_img(num);
    indicator[num-1].focuse();
}

// 라이트 박스 닫기
function lightbox_close() {
    var lightbox1 = document.querySelector('#lightbox');
    lightbox1.removeAttribute('class');
    block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val) {
    let imgs = document.querySelectorAll('figure > img');

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].removeAttribute('class');
    }
    imgs[val-1].setAttribute('class', 'active');
}