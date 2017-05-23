<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/ourvets.css">
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
<!--    <a style='margin-left:300px;line-height:50px;color:red;'href="--><?php
//    if($this->session->userdata('email1')){
//        echo site_url('onmessage/getAll');
//    }else{
//        echo "javascript:;";
//    }
//
//
//    ?><!--">留言反馈</a>     -->
    <span id="fankui" style="margin-left:300px;line-height:50px;color:red;">留言反馈</span>

    <div class="right">
        <span class="logOff">注销</span>
        <span class="revise">修改密码</span>
    </div>
</div>
<div id="content">

    <?php if(isset($data)){
        foreach($data as $message){
            echo "<div class='content'>
                     <img src='$message->img' alt=''>
                     <div class='right'>
                     <li>姓名：$message->dname</li>
                     <li>电话：$message->phone</li>
                     <li>邮箱地址：$message->email</li>
                     <li>职业水平：$message->levels</li>
                     <li>擅长领域：$message->field</li>
                     <li>家庭住址：$message->address</li>
                     </div>
                  </div>";
        }
    }?>
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
<div id="mes" >
    <span>[X]</span>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/ourvets.js"></script>
</body>
</html>