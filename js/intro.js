function goUrl(z){
    //switch문

    switch(z){
        case 'noticeMore':
        location.href = "http://sinsadog.com/?n_media=27758&n_query=%EB%B0%98%EB%A0%A4%EA%B2%AC%EB%B6%84%EC%96%91%EC%82%AC%EC%9D%B4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-01-000000008843989&n_ad=nad-a001-01-000000120377261&n_keyword_id=nkw-a001-01-000001647971272&n_keyword=%EB%B0%98%EB%A0%A4%EA%B2%AC%EB%B6%84%EC%96%91%EC%82%AC%EC%9D%B4%ED%8A%B8&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dklaaqxzk%7Cci%3D0yK0003UR2Pu0EC1I10y%7Ctr%3Dsa%7Chk%3Defc38c1732fcd76656c2944fabcf6f94fbec4516";
        break;
//main1
        case 'main1':
        location.href = "http://sinsadog.com/product/search.html?banner_action=&keyword=%EB%B9%84%EC%88%91%ED%94%84%EB%A6%AC%EC%A0%9C";
        break;
        case 'main1-1':
        window.open("https://terms.naver.com/entry.nhn?docId=4347836&cid=46677&categoryId=46677");
        break;
        case 'main1-2':
        location.href = "https://blog.naver.com/bichon-haru/222207778567";
        break;
        case 'main1-3':
        location.href = "https://blog.naver.com/pet-class/221812459318";
        break;
        case 'main1-4':
        window.open('http://www.healingpet.co.kr/?n_media=27758&n_query=%ED%9E%90%EB%A7%81%ED%8E%AB&n_rank=1&n_ad_group=grp-a001-01-000000006868408&n_ad=nad-a001-01-000000087030605&n_keyword_id=nkw-a001-01-000001274344746&n_keyword=%ED%9E%90%EB%A7%81%ED%8E%AB&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dklabo57c%7Cci%3D0zK00007SMPuRNXa%2DLnA%7Ctr%3Dsa%7Chk%3Dba2c90eaebcf2f2d04f8024b0f2700962a38a574');  
        break;
//main2    
        case 'main2':
        location.href = 'http://sinsadog.com/product/search.html?banner_action=&keyword=%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88';    
        break;
        
        case 'main2-1':
        window.open('https://terms.naver.com/entry.nhn?docId=1977899&cid=42883&categoryId=44356');    
        break;
        case 'main2-2':
        location.href = "https://blog.naver.com/clarclar/222161733724";        
        break;
        case 'main2-3':
        location.href = "https://blog.naver.com/yuranyuran/222220677175";            
        break;
        case 'main2-4':
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=011&type=X');    
        break;
//main3
        case 'main3':
        location.href = 'http://sinsadog.com/product/search.html?banner_action=&keyword=%ED%91%B8%EB%93%A4';    
        break;
        case 'main3-1':
        window.open('https://terms.naver.com/entry.nhn?docId=1977895&cid=42883&categoryId=44356');   
        break;
        case 'main3-2':
        location.href = "https://blog.naver.com/ifthey/222020842186";    
        break;
        case 'main3-3':
        location.href = "https://blog.naver.com/chae1_jang/222098104874";     
        break;
        case 'main3-4':
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=012&type=X');            
        break;
//main4
        case 'main4':
        location.href="http://sinsadog.com/product/search.html?banner_action=&keyword=%EC%B9%98%EC%99%80%EC%99%80";    
        break;
        case 'main4-1':
        window.open("https://terms.naver.com/entry.nhn?docId=989127&cid=46677&categoryId=46677");    
        break;
        case 'main4-2':
        location.href = "https://blog.naver.com/naengmu/222186228051";    
        break;
        case 'main4-3':
        location.href = "https://blog.naver.com/bichon-haru/222242591497";    
        break;
        case 'main4-4':
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=013&type=X');    
        break;
        

        default:
        alert('이 페이지는 찾을수 없습니다. 확인바랍니다.')
    }





    /* if 문
    if( z == 'noticeMore'){
        location.href = "http://sinsadog.com/?n_media=27758&n_query=%EB%B0%98%EB%A0%A4%EA%B2%AC%EB%B6%84%EC%96%91%EC%82%AC%EC%9D%B4%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-01-000000008843989&n_ad=nad-a001-01-000000120377261&n_keyword_id=nkw-a001-01-000001647971272&n_keyword=%EB%B0%98%EB%A0%A4%EA%B2%AC%EB%B6%84%EC%96%91%EC%82%AC%EC%9D%B4%ED%8A%B8&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dklaaqxzk%7Cci%3D0yK0003UR2Pu0EC1I10y%7Ctr%3Dsa%7Chk%3Defc38c1732fcd76656c2944fabcf6f94fbec4516";
    }

    // main1
    else if ( z == 'main1'){
        location.href = "http://sinsadog.com/product/search.html?banner_action=&keyword=%EB%B9%84%EC%88%91%ED%94%84%EB%A6%AC%EC%A0%9C";
    }
    else if ( z == 'main1-1'){
        window.open("https://terms.naver.com/entry.nhn?docId=4347836&cid=46677&categoryId=46677");
    }
    else if ( z == 'main1-2'){
        location.href = "https://blog.naver.com/bichon-haru/222207778567";
    }
    else if ( z == 'main1-3'){
        location.href = "https://blog.naver.com/pet-class/221812459318";
    }
    else if ( z == 'main1-4'){
        window.open('http://www.healingpet.co.kr/?n_media=27758&n_query=%ED%9E%90%EB%A7%81%ED%8E%AB&n_rank=1&n_ad_group=grp-a001-01-000000006868408&n_ad=nad-a001-01-000000087030605&n_keyword_id=nkw-a001-01-000001274344746&n_keyword=%ED%9E%90%EB%A7%81%ED%8E%AB&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dklabo57c%7Cci%3D0zK00007SMPuRNXa%2DLnA%7Ctr%3Dsa%7Chk%3Dba2c90eaebcf2f2d04f8024b0f2700962a38a574');
    }

    // main2
    else if (z == 'main2'){
        location.href = 'http://sinsadog.com/product/search.html?banner_action=&keyword=%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88';
    }
    else if (z == 'main2-1'){
        window.open('https://terms.naver.com/entry.nhn?docId=1977899&cid=42883&categoryId=44356');
    }
    else if (z == 'main2-2'){
        location.href = "https://blog.naver.com/clarclar/222161733724";
    }
    else if (z == 'main2-3'){
        location.href = "https://blog.naver.com/yuranyuran/222220677175";
    }
    else if (z == 'main2-4'){
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=011&type=X');

    }

    // main3
    else if (z == 'main3'){
        location.href = 'http://sinsadog.com/product/search.html?banner_action=&keyword=%ED%91%B8%EB%93%A4';
    }
    else if (z == 'main3-1'){
        window.open('https://terms.naver.com/entry.nhn?docId=1977895&cid=42883&categoryId=44356');
    }
    else if (z == 'main3-2'){
        location.href = "https://blog.naver.com/ifthey/222020842186";
    }
    else if (z == 'main3-3'){
        location.href = "https://blog.naver.com/chae1_jang/222098104874";
    }
    else if (z == 'main3-4'){
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=012&type=X');

    }

    // main4
    else if (z == 'main4'){
        location.href="http://sinsadog.com/product/search.html?banner_action=&keyword=%EC%B9%98%EC%99%80%EC%99%80";
    }
    else if (z == 'main4-1'){
        window.open("https://terms.naver.com/entry.nhn?docId=989127&cid=46677&categoryId=46677");
    }
    else if (z == 'main4-2'){
        location.href = "https://blog.naver.com/naengmu/222186228051";
    }
    else if (z == 'main4-3'){
        location.href = "https://blog.naver.com/bichon-haru/222242591497";
    }
    else if (z == 'main4-4'){
        window.open('http://www.healingpet.co.kr/shop/shopbrand.html?xcode=013&type=X');
    }

    else {
        alert("해당관련글이 없습니다.확인바랍니다!");
        return false;
    }
    */
}
;(function($){
   
    var intro = {
        init:       function(){
            var that = this;

                that.navFn();
                that.mainSlideFn();
                that.noticeFn();
                that.galleryFn();
                that.bannerFn();
                that.familySiteFn();
        },
        navFn:       function(){
            //아코디언 메뉴
            //메인 메뉴(선택자(selector): .main-btn)에 버튼 이벤트(event) 리스너(Listener) 
            //마우스 오버 시(mouseenter) 해당 메뉴에 
            //클래스 추가(addClass('on'))하기전 추가된 모든 클래스(removeClass('on')) 삭제
            //클래스 추가(addClass('on'))하여 스타일을 설정

            //그리고 해당 서브메뉴(선택자(selector): .sub)에 
            //클래스 추가(addClass('on'))하기전 추가된 모든 클래스(removeClass('on')) 삭제
            //클래스 추가(addClass('on'))하여 스타일이 설정 되도록 한다.

            //
            
            //메인버튼 서브버튼 변수 설정
            var $mainBtn = $('#nav .main-btn');
            var $sub = $('#nav .sub');
            var $navUl = $('#nav > ul'); //이 영역을 떠나면 모든 메뉴 초기화
                

                //아코디언 메뉴 
                //메인버튼 이벤트 리스너(핸들러)
                $mainBtn.on({
                    mouseenter:function(){
                        $mainBtn.removeClass('on'); //버튼 모두 추가된 클래스('on');
                        $(this).addClass('on');

                        $sub.removeClass('on');
                        $(this).next().addClass('on');
                    }
                });

                //메인메뉴와 서브메뉴 영역을 떠나면
                $navUl.on({
                    mouseleave:function(){
                        $mainBtn.removeClass('on');
                        $sub.removeClass('on');
                    }
                });

        },
        mainSlideFn: function(){
            //슬라이드 이미지 4개 좌우추가2개 = 총6개   (3 0 1 2 3 0)
            //선택자 : 애니메이션 대상(.slide-wrap)
            //선택자 : 이전 슬라이드버튼 (.prev-btn)
            //선택자 : 다음 슬라이드버튼 (.next-btn)
            //변수   : 카운트 변수 cnt = 0;

            var $slideWrap = $('#section1 .slide-wrap');
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var cnt = 0;

                //1. 메인 슬라이드 함수
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-800*cnt},600, function(){
                        if(cnt>3) cnt=0;     //다음 슬라이드 카운트 
                        if(cnt<0) cnt=3;     //이전 슬라이드 카운트
                        $slideWrap.stop().animate({left:-800*cnt},0); //순간이동 롤링 포인트
                      
                    });
                        
                }   
            

                //2-1. 다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn(); //메인함수 호출
                }

                 //2-2. 이전 슬라이드 카운트 함수
                 function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn(); //메인함수 호출
                }   


                //3-1. 다음 슬라이드 버튼 클릭 이벤트
                $nextBtn.on({
                    click: function(){
                        //연속해서 클릭하면 버블링 발생
                        //디버깅 : 애니메이션이 동작이 안될 때 클릭하도록
                        //제어문 설정(if 조건문)
                        // not = ! 부정문
                        //애니메이션이 안될 때를 !$slideWrap.is(':animated')
                        if( !$slideWrap.is(':animated') ){
                            nextSlideCountFn();
                        }  
                    }
                });

                //3-2. 다음 슬라이드 버튼 클릭 이벤트
                $prevBtn.on({
                    click: function(){
                        if( !$slideWrap.is(':animated')){
                            prevSlideCountFn();
                        }
                    }
                });
            
        },
        noticeFn:    function(){
            var $modal = $('#modal');
            var $noticeBtn = $('#section2 .notice-btn');
            var $noticeText = $('#modal .notice-text');
            var $content = $('#modal .content');
            var n = 0;
            var a = [
                'url(./img/gallery1.jpg)',
                'url(./img/gallery2.jpg)'
            ]
            $noticeBtn.on({
                click:function(event){
                    event.preventDefault();

                    var txt = $(this).text();
                    var tit = $(this).attr('title');

                    $modal.show();
                    $noticeText.text(tit);
                }
            });
            
            $modal.on({
                click:function(event){
                    event.preventDefault();
                    
                    $(this).hide();
                }
            });

            $content.on({
                click:function(event){
                    event.stopPropagation();
                }
            });
        },
        galleryFn:   function(){
            var $modalGallery = $('#modalGallery');
            var $galleryBtn = $('#section2 .gallery-btn');
            var $content = $('#modalGallery .content');
            var n = 0;
            var a = [
                'url(./img/gallery1.jpg)',
                'url(./img/gallery2.jpg)',
                'url(./img/gallery3.jpg)',
                'url(./img/gallery4.jpg)'
                ];

            var len = a.length-1;

            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        n=idx;
                        $modalGallery.stop().fadeIn(500)
                        contentFn();
                    }
                });

            });
            
            function contentFn(){
                $content.css({ 'background-image':a[n] }).stop().fadeOut(0).fadeIn(500);
            }

            $modalGallery.on({
                click:function(){
                    
                    $modalGallery.stop().fadeOut(500);
                }
            });
            
            
            $content.on({
                click:function(event){
                    event.stopPropagation();
                    n++;
                    if(n>len)
                    n=0;
                    contentFn();
                }
            });
           

        },
        bannerFn:    function(){
            
        },
        familySiteFn:function(){
            
            


        }
    };

    intro.init();


})(jQuery);


//Family Site 점프메뉴
function goFamily(z){
    location.href = z;
}