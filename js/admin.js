$(document).ready(function() {
    var oMenu = document.getElementById("menu"),
        oContent = document.getElementById('content');
    var aLi = oMenu.getElementsByTagName('li'),
        aDiv = oContent.getElementsByTagName('div');
    $doctor = $("#doctor");
    $shop=$("#shop");
    $serves=$("#serves");
    $book=$("#book");
    $message=$("#message");
    $huifu=$("#huifu");
    $email=0;
    for (var i = 0; i < aLi.length; i++) {
        (function (i) {
            aLi[i].onclick = function () {
                //获取员工管理模块的信息
                if (i == 1) {
                    var html = "";

                    $.post('doctor/getAll', function (data) {
                        html = " <ul style=' border:1px;margin-bottom: 20px;'><input  value=" + "医生姓名" + ">" +
                            " <input value=" + "医生住址" + ">" +
                            " <input value=" + "医生薪水" + ">" +
                            " <input value=" + "医生水平" + ">" +
                            " <input value=" + "医生擅长领域" + ">" +
                            " <input value=" + "医生的电话" + ">" +
                            " <input value=" + "医生的邮箱" + ">" +
                            " <input value=" + "医生的图片路径" + ">" + "<button> 添加新医生</button>" + "</ul>";
                        $data = eval(data);

                        for (var i = 0; i < $data.length; i++) {
                            html += "<ul style=' border:1px;margin-bottom: 20px;'><input  disabled='true' value=" + $data[i].id + ">+<input value=" + $data[i].dname + ">" +
                                " <input value=" + $data[i].address + ">" +
                                " <input value=" + $data[i].salary + ">" +
                                " <input value=" + $data[i].levels + ">" +
                                " <input value=" + $data[i].field + ">" +
                                " <input value=" + $data[i].phone + ">" +
                                " <input value=" + $data[i].email + ">" +
                                " <input value=" + $data[i].img + ">" + "<input name='update' type='button' value='确定修改'>" + "&nbsp;&nbsp;&nbsp;" + "<input name='delet' type='button' value='删除医生'>" + "</ul>";

                            ;


                        }
                        $doctor.html(html);
                        $id=0;
                        $img = 0;
                        $address = 0;
                        $salary = 0;
                        $level = 0;
                        $field = 0;
                        $phone = 0;
                        $name = 0;
                        $email = 0;
                        //删除的ajax
                        $("#doctor input[name='delet']").each(function(index){
                            $(this).on("click",function(){
                                $(this).prevAll().each(function(index){
                                    if(index==9){
                                        $id=$(this).val();
                                    }
                                })
                                $.post("doctor/delet", {id:$id},

                                    function (data) {

                                        if (data == "success") {

                                            alert("删除用户成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })
                        //修改的ajax
                        $("#doctor input[name='update']").each(function(index){
                            $(this).on("click",function(){
                                $(this).prevAll().each(function(index){
                                    if (index == 0) {

                                        $img = $(this).val();
                                    } else if (index == 1) {
                                        $email = $(this).val();
                                    } else if (index == 2) {
                                        $phone = $(this).val();
                                    } else if (index == 3) {
                                        $field = $(this).val();
                                    } else if (index == 4) {
                                        $level = $(this).val();
                                    } else if (index == 5) {
                                        $salary = $(this).val();
                                    } else if (index == 6) {
                                        $address = $(this).val();
                                    } else if (index == 7) {
                                        $name = $(this).val();
                                    }else{
                                        $id=$(this).val();
                                    }
                                })
                                $.post("doctor/update", {
                                        id:$id,
                                        name: $name,
                                        address: $address,
                                        salary: $salary,
                                        level: $level,
                                        field: $field,
                                        phone: $phone,
                                        email: $email,
                                        img: $img
                                    },

                                    function (data) {

                                        if (data == "success") {

                                            alert("修改用户信息成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })

                    }, 'json')
                }
                else if(i==2){

                    var html="";
                    $.post('shop/getAll1', function (data) {
                        html = " <ul style=' border:1px;margin-bottom: 20px;'><input  value=" + "商品名称" + ">" +
                            " <input value=" + "商品价格" + ">" +
                            " <input value=" + "上架时间" + ">" +
                            " <input value=" + "商品数量" + ">" +
                            " <input value=" + "商品图片路径" + ">" + "<button> 添加新商品</button>" + "</ul>";
                        $data = eval(data);


                        for (var i = 0; i < $data.length; i++) {
                            html += "<ul style=' border:1px;margin-bottom: 20px;'><input  disabled='true' value=" + $data[i].id + ">+<input value=" + $data[i].sname + ">" +
                                " <input value=" + $data[i].price + ">" +
                                " <input value=" + $data[i].stime + ">" +
                                " <input value=" + $data[i].numbers + ">" +
                                " <input value=" + $data[i].img + ">"  + "<input name='upd' type='button' value='确定修改'>" + "&nbsp;&nbsp;&nbsp;" + "<input name='del' type='button' value='删除商品'>" + "</ul>";

                            ;


                        }
                        $shop.html(html);
                        $id=0;
                        $img = 0;
                        $price = 0;
                        $name = 0;
                        $numbers=0;


                        //商品删除的ajax
                        $("#shop input[name='del']").each(function(index){
                            $(this).on("click",function(){

                                $(this).prevAll().each(function(index){
                                    if(index==6){
                                        $id=$(this).val();

                                    }

                                })
                                $.post("shop/del", {id:$id},

                                    function (data) {
                                        console.log(data);
                                        if (data == "success") {

                                            alert("删除商品成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })
                        //修改商品信息的ajax
                        $("#shop input[name='upd']").each(function(index){
                            $(this).on("click",function(){
                                $(this).prevAll().each(function(index){
                                    if (index == 0) {

                                        $img = $(this).val();
                                    } else if (index == 1) {
                                        $numbers = $(this).val();
                                    } else if (index == 3) {
                                        $price = $(this).val();
                                    } else if (index == 4) {
                                        $name = $(this).val();
                                    } else  {
                                        $id = $(this).val();
                                    }
                                })
                                $.post("shop/upd", {
                                        id:$id,
                                        name: $name,
                                        price: $price,
                                        numbers: $numbers,
                                        img: $img
                                    },

                                    function (data) {

                                        if (data == "success") {

                                            alert("修改商品信息成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })

                    }, 'json');

                }else if(i==3){
                    var html="";
                    $.post('serves/getAll1', function (data) {
                        html = " <ul style=' border:1px;margin-bottom: 20px;'><input  value=" + "服务名称" + ">" +
                            " <input value=" + "服务价格" + ">" +
                            " <input value=" + "上架时间" + ">" +
                            " <input value=" + "服务人员姓名" + ">" +
                            " <input value=" + "服务人员联系方式" + ">" +
                            " <input value=" + "服务图片展示路径" + ">"
                            +"<button> 添加新服务项目</button>" + "</ul>";
                        $data = eval(data);


                        for (var i = 0; i < $data.length; i++) {
                            html += "<ul style=' border:1px;margin-bottom: 20px;'><input  disabled='true' value=" + $data[i].id + ">+<input value=" + $data[i].sname + ">" +
                                " <input value=" + $data[i].price + ">" +
                                " <input value=" + $data[i].stime + ">" +
                                " <input value=" + $data[i].pepname + ">" +
                                " <input value=" + $data[i].contact + ">"+
                                " <input value=" + $data[i].img + ">"  + "<input name='upd' type='button' value='确定修改'>" + "&nbsp;&nbsp;&nbsp;" + "<input name='del' type='button' value='删除服务'>" + "</ul>";

                            ;


                        }
                        $serves.html(html);
                        $id=0;
                        $img = 0;
                        $price = 0;
                        $name = 0;
                        $numbers=0;


                        //服务删除的ajax
                        $("#serves input[name='del']").each(function(index){
                            $(this).on("click",function(){

                                $(this).prevAll().each(function(index){
                                    if(index==7){
                                        $id=$(this).val();

                                    }

                                })
                                $.post("serves/del", {id:$id},

                                    function (data) {
                                        console.log(data);
                                        if (data == "success") {

                                            alert("删除服务成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })
                        //修改服务信息的ajax
                        $("#serves input[name='upd']").each(function(index){
                            $(this).on("click",function(){
                                $(this).prevAll().each(function(index){
                                    if (index == 0) {

                                        $img = $(this).val();
                                    } else if (index == 1) {
                                        $contact = $(this).val();
                                    } else if (index == 2) {
                                        $pepname = $(this).val();
                                    } else if (index == 3) {
                                        $stime = $(this).val();
                                    } else if(index==4) {
                                        $price = $(this).val();
                                    }else if(index==5){
                                        $sname=$(this).val();
                                    }else if(index==6){
                                        $id=$(this).val();
                                    }
                                })
                                $.post("serves/upd", {
                                        id:$id,
                                        sname: $sname,
                                        price: $price,
                                        stime: $stime,
                                        pepname:$pepname,
                                        contact:$contact,
                                        img: $img
                                    },

                                    function (data) {

                                        if (data == "success") {

                                            alert("修改服务信息成功");
                                        }
                                    },
                                    "text"
                                );

                            })
                        })

                    }, 'json');
                }else if(i==4){
                    var html="<hr> ";
                    $.post("serves/getAllBook",function(data){
                        $data=eval(data);
                        for(var i=0;i<$data.length;i++){

                            html += "<ul style=' border:1px;margin-bottom: 20px;'>"
                                +   "<li>预订id："+$data[i].bookid+"</li>"
                                +   "<li>服务名称："+$data[i].bookname+"</li>"
                                +   "<li>服务价格："+$data[i].bookprice+"</li>"
                                +   "<li>预订用户："+$data[i].bookemail+"</li>"
                                +   "<li>预订电话："+$data[i].bookpho+"</li>"
                                +   "<li>预订时间："+$data[i].booktime+"</li>"
                                +   "<li>服务id："+$data[i].bookserveid+"</li>"
                                + "<hr></ul>";


                        }
                        $book.html(html);

                    },'json')
                }else if(i==5){
                    var html="<hr>";
                    $.post("message/getAllMessage",function(data){
                        $data=eval(data);
                        for(var i=0;i<$data.length;i++){

                        html += "<ul style=' border:1px;margin-bottom: 20px;'>"
                            +   "<li>用户名:"+$data[i].username+"</li>"
                            +   "<li>用户电话:"+$data[i].phone+"</li>"
                            +   "<li>用户住址:"+$data[i].address+"</li>"
                            +   "<li>反馈类型:"+$data[i].types+"</li>"
                            +   "<li>反馈内容:"+$data[i].content+"</li>"
                            +   "<li>反馈时间:"+$data[i].times+"</li>"
                            +   "<button class='onmessage'>点击回复</button>"
                            + "<hr></ul>";
                        }
                        $message.html(html);
                        $(".onmessage").each(function(){
                            $(this).on("click",function(){
                                $email=$(this).parent().children().slice(0).html().split(":")[1];
                                $huifu.css("display","block");
                            })

                        })

                    },"json");


                }else if(i==6){
                    var html="<hr>";
                    $.post("cart/getAll",function(data){
                        $data=eval(data);
                        for(var i=0;i<$data.length;i++){

                            html += "<ul style=' border:1px;margin-bottom: 20px;'>"
                                +   "<li>顾客姓名:"+$data[i].customer+"</li>"
                                +   "<li>商品总价:"+$data[i].total+"</li>"
                                +   "<li>购买时间:"+$data[i].timer+"</li>"
                                +   "<li>订单号:"+$data[i].tranumber+"</li>"
                                +   "<li>订单详情:"+$data[i].buyshop+"</li>"
                                + "<hr></ul>";
                        }
                        $("#cart").html(html);


                    },"json");


                }
                $("#huifu .sub").on("click",function(){
                    $content=$(this).prev().val();
                    $.post("onmessage/insert",{
                        content:$content,email:$email
                    },function(data){
                        if(data=="sucess"){
                            $("#huifu").css("display","none");
                            alert("回复成功");
                        }
                    },"text")
                })
                $("#huifu .quxiao").on("click",function(){
                    $("#huifu").css("display","none");
                })
                for (var j = 0; j < aLi.length; j++) {
                    aLi[j].className = "";
                    aDiv[j].className = "";
                }
                this.className = "selected";
                aDiv[i].className = "selected";

            }
        })(i)
    }
    //设置权限的ajax
    $(".set").each(function (index) {
        $(this).on("click", function () {
            $emailvalue = $(this).prev().val();
            $admin = $(this).next().val();
            $.post("user/quanxian", {email: $emailvalue, admin: $admin},

                function (data) {

                    if (data == "success") {

                        alert("权限设置成功");
                    }
                },
                "text"
            );

        })
    })
    //添加用户的ajax；
    $img = 0;$address = 0;$salary = 0;$level = 0;$field = 0;$phone = 0;$name = 0;$email = 0;
    $("#doctor").on("click", 'button', function () {
        $(this).prevAll().each(function (index) {
            if (index == 0) {

                $img = $(this).val();
            } else if (index == 1) {
                $email = $(this).val();
            } else if (index == 2) {
                $phone = $(this).val();
            } else if (index == 3) {
                $field = $(this).val();
            } else if (index == 4) {
                $level = $(this).val();
            } else if (index == 5) {
                $salary = $(this).val();
            } else if (index == 6) {
                $address = $(this).val();
            } else if (index == 7) {
                $name = $(this).val();
            } else {
                $id = $(this).value();
            }

        })
        $.post("doctor/insert", {
            name: $name,
            address: $address,
            salary: $salary,
            level: $level,
            field: $field,
            phone: $phone,
            email: $email,
            img: $img
        }, function (data) {
            if (data == "success") {
                alert("添加员工信息成功");
            }


        }, "text")


    })

    $("#shop").on("click","button",function(){
    $(this).prevAll().each(function (index) {
        if (index == 0) {

            $img = $(this).val();
        } else if (index == 1) {
            $numbers = $(this).val();
        } else if (index == 2) {
            $time= $(this).val();
        } else if (index == 3) {
            $price = $(this).val();
        }else{
            $name=$(this).val()
        }

    })
    $.post("shop/insert", {
        name: $name,
        numbers: $numbers,
        time: $time,
        price: $price,
        img: $img
    }, function (data) {
        if (data == "success") {
            alert("添加商品信息成功");
        }


    }, "text")
})
    $("#serves").on("click","button",function(){
        $(this).prevAll().each(function (index) {
            if (index == 0) {

                $img = $(this).val();
            } else if (index == 1) {
                $contact = $(this).val();
            } else if (index == 2) {
                $pepname= $(this).val();
            } else if (index == 3) {
                $stime = $(this).val();
            }else if(index==4){
                $price=$(this).val();
            }else if(index==5){
                $sname=$(this).val();
            }

        })
        $.post("serves/insert", {
            sname: $sname,
            price: $price,
            stime: $stime,
            pepname:$pepname,
            contact:$contact,
            img: $img
        }, function (data) {
            if (data == "success") {
                alert("添加服务信息成功");
            }


        }, "text")
    })





})