<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class User extends CI_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('user_model');
        }
//完成注册和登录
        public function index(){

            $this->load->view('index');
        }
    public function quanxian(){
        $email=$this->input->post('email');
        $admin=$this->input->post('admin');

        $query=$this->user_model->quanxian($email,$admin);
        if($query){
            echo "success";
        }
    }
        public function ourVets(){
            $data=$this->getOurVetes();

            $this->load->view("ourvets",array(
                'data'  => $data,

            ));
        }
        public function getAllUser(){
            $users=$this->user_model->getAllUser();
            return $users;
        }

        public function getOurVetes(){
            $query=$this->user_model->getAllOurVetes();
            return $query;
        }
        public function getEmail(){


            $email=$this->input->post('email');

            $query=$this->user_model->getByEmail($email);

            if($query){
                echo  "success";

            }else{
                echo  "fail";
            }

        }
        public function getEmail1(){


            $email=$this->input->post('email1');

            $query=$this->user_model->getByEmail($email);

            if($query){
                echo  "success";

            }else{
                echo  "fail";
            }

        }
    public function getEmail2(){


        $email=$this->input->post('email1');
        $keyword=$this->input->post('keyword2');
        $query=$this->user_model->getByEmail1($email,$keyword);

        if($query){
            echo  "success";

        }else{
            echo  "fail";
        }

    }

//去注册；
        public function do_login(){
           $email= $this->input->post('email');
           $keyword=$this->input->post('keyword');
            $query=$this->user_model->insert($email,$keyword);
                if($query){

                    $this->load->view('index');
                }
            }
        public function login(){
            $email=$this->input->post("email1");
            $keyword2=$this->input->post("keyword2");
            $session = array(
                'email1'  => $email,

            );

            $this->session->set_userdata($session);
            $query=$this->getAdmin($email);

            if($query->admin){


                redirect("user/admin");
            }else{
                redirect("user/main");
            }

        }
        public function getAdmin($email){
            $query=$this->user_model->getAdmin($email);
            return $query;
        }
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊login页面有关的操作＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
        public function main(){
            $this->load->view("main");
        }
        public function admin(){
            $users=$this->getAllUser();
            $this->load->view('admin',array("data"=>$users));
        }
        public function doRevise(){
            $keyword=$this->input->post('keyword');
            $email=$this->input->post('email');
            $query=$this->user_model->getByemail1($email,$keyword);
            if($query){
                echo "success";
            }else{
                echo "fail";
            }
        }
        public function revise(){
            $email=$this->input->post("email");
            $keyword1=$this->input->post("keyword1");
            $query=$this->user_model->update($email,$keyword1);
            if($query){
                redirect('user/main');
            }
        }
        public function logOut(){
            $email=$this->session->userdata('email1');
            $session = array(
                'email1'  => $email,

            );
            $this->session->unset_userdata($session);
                echo "sucess";




        }


    }






?>
