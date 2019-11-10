$(function () {
    $("#header").load("./header.html")
    $("#footer").load("./footer.html")
    //大轮播图
    $.ajax({
        "url": "../json/big.json",
        "type": "get",
        "async": true,
        "dataType": "json",
        "data": ""
    }).done(function (str) {

        $.each(str, function (i) {
            $(`
<div class="swiper-slide">
<div class="slid-img">
    <img src="${str[i].img}" alt="">
</div>
</div>
`).appendTo($(".swiper1-wrapper"))

        })
        var swiper1 = new Swiper('.swiper1', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            pagination: {
                el: '.pag1',
                clickable: true,
            },
            navigation: {
                nextEl: '.next1',
                prevEl: '.prev1',
            },
            autoplay: {
                delay: 3000,

                disableOnInteraction: false,
            },

        })
        for (i = 0; i < swiper1.pagination.bullets.length; i++) {
            swiper1.pagination.bullets[i].onmouseover = function () {
                this.click();
            };
        }

    })

    // 品牌制造商
    $.ajax({
        "url": "../json/品牌制造商.json",
        "type": "get",
        "async": true,
        "dataType": "json",
        "data": ""
    }).done(function (str) {
        $.each(str, function (i) {
            $(`<div class="manufacturer">
            <div class="pict" style="width:100%;height:100%;">
            <img
                src="${str[i].img}">
        </div>
        <div class="${str[i].class2}">${str[i].price}</div>
        <div class="${str[i].class1}"><span>${str[i].title}</span>
            <span class="${str[i].class}" data-reactid=".2.2.1.0.$0.1.1">${str[i].span}</span>
        </div> </div>
            `).appendTo($(".manufacturerList"))
        })

    })

    //新品首发
    $.get("../json/首发商品.json", function (data) {

        $.each(data, function (i) {
            $(`
                 <div class="swiper-slide swiper2-slide">
                 </div>
            `).appendTo(".swiper2-wrapper")
            var swi = data[i].list
            $.each(swi, function (l) {
                $(`
                <div class="m-product">
                <div class="hd">
                    <img class="imgSceneblock" src="${this.img}" alt="">
                    <img class="imgScene" src="${this.img1}">
                    <div class="promBanner">
                        <div class="promTitle">
                            <div class="title"><span>${this.title}</span></div>
                            <div class="subTitle"><span style="vertical-align:middle;">${this.price}</span></div>
                        </div>
                        <div class="promContent" >${this.txts}</div>
                    </div>
                </div>
                <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                <div class="bd">
                  
                    <div class="prdtTags"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                    <h4 class="name1" ><span>纯牛奶酸牛奶囤货装</span></h4>
                    <p class="price11" >
                        <span class="retailPrice" >
                                <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                                <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                        </span>
                        <span class="counterPrice"><span>¥</span><span >169</span></span>
                    </p>
                </div>
            </div>
                
                `).appendTo($(".swiper2-slide"))

            })


        })
        var swiper2 = new Swiper('.swiper2', {
            navigation: {
                nextEl: '.next2',
                prevEl: '.prev2',
            },
        });
    })
    //人气推荐
    $.get("../json/人气推荐.json", function (data) {
        $(".showContainer").html("")
        var list = data[0].list;
        $.each(list, function (i) {
            if (i == 0) {
                $(`
              <div class="m-product popularItem" style="background:#fff;box-shadow:none">
              <div class="hd hd-i">
                  <img class="imgSceneblock imgSceneblock1" src="https://yanxuan-item.nosdn.127.net/f28c5db21c4d8aef33176e628ea3c4e2.png?type=webp&quality=95&thumbnail=320x320&imageView" alt="" style="display:block;">
               
                  <div class="promBanner promBanner1">
                      <div class="promTitle">
                          <div class="title"><span>狂欢特惠</span></div>
                          <div class="subTitle"><span style="vertical-align:middle;">¥149</span></div>
                      </div>
                      <div class="promContent" >仅剩13天</div>
                  </div>
              </div>
              <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
              <div class="bd bd1">
                
                  <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                  <h4 class="name1" style="margin: 10px 0 15px;"><span style="font-size: 18px;">纯牛奶酸牛奶囤货装</span></h4>
                  <p class="price11" >
                      <span class="retailPrice" style="font-size:18px">
                              <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                              <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                      </span>
                      <span class="counterPrice" style="font-size: 14px;"><span>¥</span><span >169</span></span>
                  </p>
              </div>
       </div>
              `).appendTo(".showContainer")
            } else if (i > 0) {
                $(`
              <div class="m-product puop" style="background:#fff;box-shadow:none">
              <div class="hd  hd-a">
                  <img class="imgSceneblock imgSceneblock2" src="${this.img}" alt="" style="display:block;">
                  <div class="promBanner">
                      <div class="promTitle">
                          <div class="title"><span>${this.title}</span></div>
                          <div class="subTitle"><span style="vertical-align:middle;">${this.txt}</span></div>
                      </div>
                      <div class="promContent" >${this.txts}</div>
                  </div>
              </div>
              <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
              <div class="bd bbdd">
                
                  <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                  <h4 class="name1" style=""><span style="">${this.tit}</span></h4>
                  <p class="price11" >
                      <span class="retailPrice" style="">
                              <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                              <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                      </span>
                      <span class="counterPrice" style=""><span>¥</span><span >${this.price}</span></span>
                  </p>
              </div>
       </div>
              
              
              `).appendTo(".showContainer")
            }


        })

    })
    $(".item-1").click(function () {
        $(this).css("color", "#b4a078")
        $(this).css("border-bottom", "2px solid #b4a078")
        $(".item-0").css("color", "#000000")
        $(".item-0").css("border-bottom", "2px solid transparent")
        var num = parseInt($(this).attr('data'))
        $.get("../json/人气推荐.json", function (data) {
            $(".showContainer").html("")
            var list = data[num].list;
            $.each(list, function (i) {
                if (i == 0) {
                    $(`
                  <div class="m-product popularItem" style="background:#fff;box-shadow:none">
                  <div class="hd hd-i">
                      <img class="imgSceneblock imgSceneblock1" src="https://yanxuan-item.nosdn.127.net/89171352c82244812b9aec37c21c53df.png?type=webp&quality=95&thumbnail=320x320&imageView" alt="" style="display:block;">
                   
                      <div class="promBanner promBanner1">
                          <div class="promTitle">
                              <div class="title"><span>狂欢特惠</span></div>
                              <div class="subTitle"><span style="vertical-align:middle;">¥149</span></div>
                          </div>
                          <div class="promContent" >仅剩13天</div>
                      </div>
                  </div>
                  <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                  <div class="bd bd1">
                    
                      <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                      <h4 class="name1" style="margin: 10px 0 15px;"><span style="font-size: 18px;">纯牛奶酸牛奶囤货装</span></h4>
                      <p class="price11" >
                          <span class="retailPrice" style="font-size:18px">
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                          </span>
                          <span class="counterPrice" style="font-size: 14px;"><span>¥</span><span >169</span></span>
                      </p>
                  </div>
           </div>
                  `).appendTo(".showContainer")
                } else if (i > 0) {
                    $(`
                  <div class="m-product puop" style="background:#fff;box-shadow:none">
                  <div class="hd  hd-a">
                      <img class="imgSceneblock imgSceneblock2" src="${this.img}" alt="" style="display:block;">
                      <div class="promBanner">
                          <div class="promTitle">
                              <div class="title"><span>${this.title}</span></div>
                              <div class="subTitle"><span style="vertical-align:middle;">${this.txt}</span></div>
                          </div>
                          <div class="promContent" >${this.txts}</div>
                      </div>
                  </div>
                  <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                  <div class="bd bbdd">
                    
                      <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                      <h4 class="name1" style=""><span style="">${this.tit}</span></h4>
                      <p class="price11" >
                          <span class="retailPrice" style="">
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                          </span>
                          <span class="counterPrice" style=""><span>¥</span><span >${this.price}</span></span>
                      </p>
                  </div>
           </div>
                  
                  
                  `).appendTo(".showContainer")
                }


            })

        })


    })
    $(".item-0").click(function () {
        $(this).css("color", "#b4a078")
        $(this).css("border-bottom", "2px solid #b4a078")
        $(".item-1").css("color", "#000000")
        $(".item-1").css("border-bottom", "2px solid transparent")
        var num = parseInt($(this).attr('data'))
        $.get("../json/人气推荐.json", function (data) {
            $(".showContainer").html("")
            var list = data[num].list;
            $.each(list, function (i) {
                if (i == 0) {
                    $(`
                  <div class="m-product popularItem" style="background:#fff;box-shadow:none">
                  <div class="hd hd-i">
                      <img class="imgSceneblock imgSceneblock1" src="https://yanxuan-item.nosdn.127.net/f28c5db21c4d8aef33176e628ea3c4e2.png?type=webp&quality=95&thumbnail=320x320&imageView" alt="" style="display:block;">
                   
                      <div class="promBanner promBanner1">
                          <div class="promTitle">
                              <div class="title"><span>狂欢特惠</span></div>
                              <div class="subTitle"><span style="vertical-align:middle;">¥149</span></div>
                          </div>
                          <div class="promContent" >仅剩13天</div>
                      </div>
                  </div>
                  <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                  <div class="bd bd1">
                    
                      <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                      <h4 class="name1" style="margin: 10px 0 15px;"><span style="font-size: 18px;">纯牛奶酸牛奶囤货装</span></h4>
                      <p class="price11" >
                          <span class="retailPrice" style="font-size:18px">
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                          </span>
                          <span class="counterPrice" style="font-size: 14px;"><span>¥</span><span >169</span></span>
                      </p>
                  </div>
           </div>
                  `).appendTo(".showContainer")
                } else if (i > 0) {
                    $(`
                  <div class="m-product puop" style="background:#fff;box-shadow:none">
                  <div class="hd  hd-a">
                      <img class="imgSceneblock imgSceneblock2" src="${this.img}" alt="" style="display:block;">
                      <div class="promBanner">
                          <div class="promTitle">
                              <div class="title"><span>${this.title}</span></div>
                              <div class="subTitle"><span style="vertical-align:middle;">${this.txt}</span></div>
                          </div>
                          <div class="promContent" >${this.txts}</div>
                      </div>
                  </div>
                  <img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                  <div class="bd bbdd">
                    
                      <div class="prdtTags" style="width: 100%;text-align: center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
                      <h4 class="name1" style=""><span style="">${this.tit}</span></h4>
                      <p class="price11" >
                          <span class="retailPrice" style="">
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                                  <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
                          </span>
                          <span class="counterPrice" style=""><span>¥</span><span >${this.price}</span></span>
                      </p>
                  </div>
           </div>
                  
                  
                  `).appendTo(".showContainer")
                }


            })

        })

    })
    window.open("公共.html?"+data)


    //限时购
    $.get("../json/限时购.json", function (data) {
        $.each(data, function (i) {
            $(`
           <div class="m-flashSaleProduct">
           <div class="picIn">
               <img class="pic"
                   src="${this.img}"
                   alt="">
           </div>
           <div class="rt">
               <div class="itemName">
                   <span>${this.title}</span>
               </div>
               <p class="itemDes">${this.txt}</p>
               <div class="itemNum">
                   <div class="numBar">
                       <div class="numBarIn hasSellVolume" style="width: 148.5px"></div>

                   </div>
                   <div class="numTips">${this.js}</div>
               </div>
               <div class="itemPrice"> 
                   <span class="aPrice">${this.txts}<span class="yuan">¥</span>
                   <span class="aPriceIn bold">${this.price}</span></span>
                   <span class="oPrice">&nbsp;<span class="oPriceIn">${this.price1}</span></span>
                </div>
              <div class="w-btn tobuyBtn">
                   ${this.bg}
              </div>
           </div>
       </div>
           `).appendTo(".flashSaleRt")
        })
    })

    // 居家生活
    $.get("../json/居家生活.json", function (data) {
        $.each(data,function(i){
          $(`
          <div class="swiper-slide">
          <img src="${this.img}" alt="">
          </div>
          `).appendTo(".swiper4-wrapper")

$(`
<div class="m-product">
<div class="hd">
    <img class="imgSceneblock" src="${this.img1}" alt="">
    <img class="imgScene" src="${this.img2}">
    <div class="promBanner">
        <div class="promTitle">
            <div class="title"><span>狂欢特惠</span></div>
            <div class="subTitle"><span style="vertical-align:middle;">¥149</span></div>
        </div>
        <div class="promContent" >仅剩13天</div>
    </div>
</div>
<img class="promoLogo" style="width:48px;height:48px;" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
<div class="bd">
  
    <div class="prdtTags" style="text-align:center;"><span class="m-itemTag " data-reactid=".2.3.1.0.0.$0.1.0.$0">狂欢特惠</span><span></span></div>
    <h4 class="name1" ><span>纯牛奶酸牛奶囤货装</span></h4>
    <p class="price11" >
        <span class="retailPrice" >
                <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">149</span>
        </span>
        <span class="counterPrice"><span>¥</span><span >169</span></span>
    </p>
</div>
</div>

`).appendTo(".hsso")


        })

        var swiper4 = new Swiper('.swiper4', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            pagination: {
                el: '.pag4',
                clickable: true,
            },
            navigation: {
                nextEl: '.next4',
                prevEl: '.prev4',
            },
            autoplay: {
                delay: 3000,

                disableOnInteraction: false,
            },

        })
        for (i = 0; i < swiper4.pagination.bullets.length; i++) {
            swiper4.pagination.bullets[i].onmouseover = function () {
                this.click();
            };
        }

    })

    // 大家都在说
    $.get("../json/allstalk.json",function(data){
        $.each(data,function(i){
            $(`
            <div class="swiper-slide wyz">
                                <div class="u9"><img class="dfs" src="${this.img1}" alt=""></div>
                                <div class="u10">
                                    <p>
                                      <span>${this.p}</span>
                                      <span>${this.p1}</span>
                                    </p>
                                    <p>
                                      <span class="i">${this.p2}</span>
                                      <span class="i1">${this.p3}</span>
                                    </p>
                                    <p class="i2">${this.p4}</p>
                                  </div>
                            </div>
            
            `).appendTo(".swiper5-wrapper")
            var swiper5 = new Swiper('.swiper5', {
                slidesPerView: 3,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.next5',
                    prevEl: '.prev5',
                },
                loop:true,
                autoplay: {
                    delay: 3000,
    
                    disableOnInteraction: false,
                },
            });
        })
    })
 



})