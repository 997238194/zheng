$(document).ready(function(){
    $("#header .right .revise").click(function(){
        $emailValue=$("#email").val();
        $("#mask").css({
            display:"block"
        });

        var $value1=0,
            $value2= 0,
            $index= 0,
            $index1= 0,
            $index2= 0,
            $index3= 0,
            $keyword=$("#keyword1"),
            $keyword1=$("#keyword2")
        $("#mask input").each(function(){}).blur(function(){
            //原密码操作
            if($(this).is("#keyword")){
                $this=$(this);
                var errorMsg1='*密码正确.*';
                var errorMsg2='*密码不正确.*';
                $keywordValue=this.value;

                $.post("user/doRevise",{keyword:$keywordValue,email:$emailValue},function(data){
                    if(data=="success"){
                        $this.after('<span class="right">'+errorMsg1+'</span>');

                        $index++;

                    }else{
                        $this.after('<span class="error">'+errorMsg2+'</span>');
                    }

                },"text");
            }
            //修改密码的操作
            if($(this).is("#keyword1")){
                $value1=this.value;
                if(this.value.length<6||this.value.length>20){
                    var errorMsg3 = '*请输入6-20位.*';
                    $(this).after('<span class="key">'+errorMsg3+'</span>');
                }else{

                    $index1++;


                }
            }
            if($(this).is("#keyword2")){
                $value2=this.value;
                if(this.value.length<6||this.value.length>20){
                    var errorMsg4 = '*请输入6-20位.*';
                    $(this).after('<span class="key">'+errorMsg4+'</span>');
                }else{

                    $index2++;

                }
            }
            if($value1!=$value2){
                if($value1.length>=6&&$value1.length<=20||($value2.length>=6&&$value2.length<=20)){

                    var errorMsg = '*两次输入的密码不同*';
                    $keyword.after('<span class="keys">'+errorMsg+'</span>');
                    $keyword1.after('<span class="keys">'+errorMsg+'</span>');
                }
            }
            if($index&&$index1&&$index2){

                $("#sub").prop("disabled",false);
            }
        }).keyup(function(){
            if($(this).is("#keyword")){
                if($(this).next().is(".right")){

                    $(this).next().remove();
                }
            }
            if($(this).is("#keyword")){
                if($(this).next().is(".error")){

                    $(this).next().remove();
                }
            }
            if($(this).next().is(".key")){
                $(this).next().remove();
            }
            if($(this).is("#keyword1")){
                if($(this).next().attr("class")=="keys"&&$keyword1.next().attr("class")=="keys"){

                    $(this).next().remove();
                    $keyword1.next().remove();
                }else{
                    if($(this).next().attr("class")=="keys"){

                        $(this).next().remove();
                    }
                }
            }
            if($(this).is("#keyword2")){
                if($(this).next().attr("class")=="keys"&&$keyword.next().attr("class")=="keys"){
                    $(this).next().remove();
                    $keyword.next().remove();
                }else{
                    if($(this).next().attr("class")=="keys"){
                        $(this).next().remove();
                    }
                }
            }

        }).focus(function(){
            if($(this).is("#keyword")){
                if($(this).next().is(".right")){

                    $(this).next().remove();
                }
            }
            if($(this).is("#keyword")){
                if($(this).next().is(".error")){

                    $(this).next().remove();
                }
            }
            if($(this).next().is(".key")){
                $(this).next().remove();
            }
            if($(this).is("#keyword1")){
                if($(this).next().attr("class")=="keys"&&$keyword1.next().attr("class")=="keys"){

                    $(this).next().remove();
                    $keyword1.next().remove();
                }else{
                    if($(this).next().attr("class")=="keys"){

                        $(this).next().remove();
                    }
                }
            }
            if($(this).is("#keyword2")){
                if($(this).next().attr("class")=="keys"&&$keyword.next().attr("class")=="keys"){
                    $(this).next().remove();
                    $keyword.next().remove();
                }else{
                    if($(this).next().attr("class")=="keys"){
                        $(this).next().remove();
                    }
                }
            }
        });
    })
//************************************************************
    $("#banner").hover(function(){
        clearInterval($haha);
        $("#banner .banner-content span").animate({
            opacity:1
        },300)

    },function(){
        $timer();
        $("#banner .banner-content span").css({
            opacity:0
        })
    });
    $("#banner .left").on("mouseenter",function(){
        $(this).css({
            width:100
        });
        $("#banner .left-span ").animate({
            width:100
        },300,function(){
            $("#banner .left-content").css({
                display:"block"
            })
            $("#banner .left-content").animate({
                right:10
            },300)
        })
    }).on("mouseleave",function(){
        $(this).css({
            width:50
        })
        $("#banner .left-content").css({

            "display":"none",
            right:-150,

        })
        $("#banner .left-span").animate({
            width:50
        },300)
    })
    $("#banner .right").on("mouseenter",function(){
        $(this).css({
            width:100
        });
        $("#banner .right-span ").animate({
            width:100
        },300,function(){
            $("#banner .right-content").css({
                display:"block"
            })
            $("#banner .right-content").animate({
                left:10
            },300)
        })
    }).on("mouseleave",function(){
        $(this).css({
            width:50
        })
        $("#banner .right-content").css({

            "display":"none",
            left:-150
        })
        $("#banner .right-span").animate({
            width:50
        },300)
    })
    var $timer=function(){

        $haha=setInterval(function(){

            $("#banner img").filter(".top").removeClass("top").fadeOut("slow").siblings().addClass("top").fadeIn("slow");

            $("#banner .bottom-top").css({
                display:"none",
                top:-40
            });
            $("#banner .bottom-center").css({
                display:"none",
                top:-40
            });
            $("#banner .bottom").css({
                display:"none",
                top:-40
            });
            $time1();
        },3000)

    }
    $timer();

    var $time1=function(){
        setTimeout(function(){
            $("#banner .bottom-top").css({
                display:"block"
            }).animate({
                top:120
            },300)
        },500);
        setTimeout(function(){
            $("#banner .bottom-center").css({
                display:"block"
            }).animate({
                top:200
            },300)
        },700);
        setTimeout(function(){
            $("#banner .bottom").css({
                display:"block"
            }).animate({
                top:250
            },300)
        },500);
    }
    $time1();
    var imgIndex=$("#banner img").length-1;
    $("#banner .left-span ").on("click",function(){
        if(imgIndex==-1){
            imgIndex=$("#banner img").length-1;
        }
        $("#banner img:eq("+imgIndex+")").fadeOut("slow");
        $("#banner img:eq("+(--imgIndex)+")").fadeIn("slow");


    })

    $("#banner .right-span ").on("click",function(){
        if(imgIndex==$("#banner img").length){
            imgIndex=0;
        }

        $("#banner img:eq("+imgIndex+")").fadeIn("slow");

        $("#banner img:eq("+(++imgIndex)+")").fadeOut("slow");})


    var $show = $('#show'),
        $showFirst = $('.show-first', $show)
    $showLast = $('.show-last', $show),
        $ourVets = $('#ourVets'),
        isShowAnimated = false;
    $(window).on("scroll", function(event){
        var iScrollTop = $(window).scrollTop();
        if(iScrollTop >= $ourVets.offset().top||iScrollTop<$showFirst.offset().top - $(window).height() ){
            $showFirst.css('opacity', 0);
            $showLast.css('opacity', 0);
            isShowAnimated = false;
        }else if(iScrollTop >= $showFirst.offset().top - $(window).height() &&
            iScrollTop < $ourVets.offset().top && !isShowAnimated){
            $showFirst.animate({
                opacity: 1
            }, 1000, function(){
                $showLast.animate({opacity:1}, 500);
                // isShowAnimated = true;
            });
            isShowAnimated = true;
        }
    });
    //无缝滚动
    var $ul =$("#ourVets .content1  ul"),
        $li =$("li",$ul);
    $ul.append($li.clone(true));
    var	$aul =$("#ourVets .content1  ul")
    $ali=$("li",$ul),
        decoration=-1,
        $content1=$("#ourVets .content1"),
        $content=$("#ourVets .content"),
        $Left=$(".left",$content),
        $Right=$(".right",$content),
        $iLeft=0,
        boolean=false;
    $aul.width($ali.length*($ali[0].offsetWidth+26));
    function scroll(decoration){
        timerScroll=setInterval(function(){
            if(decoration==1){
                boolean=true;
            }else{
                boolean=false;
            }
            if($iLeft<=-($li[0].offsetWidth+26)*4&&!boolean){
                $iLeft=0
                // alert("haha");
                clearInterval(timerScroll);
                $aul.css({
                    left:$iLeft
                })
                scroll(decoration);
            }
            if($iLeft>=0&&boolean){

                clearInterval(timerScroll);
                $iLeft=-($li[0].offsetWidth+26)*4;
                $aul.css({
                    left:$iLeft
                })
                scroll(decoration);
            }
            $iLeft=$iLeft+decoration*($li[0].offsetWidth+26);

            $aul.animate({
                left:$iLeft
            },1500)
        },3000)
    }
    scroll(decoration);
    $content1.hover(function(){
        clearInterval(timerScroll);
    },function(){
        scroll(decoration);
    })
    $Left.on("click",function(){
        clearInterval(timerScroll);
        decoration=-1;
        scroll(decoration);
    })
    $Right.on("click",function(){
        clearInterval(timerScroll);
        decoration=1;
        scroll(decoration);
    })
    $(".logOff").on("click",function(){
        $session=$(".userName").html();
        $.post("user/logOut",{session:$session},function(data){

            if(data=="sucess"){
                window.location.href="http://localhost/zheng/index.php/user/main"
            }

        },"text")
    })
    $('.dologin').on("click",function(){
        window.location.href='http://localhost/zheng/user/index';
    })
    //获取反馈信息的内容；
    $userName=$(".userName").html();
    $mes=$("#mes");
    $span=$("span",$mes);
    $("#fankui").on("click",function(){

        if(!$userName){
            alert("请您先去登录：");
            window.location.href='http://localhost/zheng/user/index';

        }else{
            $.post("onmessage/getAll",{userName:$userName},function(data){
                $data=eval(data);
                var html="";
                for(var i=0;i<$data.length;i++){
                    html+="<li style='list-style: none'>"+$data[i].content+"</li>";
                }
                $mes.append(html);
                $mes.css("display","block");
            },"json")
        }
    })
    $span.on("click",function(){
        $mes.css("display","none");
    })
    $("#buyshopcart").on("click",function(){
        $username=$("#header .userName").html();
        if($username){
            $.post("cart/getByname",{username:$username},function(data){
                    $data=eval(data);
                var html="";
                    for(var i=0;i<$data.length;i++){
                        html+=""+$data[i].total+""+
                            ""+$data[i].timer+""+
                            ""+$data[i].tranumber+""+
                            ""+$data[i].buyshop+""+"</br>";
                    }
                alert(html);
            },"text")
        }else{
            alert("请您前去登录：");
            window.location.href="http://localhost/zheng/user/index";
        }

    })

})