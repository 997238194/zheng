<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Message_model extends CI_Model{
        public function __construct(){

        }
        public function insert($username,$phone,$address,$type,$contents,$data){
            $query=$this->db->query("insert into message(id,username,phone,address,types,content,times) values (null,'$username',$phone,'$address','$type','$contents','$data')");
            return $query;
        }
        public function getAll(){
            $query=$this->db->query('select * from message  order by times DESC ');
            return $query->result();
        }
    }
?>
