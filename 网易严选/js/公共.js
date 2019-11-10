$(function () {
   $("#header").load("./header.html")
   $("#footer").load("./footer.html")
   var num = parseInt(window.location.search.substr(1))

   $.ajax({
      "url": "../json/xiangqingye.json",
      "type": "get",
      "async": true,
      "dataType": "json",
      "data": ""
   }).done(function (str) {
      var data = str[num]
      // console.log(data)
      var dataimg = data.img
      var datalis = data.list
      var datalist = data.lis
      var dataitem = data.item
      console.log(dataitem)
      $(".z-cur").html(`${data.title}`)

      $.each(dataimg, function (i) {
         $(`
<div class="swiper-slide">
<div class="slid-img">
  <img src="${dataimg[i]}" alt="">
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

      $.each(datalis, function (i) {
         if (i == 0) {
            $(`
            <a href="javascript:;" class="categoryItem j-categoryItem active" data-reactid=".3.1.0.0.1.$0">全部</a>
            `).appendTo(".categoryGroup1")
         } else if (i > 0) {
            $(`
            <a href="javascript:;" class="categoryItem j-categoryItem" data-reactid=".3.1.0.0.1.$0">${this}</a>
            `).appendTo(".categoryGroup1")
         }

      })
      $.each(datalist, function (i) {
         if (i == 0) {
            $(`
            <a href="javascript:;" class="categoryItem j-categoryItem active" data-reactid=".3.1.0.0.1.$0">全部</a>
            `).appendTo(".categoryGroup1")
         } else if (i > 0) {
            $(`
            <a href="javascript:;" class="categoryItem j-categoryItem" data-reactid=".3.1.0.0.1.$0">${this}</a>
            `).appendTo(".categoryGroup2")
         }

      })
      $.each(dataitem, function (k) {
         $(`
         <div class="gg-wrow">
         <div class="centerl">
             <p class="f-clearfix">
                ${this.head}
             </p>
             <p class="desc"> ${this.head1}</p>
         </div>
         <div class="hsso ${'hsso'+k}">
          
         </div>
     </div>
         `).appendTo(".g-bd-list")
         var datali = this.li
         console.log(datali)
         $.each(datali, function (j) {
            $(`
            <div class="m-product">
            <div class="hd">
                <img class="imgSceneblock"
                    src="${datali[j].img}"
                    alt="">
                <img class="imgScene"
                    src="${datali[j].imgs}">
                <div class="promBanner">
                    <div class="promTitle">
                        <div class="title"><span>${datali[j].txt}</span></div>
                        <div class="subTitle"><span style="vertical-align:middle;">${datali[j].price}</span></div>
                    </div>
                    <div class="promContent">${datali[j].title}</div>
                </div>
            </div>
            <img class="promoLogo" style="width:48px;height:48px;"
                src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
            <div class="bd">

                <div class="prdtTags"><span class="m-itemTag "
                        data-reactid=".2.3.1.0.0.$0.1.0.$0">${datali[j].center}</span><span></span></div>
                <h4 class="name1"><span>${datali[j].head}</span></h4>
                <p class="price11">
                    <span class="retailPrice">
                        <span data-reactid=".2.3.1.0.0.$0.1.2.0.0">¥</span>
                        <span data-reactid=".2.3.1.0.0.$0.1.2.0.1">${datali[j].price}</span>
                    </span>
                    <span class="counterPrice"><span>¥</span><span>${datali[j].change}</span></span>
                </p>
            </div>
        </div>
            `).appendTo(".hsso"+k)
         })

      })

   })
})