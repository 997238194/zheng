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


    })



