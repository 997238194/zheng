<?php   if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Cart extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->model('cart_model');
        }
        public function insert(){
            $buyid=$this->input->post('buyid');
            $shop=$this->input->post('shop');

            $mummoney=$this->input->post("mummoney");
            $query=$this->cart_model->insert($shop,$mummoney,$buyid);
            if($query){
                echo "sucess";
            }
        }
        public function getAll(){
            $query=$this->cart_model->getAll();
            echo json_encode($query);
        }
        public function getByname(){
            $username=$this->input->post("username");
            $query=$this->cart_model->getByname($username);
            echo json_encode($query);
        }
    }