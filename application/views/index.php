
<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>基于PHP的宠物医疗网站的设计与实现</title>
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/index.css">


</head>
<body>

        <h id="hiddentype">
            <?php
                if(isset($_POST['submit'])){

                    echo "success";
                }
            ?>
        </h>

        <p>基于PHP的宠物医疗网站的设计与实现</p>
        <div id="title">
        <div class="left">欢</div>
        <div class="top">迎</div>
        <div class="right">加</div>
        <div class="down">入</div>
        </div>
        <div id="do">
            <a href="javascript:;" class="left">注册</a>
            <a href="javascript:;" class="right">登录</a>
        </div>
        <div id="mask1">
            <form action="<?php echo site_url('user/do_login')?>" method="post">
                <label for="email">邮箱：</label>
                <input type="text" name="email" id="email"><br/>
                <label for="keyword">密码：</label>
                <input type="password" name="keyword" id="keyword"><br/>
                <label for="keyword1">确认：</label>
                <input type="password" name="keyword1" id="keyword1"><br/>
                <input type="submit" name="submit" value="提交" id="sub" disabled="true"/>
            </form>
        </div>
        <div id="mask2">
            <form action="<?php echo site_url('user/login')?>" method="post">
                <label for="email1">邮箱：</label>
                <input type="text" name="email1" id="email1"><br/>
                <label for="keyword2">密码：</label>
                <input type="password" name="keyword2" id="keyword2"><br/>
                <input type="submit" name="login" value="登录" id="login" disabled="true"/>
            </form>
        </div>
        <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
        <script>

            var oH=document.getElementById("hiddentype");
            var oMask2=document.getElementById("mask2");
            var oMask1=document.getElementById("mask1");

            var inner=oH.innerHTML;

            if(inner.trim()=="success"){
                console.log(1);
                oMask1.style.display="none";
                oMask2.style.display="block";
            }


        </script>
</body>

</html>
