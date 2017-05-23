<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

        class Onmessage extends CI_Controller
        {
            public function __construct()
            {
                parent::__construct();
                $this->load->model('onmessage_model');

            }
            public function insert(){
                $email=$this->input->post('email');
                $content=$this->input->post("content");
                $query=$this->onmessage_model->insert($email,$content);
                if($query){
                    echo "sucess";
                }
            }
            public function getAll(){
                $userName=$this->input->post('userName');
                $query=$this->onmessage_model->getAll($userName);
                echo json_encode($query);
            }

        }