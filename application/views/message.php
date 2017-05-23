<!doctype >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/message.css">
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


//    ?>
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
<div id="submit">
    <form action=" message/doInsert" method="post">
        <label for="username">用户账号：</label>
        <input type="text" id="username" name="username"
            value="<?php
                        $email=$this->session->userdata('email1');
                        if($email){
                            echo $this->session->userdata('email1');
                        }
            ?>"
            >
        <br/>
        <label for="contact">联系方式：</label>
        <input type="text" name="contact" id="contact">
        <br/>
        <label for="address">家庭住址：</label>
        <input type="text" name="address" id="address">
        <br/>
        <label for="feedbackType">反馈类型：</label>
        <input type="text" id="feedbackType" name="feedbackType" style="margin-bottom:30px;">
        <br/>
        <label for="content">反馈内容：</label>
        <textarea name="content" id="content" cols="30" rows="10" style="width:300px"></textarea>
        <br/>
        <input type="submit" class="none" name="submit">
    </form>
</div>
<div id="content">
    <?php if(isset($_POST['submit'])){
        foreach($data as $message){
           echo "<ul>

                    <li>用户账号：$message->username</li>
                    <li>联系方式：$message->phone</li>
                    <li>家庭住址：$message->address</li>
                    <li>反馈类型：$message->types</li>
                    <li>反馈内容：$message->content</li>
                    <li>反馈时间：$message->times</li>

                </ul>";
        }
    }?>
</div>
<div id="mes" >
    <span>[X]</span>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/message.js"></script>
</body>
</html>