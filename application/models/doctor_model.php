<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Doctor_model extends CI_Model{
    public function __construct(){

    }
    public function getAll(){
        $query=$this->db->query("select * from doctor");
        return $query->result();
    }
    public function insert($name,$address,$salary,$level,$field,$phone,$email,$img){
        $query=$this->db->query("insert into doctor(id,dname,address,salary,levels,field,phone,email,img) values (null,'$name','$address',$salary,$level,'$field','$phone','$email','$img')");
        return $query;
    }
    public function delet($id){
        $query=$this->db->query("delete  from doctor where id=$id");
        return $query;
    }
    public function update($id,$name,$address,$salary,$level,$field,$phone,$email,$img){
        $query=$this->db->query("update doctor set
        dname='$name',address='$address',salary=$salary,levels=$level,
        field='$field',phone='$phone',email='$email',img='$img'
        where id=$id ");
        return $query;
    }
}