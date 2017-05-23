<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Serves extends CI_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('serves_model');
        }
        public function index(){
            $query=$this->getAll();
            $this->load->view('serves',array('data'=>$query));
        }
        public function getALL(){
            $query =$this->serves_model->getAll();

            return  $query;
        }
        public function getALL1(){
            $query =$this->serves_model->getAll();
            $query=json_encode($query);
            echo  $query;
        }
        public function insert(){
            $sname=$this->input->post("sname");
            $price=$this->input->post("price");
            $stime=$this->input->post("stime");
            $pepname=$this->input->post("pepname");
            $contact=$this->input->post("contact");
            $img=$this->input->post("img");
            $query=$this->serves_model->insert($sname,$price,$stime,$pepname,$contact,$img);
            if($query){
                echo "success";
            }
        }
        public function del(){
            $id=$this->input->post('id');
            $query=$this->serves_model->del($id);
            if($query){
                echo "success";
            }
        }
        public function upd(){
            $id=$this->input->post("id");
            $sname=$this->input->post("sname");
            $price=$this->input->post("price");
            $stime=$this->input->post("stime");
            $pepname=$this->input->post("pepname");
            $contact=$this->input->post('contact');
            $img=$this->input->post("img");
            $query=$this->serves_model->upd($id,$sname,$price,$stime,$pepname,$contact,$img);
            if($query){
                echo "success";
            }
        }
        public function bookServes(){
            $bookname=$this->input->post('bookname');
            $bookprice=$this->input->post('bookprice');
            $bookemail=$this->input->post('bookemail');
            $bookpho=$this->input->post('bookpho');
            $booktime=$this->input->post('booktime');
            $bookserveid=$this->input->post("bookserveid");
            $query=$this->serves_model->book($bookname,$bookprice,$bookemail,$bookpho,$booktime,$bookserveid);
            if($query){
                echo "sucess";
            }
        }
        public function getAllBook(){
            $query=$this->serves_model->getAllBook();
            if($query){
                echo json_encode($query);
            }
        }

    }