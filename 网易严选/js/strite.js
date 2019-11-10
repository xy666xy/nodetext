$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./footer.html")
   
    var swiper1 = new Swiper('.swiper1', {
      
        loop: true,
        pagination: {
           el: '.swiper-pagination',
           clickable: true,
        },
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
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
     $.get("../json/foryou.json",(str)=>{
		str.forEach((item,index)=>{
			if(index==0){
				$(".module")[index].innerHTML+=`
				<div class="module_title t-1" gengduo=${item.gengduo}>
					${item.title}
					<a href="">更多></a>
				</div>
				<div class="module_content">
					
				</div>
				`
				item.list.forEach((item,index2)=>{
					$(".module").eq(index).find(".module_content")[0].innerHTML+=`
					<div class="details  c-1">
						<div class="img-box">
							<img src=${item.img}>
						</div>
						<h5>${item.title}</h5>
						<p>${item.text}</p>
					</div>
					`
				})
			}else if(index==1){
				$(".module")[index].innerHTML+=`
				<div class="module_title" gengduo=${item.gengduo}>
					${item.title}
					<a href="">更多></a>
				</div>
				<div class="module_content">
					
				</div>
				`
				item.list.forEach((item,index2)=>{
					$(".module").eq(index).find(".module_content")[0].innerHTML+=`
					<div class="details  c-2">
						<div class="img-box">
							<img src=${item.img}>
						</div>
						<div class="tui">
							<div class="touxiang">
								<img src=${item.img2}>
							</div>
							<span>${item.name}</span>
						</div>
						<h5>${item.title}</h5>
						<p>${item.text}</p>
					</div>
					`
				})
			}else if(index==2||index==3){
				$(".module")[index].innerHTML+=`
				<div class="module_title" gengduo=${item.gengduo}>
					${item.title}
					<a href="">更多></a>
				</div>
				<div class="module_content">
					
				</div>
				`
				item.list.forEach((item,index2)=>{
					$(".module").eq(index).find(".module_content")[0].innerHTML+=`
					<div class="details  c-${index+1}">
						<div class="img-box">
							<img src=${item.img}>
						</div>
						<div class="text">
						<h5>${item.title}</h5>
						<p>${item.text}</p>
						</div>
					</div>
					`
				})
			}else if(index==4){
				$(".module")[index].innerHTML+=`
				<div class="module_title" gengduo=${item.gengduo}>
					${item.title}
					<a href="">更多></a>
				</div>
				<div class="module_content m-5">
					<ul>
						
					</ul>
				</div>
				`
				item.list.forEach((item,index2)=>{
					$(".module").eq(index).find("ul")[0].innerHTML+=`
					<li>${item.title}</li>
					`
					$(".module").eq(index).find(".module_content")[0].innerHTML+=
					`
					<div class="details  c-5" see=${item.see}>
						<p>${item.text}</p>
						<div class="img-box">
							<img src=${item.img}>
							<div class="img-show">
								<span>去看看></span>
							</div>
						</div>
						<div class="text-right">
							看看${item.title}其他内容&lt;
						</div>
					</div>
					`
				})
				$(".m-5 ul li").eq(0).addClass("now")
				$(".c-5").eq(0).addClass("now")
				$(".c-5").each(function(i,item){
					if($(item).attr("see")==0){
						$(item).find(".text-right").css("display","none")
					}
				})
				$(".m-5 ul li").click(function(){
					let index=$(this).index()
					$(this).addClass("now").siblings("li").removeClass("now")
					$(".c-5").eq(index).addClass("now").siblings(".c-5").removeClass("now")
				})
			}
			else if(index==5){
				$(".module")[index].innerHTML+=`
				<div class="module_title" gengduo=${item.gengduo}>
					${item.title}
					<a href="">更多></a>
				</div>
				<div class="module_content">
					<div class="video">
						<video poster=${item.list[0].video} class="videoPlayer" controls="" preload="auto" >
							<source src=${item.list[0].src} type="video/mp4" >
							<div class="notSupport">您的浏览器不支持播放视频</div>
						</video>
					</div>
					<div class="swiper-container swiper-container2">
						<div class="swiper-wrapper">
							
						</div>
						<div class="swiper-button-next">&#5167 </div>
						<div class="swiper-button-prev">&#5169 </div>
					</div>
				</div>
				`
				item.list.forEach((item,index2)=>{
					$(".module").eq(index).find(".swiper-wrapper")[0].innerHTML+=
					`
					<div class="swiper-slide" data=${item.data}>
						<img src=${item.img}>
						<div class="slide-show">
							<span>
								&#9654
							</span>
						</div>
					</div>
					`
				})
				$(".swiper-container2 .swiper-slide").click(function(){
					var data=$(this).attr("data")
					$(".video").html(
					`
					<video poster=${item.list[data].video} class="videoPlayer" controls="" preload="auto" >
							<source src=${item.list[data].src} type="video/mp4" >
							<div class="notSupport">您的浏览器不支持播放视频</div>
					</video>
					`
					)
				})
				var swiper2 = new Swiper('.swiper-container2', {
					direction: 'vertical',
					slidesPerView: 2.3111,
					loop: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
		})
		$(".module_title").each(function(){
			if($(this).attr("gengduo")==0){
				$(this).find("a").css("display","none")
			}
		})
	})
})