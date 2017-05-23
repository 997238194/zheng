<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/admin.css">
    <title>Document</title>
</head>
<body>


<div id="title">基于PHP的宠物医疗网站的后台管理界面</div>

<ul id="menu">
    <li class="selected">权限设置模块</li>
    <li>员工信息管理模块</li>
    <li>商品上下架模块</li>
    <li>服务更改模块</li>
    <li>服务预订模块</li>
    <li>用户留言模块</li>
    <li>购物模块管理</li>
</ul>
<div id="content">
    <div class="selected pep" >

        <?php
            foreach(  $data as $message){
               echo "    <ul style='position:relative'>
                        <input   name='email' style='width:300px;'type='text' disabled='true' value='$message->email'>
                        <input type='button' value='设置权限' class='set' style='position:absolute;left:445px; '>
                        <input  name ='admin' type='text' value='$message->admin' >

                        </ul>
                    ";
            }
        ?>
    </div>
    <div  id="doctor"></div>
    <div id="shop"></div>
    <div id="serves"></div>
    <div id="book"></div>
    <div id="message"></div>
    <div id="cart"></div>

</div>
<div id="huifu" style=" width:300px;height:300px;display:none; position:fixed; left:50%;margin-left:-150px;
                                                                                  top:50%;margin-top:-150px;">

    <textarea name="" id="" cols="30" rows="10">aaaaa</textarea>
    <button style='width:30px;height:30px; text-align: center;line-height: 30px;'class="sub">提交</button>
    <button style='width:30px;height:30px; text-align: center;line-height: 30px;'class="quxiao">取消</button>

</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>