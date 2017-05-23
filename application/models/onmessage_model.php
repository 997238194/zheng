<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Onmessage_model extends CI_Model{
    public function __construct(){

    }
    public function insert($email,$content){
        $query=$this->db->query("insert into onmessage(id,content,username) values (null,'$content','$email')");
        return $query;
    }
    public function getAll($userName){
        $query=$this->db->query("select * from onmessage where username='$userName'");
        return $query->result();
    }
}