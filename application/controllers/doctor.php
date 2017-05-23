<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Doctor extends  CI_Controller{
    public function __construct(){
        parent::__construct();
        $this->load->model('doctor_model');

    }
    public function getAll(){
        $query=$this->doctor_model->getAll();

        $query=json_encode($query);
        echo $query;
    }
    public function insert(){
        $name=$this->input->post("name");
        $address=$this->input->post("address");
        $salary=$this->input->post("salary");
        $level=$this->input->post("level");
        $field=$this->input->post("field");
        $phone=$this->input->post("phone");
        $email=$this->input->post("email");
        $img=$this->input->post("img");
        $query=$this->doctor_model->insert($name,$address,$salary,$level,$field,$phone,$email,$img);
        if($query){
            echo "success";
        }
    }
    public function update(){
        $id=$this->input->post("id");
        $name=$this->input->post("name");
        $address=$this->input->post("address");
        $salary=$this->input->post("salary");
        $level=$this->input->post("level");
        $field=$this->input->post("field");
        $phone=$this->input->post("phone");
        $email=$this->input->post("email");
        $img=$this->input->post("img");
        $query=$this->doctor_model->update($id,$name,$address,$salary,$level,$field,$phone,$email,$img);
        if($query){
            echo "success";
        }
    }
    public function delet(){
        $id=$this->input->post('id');
        $query=$this->doctor_model->delet($id);
        if($query){
            echo "success";
        }
    }
}