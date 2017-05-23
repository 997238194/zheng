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
    var oMove=document.getElementById("move");
    var oContainer=document.getElementById("container");
    var oScoll=document.getElementById("scoll");
    var oContent=document.getElementById("content");
    var oScollHeight=oScoll.offsetHeight;
    var oContentHeight=oContent.offsetHeight;
    oMove.onmousedown=function(e){
        e=e||window.event;
        var disY=e.clientY;
        var disC=disY-oContainer.offsetTop-oMove.offsetTop;
        document.onmousemove=function(e){
            e=e||window.event;
            var disM=e.clientY-disC-oContainer.offsetTop;
            if(disM<0){
                disM=0
            }
            if(disM>oScollHeight-oMove.offsetHeight){
                disM=oScollHeight-oMove.offsetHeight;
            }
            oMove.style.top=disM+"px";
            oContent.style.top=(disM/(oScollHeight-oMove.offsetHeight))*(oContentHeight-oContainer.offsetHeight)+"px";
            return false;
        }


    }
    document.onmouseup=function(){
        document.onmousemove=null;
    }

    $money=0;
    $shopname=0;
    $content=$("#content");

    $cart=$("#container");


    var arr=[];
   $("#shops .sub").each(function(){
        $(this).on("click",function(){
            $shopid=$(this).parent().children().slice(0).html();
            $shopname=$(this).parent().children().slice(2).html().split(":")[1];
            $money=$(this).parent().children().slice(3).html().split(":")[1];
            var htmlShop="";
            htmlShop+="<div><span>商品id:"+$shopid+"</span><span>商品名称:"+$shopname+"</span><span>商品价格:"+$money+"</span>购买数量:<input class='byCount'  style='width:30px;' value='1'>"+"<button class='edit'>确定数量</button><button class='remove' style='margin-left:10px'>[X]</button>"+"</div>";


           $content.append(htmlShop);

          $cart.css("display","block");



      })
    })
    $("#container").on("click",".edit",function(){
        $shopid=($(this).parent().children().eq(0).html().split(":")[1]);
        $shopnumbers=($(this).parent().children().eq(3).val());
         $this=$(this).parent().children().eq(3)
        console.log($shopnumbers);
        $.post("shop/getCount",{id:$shopid,numbers:$shopnumbers},function(data){
            if(data=="sucess"){
                alert("您购买的商品数量充足。");
            }else{
                alert("您购买的商品数量不足");
                $this.val(data);
            }
        },'text');


    })
    $("#container").on("click",".remove",function(){
        $(this).parent().remove();
    })
    $mummoney=0;
    $shop=[];
    shopindex=0;
    $("#container .buy").on("click",function(){
        $("#content div").each(function(){
            $id=$(this).children().eq(0).html().split(":")[1];
            $shopname=$(this).children().eq(1).html().split(":")[1];
            $price=$(this).children().eq(2).html().split(":")[1];
            $count=$(this).children().eq(3).val();
            $mummoney+=$price*$count;

            $shop[shopindex++]=[$id,$shopname,$count];
            console.log($mummoney);

        })
        $buyid=$("#header .userName").html();
        if($buyid){
            $.post("cart/insert",{shop:$shop,mummoney:$mummoney,buyid:$buyid},function(data){
                if(data=="sucess"){
                    alert("购买商品成功");
                    $.post("shop/updateShop",{shop:$shop},function(data){
                        if(data=="sucess"){
                            window.location.href="http://localhost/zheng/index.php/shop/index";
                            $mummoney=0;
                            $shop=[];
                            shopindex=0;
                        }
                    },"text");

                    $("#container").css("display","none");
                }
            },"text");
        }else{
            alert("请您登录后在进行购物");
            window.location.href="http://localhost/zheng/index.php/user/index";
        }


    })
})



