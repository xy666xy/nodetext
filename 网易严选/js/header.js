$(function () {
    setInterval(function () {
        $(".yx").animate({
            "top": -36
        }, function () {
            $(this).css("top", 0)
        })

    }, 4000)
    var num = 0

    setInterval(function () {
        num++
        if (num == 4) {
            num = 1
            $(".hotKeywordList").css("top", 0)
        }
        $(".hotKeywordList").animate({
            "top": -num * 36
        })

    }, 3000)

    $.ajax({
        "url": "../json/1.json",
        "type": "GET",
        "dateType": "json",
        "data": "",
        "async": true

    }).done(function (str) {

        var list1 = str[0].list
        //    console.log(list1)
        $.each(list1, function (i) {
            $(` <li class="yx-cp-tabNav-item" onclick="javascript:window.open('aboutxiaoniao.html?${list1[i].id}');" data='${list1[i].id}'>${list1[i].name} 
            <div class="header-ul ${"header-ul"+i} "style="display:none"></div></li>`).appendTo(".header-bottom")
            if (i <= 7) {
                var list2 = str[0].list[i].list1
    
                $.each(list2, function (j) {
                    $(`  <div class="yx-cp-cateGroup" style="width:124px;">
         <div class="yx-cp-cateGroup-name yx-f-text-overflow" style="max-width:124px;width:124px;">${list2[j].p}
         </div>
         <div class="yx-f-clearfix ${'kl'+j}">
         </div>
         </div>`).appendTo($(".header-ul" + i))
            //    console.log(j)
                    // var list3 = list2[j].list2
        //             $.each(list3, function (l) {
        //                 $(`  <div class="yx-cp-cateItem">
        //      <div class="img">
        //          <img class="yx-cp-subCate-icon" src="${list3[l].img}">
        //      </div> 
        //      <span class="span">${list3[l].p1}</span>
        //  </div>`).appendTo($(".kl" + j))
        //             })
        // console.log(list3)
                
                })
           
                // $.each(function(){

                // })
    
            }
        })


        $(".yx-cp-tabNav-item").hover(function () {
            var sum=parseInt($(this).attr("data")) 
            
            if(sum<=7){
                $(this).children(".header-ul").css("display", "block")
            }
           
           
        }, function () {

            $(this).children(".header-ul").css("display", "none")
        })
    })
   // 固定头部 
   $(window).scroll(function(event){
    var scroll=$(this).scrollTop()
    if(scroll>200){
      $(".yx-cp-m-funcTab").css("display","block")
      $("#header-bottom7").css("display","none")
 
     }else{
         $(".yx-cp-m-funcTab").css("display","none")
         $("#header-bottom7").css("display","block")
       
     }
 });
})