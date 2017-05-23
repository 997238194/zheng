<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/main.css">

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
    <span id="buyshopcart" style="margin-left:400px;line-height:50px;color:red;">我的购物</span>


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
        <div id="menu">
            <img src="img/flogo.png" alt="" class="img1">
            <ul  id="menu1"class="our">
                <li class="severs select"><a href="<?php echo site_url('user/ourVets')?>">ourVets</a></li>
                <li class="severs"><a href="<?php echo site_url('shop/index')?>">ourShop</a></li>
                <li class="severs"><a href="<?php echo site_url('serves/index')?>">ourServese</a></li>
                <li class="severs"><a href="<?php echo site_url('message/message1')?>">ourMesBoard</a></li>
            </ul>
        </div>
        <div id="banner">
            <div class="banner-content">
                <img  src="img/blog_01.jpg" alt="">
                <img  class="top" src="img/blog_04.jpg" alt="">
                <div class="left">
                    <span class="left-span">&lt;</span>
                    <p class="left-content">VET</p>
                </div>
                <div class="right">
                    <span class="right-span">&gt;</span>
                    <p class="right-content">VET</p>
                </div>

            </div>
            <p class="bottom-top">Happy pets,Happy Clients</p>
            <p class="bottom-center">Great Theme For Pet Shop, Veterinarian Websites with tons of options  custom elements and custom sections!
            </p>

            <div class="bottom">
                <span class="bottom-left">Read More</span>
                <span class="bottom-right">Get It Now</span>
            </div>
        </div>
        <div id="news">
            <div class="top">
                <h3>OurService</h3>
                <p>List below four reasons to choose us</p>
            </div>
            <ul class="bottom ">
                <li class="bottom1"><h3>Surgical Operations</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li>
                <li class="bottom2"><h3>Pet Barber Service</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li>
                <li class="bottom3"><h3>Patient Department</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li>
                <li class="bottom4"><h3>Laboratory Services</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li>
            </ul>
        </div>
        <div id="show">
            <div class="top">
                <h3>OurService</h3>
                <p>List below four reasons to choose us</p>
            </div>
            <div class="bottom">
                <div class="show-first">
                    <img src="img/service_05.jpg" alt="">
                    <ul class="show-"><li class="bottom1"><h3>Surgical Operations</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li></ul>
                </div>
                <div class="show-first">
                    <img src="img/service_06.jpg" alt="">
                    <ul><li class="bottom1"><h3>Patient Department</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li></ul>
                </div>
                <div class="show-last">
                    <img src="img/service_07.jpg" alt="">
                    <ul><li class="bottom1"><h3>Laboratory Services</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li></ul>
                </div>
                <div class="show-last">
                    <img src="img/service_08.jpg" alt="">
                    <ul><li class="bottom1"><h3>Pet Barber Service</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod enim a metus adipiscing aliquam.</p><a href="">RedMore</a></li></ul>
                </div>
            </div>
        </div>
        <div id="ourVets">
            <div class="top">
                <h3>OurService</h3>
                <p>List below four reasons to choose us</p>
            </div>
            <div class="content">
                <div class="content1">
                    <ul>
                        <li >
                            <div class="img"><img src="img/team_circle_01.jpg" alt=""></div>
                            <div class="title"><span class="special">Adrial STUFA</span><span>
						Veterinary
					</span></div>
                            <p>Cars dapibus.vivamus elemmentum semper Aenean Vulputata eleifiend tellus Aenean Leoliguln porttitoreu consequat vitae</p>
                            <a href="">Read More</a>
                        </li>
                        <li >
                            <div class="img"><img src="img/team_circle_02.jpg" alt=""></div>
                            <div class="title"><span class="special">Amanda TESSI	</span><span>
						Veterinary
					</span></div>
                            <p>Cars dapibus.vivamus elemmentum semper Aenean Vulputata eleifiend tellus Aenean Leoliguln porttitoreu consequat vitae</p>
                            <a href="">Read More</a>
                        </li>
                        <li >
                            <div class="img"><img src="img/team_circle_03.jpg" alt=""></div>
                            <div class="title"><span class="special">JESSICADEO</span><span>
						Veterinary
					</span></div>
                            <p>Cars dapibus.vivamus elemmentum semper Aenean Vulputata eleifiend tellus Aenean Leoliguln porttitoreu consequat vitae</p>
                            <a href="">Read More</a>


                        </li>
                        <li  >
                            <div class="img"> <img src="img/team_circle_04.jpg" alt=""></div>
                            <div class="title"><span class="special">LINDAMARTIN</span><span>
						Veterinary
					</span></div>
                            <p>Cars dapibus.vivamus elemmentum semper Aenean Vulputata eleifiend tellus Aenean Leoliguln porttitoreu consequat vitae</p>
                            <a href="">Read More</a>
                        </li>
                    </ul>

                </div>
                <span class="left">&lt;</span>
                <span class="right">&gt;</span>
            </div>
        </div>




<div id="mes" >
    <span>[X]</span>
</div>
<div id="include">
    <?php include "message.php"?>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>

</body>


</html>