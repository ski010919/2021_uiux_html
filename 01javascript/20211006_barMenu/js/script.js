function nowMenu(menu){ // menu = "main"
    if(menu == "main"){
        $(".bar").css("opacity",0) // jquert ver
        console.log("메인연결됨");
    }else{
        $(".menu li").eq(menu).addClass("active") // -> jquert ver
        // document.querySelectorAll(".menu li")[menu].classList.add("active") -> java script ver
        $(".bar").css("left",200*menu)
        console.log("서브페이지")
    }

    // $(".menu li").hover(function(){마우스 갖다댔을때},function(){마우스 뺐을때})
    $(".menu li").hover(function(){
        let menuLi = $(this).index();

        $(this).css("background-color","bisque");

        if(menu == "main"){
            $(".bar").css("opacity",1);
        };
        $(".bar").css("left",200*menuLi)
    },function(){
        $(this).css("background-color","initial");
        if(menu == "main"){ // menu일때
            $(".bar").css("opacity",0)
        }
        $(".bar").css("left",200*menu) // 마우스 빼면 액티브된값으로 원상복구
    });
};

