<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url() ?>">
    <link rel="stylesheet" href="css/shop.css">
    <title>Document</title>
</head>
<body>
<div id="header">

    <?php

    $email=$this->session->userdata('email1');
    if($email){

        echo
            "<div class='userName'>".
            $this->session->userdata('email1').
            "</div>";
    }

    ?>

    <div class="login" style="<?php
    if(!$email=$this->session->userdata('email1')){
        echo 'display:block';
    }
    ?>"><span class="dologin">请您先登录</span></div>
    <span id="fankui" style="margin-left:300px;line-height:50px;color:red;">留言反馈</span>

    <div class="right">
    <span class="logOff">注销</span>
        <span class="revise">修改密码</span>
    </div>
</div>
<div id="mask">
    <div class="window">
        <form action="<?php echo site_url('user/revise')?>" method="post">
            <label for="keyword">用户邮箱：</label>
            <input type="text" name="email" id="email" value="<?php
            if($email){
                echo $this->session->userdata('email1');
            }

            ?>">
            <br/>
            <label for="keyword">输入密码：</label>
            <input type="password" name="keyword" id="keyword"><br/>
            <label for="keyword1">修改密码：</label>
            <input type="password" name="keyword1" id="keyword1"><br/>
            <label for="keyword1">确认密码：</label>
            <input type="password" name="keyword2" id="keyword2"><br/>
            <input type="submit" name="submit" value="提交" id="sub" disabled="true"/>
        </form>
    </div>

</div>
<ul id="shops">

    <?php
        foreach($data as $message){


        echo

        "<li>
        <p style='display: none;'>$message->id</p>
        <p><img src='$message->img' alt=''></p>
        <p>商品详情:$message->sname</p>
        <p>商品价格:$message->price</p>
        <p>商品数量:$message->numbers</p>
        <p>上架时间:$message->stime</p>
        <button class='sub'>加入购物车</button>


        </li>
        ";

    }

    ?>

</ul>
<div id="container">
    <div id="content">
    </div>
    <div id="scoll">
        <div id="move"></div>
    </div>
    <button class="buy" style=" width:30px;height:30px;position:absolute;right:20px;bottom:0;">购买</button>
</div>
<div id="mes" >
    <span>[X]</span>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/shop.js"></script>
</body>
</html>