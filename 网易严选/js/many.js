$(function () {
   $("#header").load("./header.html")
   $("#footer").load("./footer.html")
   $.get("../json/crowd.json", function (data) {
      var dataimg = data.img
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

      var datastart = data.start
      $.each(datastart, function (i) {
         $(`
         <li class="m-item ${this.class}">
         <div class="u-pic">
             <img src="${this.img}"
                 alt="">
         </div>
         <div class="m-info">
             <p class="u-name">${this.pUp}</p>
             <p class="u-desc">${this.pDowm}</p>
             <div class="m-progress">
                 <div class="m-progressBar m-progressBarSmall" data-reactid=".0.2.0.0.1.$0.0.1.2.0">
                     <div class="u-bar" data-reactid=".0.2.0.0.1.$0.0.1.2.0.0">
                         <div class="progress" style="width:${this.progressBar}"
                             data-reactid=".0.2.0.0.1.$0.0.1.2.0.0.0"></div>
                     </div>
                 </div>
                 <span class="u-percent" data-reactid=".0.2.0.0.1.$0.0.1.2.1"><span
                         data-reactid=".0.2.0.0.1.$0.0.1.2.1.0">${this.perNum}</span><span
                         data-reactid=".0.2.0.0.1.$0.0.1.2.1.1">%</span>
                 </span>
             </div>
             <div class="m-detail-small">
                 <div>
                     <p class="text">
                         <span>¥</span>
                         <span>${this.priceCount}</span>
                     </p>
                     <p class="desc">已筹金额</p>
                 </div>
                 <div>
                     <p class="text">
                       
                         <span>${this.people}</span>
                     </p>
                     <p class="desc">支持人数</p>
                 </div>
                 <div>
                     <p class="text">
                        
                         <span>${this.yutime}</span>
                     </p>
                     <p class="desc">剩余时间</p>
                 </div>
             </div>
         </div>
     </li>
         `).appendTo(".m-itemList1")
      })
     
      var dataend = data.ending
      $.each(dataend, function (i) {
        $(`
        <li class="m-item ${this.class}">
        <div class="u-pic">
            <img src="${this.img}"
                alt="">
        </div>
        <div class="m-info">
            <p class="u-name">${this.pUp}</p>
            <p class="u-desc">${this.pDowm}</p>
            <div class="m-progress">
                <div class="m-progressBar m-progressBarSmall" data-reactid=".0.2.0.0.1.$0.0.1.2.0">
                    <div class="u-bar" data-reactid=".0.2.0.0.1.$0.0.1.2.0.0">
                        <div class="progress" style="width:${this.progressBar}"
                            data-reactid=".0.2.0.0.1.$0.0.1.2.0.0.0"></div>
                    </div>
                </div>
                <span class="u-percent" data-reactid=".0.2.0.0.1.$0.0.1.2.1"><span
                        data-reactid=".0.2.0.0.1.$0.0.1.2.1.0">${this.perNum}</span><span
                        data-reactid=".0.2.0.0.1.$0.0.1.2.1.1">%</span>
                </span>
            </div>
            <div class="m-detail-small">
            <span class="u-txt" >${this.Ecolor}</span>
            <span class="u-amount">
                    <span>已筹金额</span>
                    <span class="amount">${this.gold}</span>
            </span>
               
            </div>
        </div>
    </li>
        `).appendTo(".m-itemList2")
     })


   })








})