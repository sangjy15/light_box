$(function() {
    // 인디케이터 초기화
    const $indicator = $('.indicator button');
    const $lightbox = $('#lightbox');
    const $block = $('#block');

    // 라이트 박스 표시
    function lightbox_open(num) {
        $lightbox.addClass('active');
        $block.addClass('active');

        change_img(num);
        $indicator.eq(num).focus();
    }

    // 라이트 박스 닫기
    function lightbox_close() {
        $lightbox.removeAttr('class');
        $block.removeAttr('class');
    }

    // 이미지 전환 표시 함수
    function change_img(val) {
        let $imgs = $('figure > img');

        for (let i = 0; i < $imgs.length; i++) {
            $imgs.eq(i).removeAttr('class');
        }
        $imgs.eq(val).attr('class', 'active');
    }

    // 이미지 목록 click 이벤트 | 라이트 박스 열기
    $('img.thumb').click(function() {
        let img_num = $(this).index() - 1;
        lightbox_open(img_num);
    });

    //라이트 박스 닫기 버튼 click 이벤트
    $('.btn-close').click(function(){
        lightbox_close();
    });

    // 인디케이터 클릭 시 click 이벤트 | 라이트 박스 이미지 변경
    $indicator.click(function(){
        let img_num = $(this).index();
        change_img(img_num);
    });

    // 연습문제
    $('.changeImg').click(function() {
        let lastImg = $('.img3').attr('src');
        let firstImg = $('.img1').attr('src');
        $('.img1').attr('src', lastImg);
        $('.img3').attr('src', firstImg);
    });
});


