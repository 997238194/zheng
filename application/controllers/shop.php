<?php   if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Shop extends CI_Controller{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('shop_model');
    }
    public function index(){
        $query=$this->getAll();
        $this->load->view('shop',array("data"=>$query));
    }
    public function getAll(){
        $query=$this->shop_model->getAll();
        return $query;
    }
    public function getAll1(){
        $query=$this->shop_model->getAll();
        $query=json_encode($query);
        echo $query;
    }
    public function del(){
        $id=$this->input->post('id');
        $query=$this->shop_model->del($id);
        if($query){
            echo "success";
        }
    }
    public function upd(){
        $id=$this->input->post("id");
        $name=$this->input->post("name");
        $price=$this->input->post("price");
        $numbers=$this->input->post("numbers");
        $img=$this->input->post("img");
        $query=$this->shop_model->upd($id,$name,$price,$numbers,$img);
        if($query){
            echo "success";
        }
    }
    public function insert(){
        $name=$this->input->post("name");
        $price=$this->input->post("price");
        $time=$this->input->post("time");
        $numbers=$this->input->post("numbers");
        $img=$this->input->post("img");
        $query=$this->shop_model->insert($name,$price,$time,$numbers,$img);
        if($query){
            echo "success";
        }
    }
    public function getCount(){
        $shopnumbers=$this->input->post("numbers");
        $id=$this->input->post('id');
        $query=$this->shop_model->getCount($id);
        if($shopnumbers>$query->numbers){
            echo $query->numbers;
        }else{
            echo "sucess";
        }


    }
    public function updateShop(){
        $shop=$this->input->post("shop");
        $this->shop_model->updateShop($shop);

            echo "sucess";

    }
}