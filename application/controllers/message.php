<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
      class Message extends CI_Controller{
          public function __construct(){
              parent::__construct();
              $this->load->model('message_model');

          }

          public function message1(){
              $data=$this->getMessage();
              $this->load->view("message",array('data'=>$data));
          }

          public function getMessage(){
              $query=$this->message_model->getAll();
              return $query;
          }
          public function getAllMessage(){
              $query=$this->message_model->getAll();
              echo json_encode($query) ;
          }
          public function doInsert(){

              $address=$this->input->post('address');
              $username=$this->input->post('username');
              $phone=$this->input->post('contact');
              $type=$this->input->post('feedbackType');
              $contents=$this->input->post('content');
              $data=date("Y-m-d H:i:s");

                  $query=$this->message_model->insert($username,$phone,$address,$type,$contents,$data);
                    if($query){
                        $this->message1();
                    }



          }
      }
