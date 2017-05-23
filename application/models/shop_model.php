<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Shop_model extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function getAll(){
        $query=$this->db->query("select * from shop");
        return $query->result();
    }
    public function getAll1(){

    }
    public function del($id){
        $query=$this->db->query("delete  from shop where id=$id");
        return $query;
    }
    public function upd($id,$name,$price,$numbers,$img){
        $query=$this->db->query("update shop set
        sname='$name',price=$price,numbers=$numbers,
        img='$img' where id=$id ");
        return $query;
    }
    public function insert($name,$price,$time,$numbers,$img){
        $query=$this->db->query("insert into shop(id,sname,price,stime,numbers,img) values (null,'$name',$price,'$time',$numbers,'$img')");
        return $query;
    }
    public function getCount($id){
        $query=$this->db->query("select numbers from shop where id='$id' ");
        return $query->row();
    }
    public function updateShop($shop){
        for($i=0;$i<count($shop);$i++){
            for($j=0;$j<count($shop[$i]);$j++){
                if($j==0){
                    $id=$shop[$i][$j];

                }else if($j==2){
                    $count=$shop[$i][$j];

                    $this->db->query("update shop set numbers=numbers-$count
         where id=$id ");
                }



            }
        }
    }
}