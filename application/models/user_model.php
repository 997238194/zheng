<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class User_model extends CI_Model
    {
        public function __construct()
        {
            parent::__construct();
        }
//      注册之前查找用户是否存在
        public function getByEmail($email){

            $query=$this->db->query("select * from user where email='$email'");
            return $query->row();
        }
        public function getAllUser(){
            $query=$this->db->query("select * from user");
            return $query->result();
        }
        public function getByEmail1($email,$keyword){

            $query=$this->db->query("select * from user where email='$email' and keyword='$keyword'");
            return $query->row();
        }
//     用户注册
        public function insert($email,$keyword){
            $query=$this->db->query("insert into user(id,email,keyword,admin) values (null,'$email','$keyword',0)");

            return $query;
        }
       //用户修改密码
        public function update($email,$keyword){
            $query=$this->db->query("update user set keyword='$keyword' where email='$email'");
            return $query;

        }
        //获取医生的所有信息；
        public function getAllOurVetes(){
            $query=$this->db->query("select * from doctor ");
            return $query->result();
        }
        public function getAdmin($email){
            $query=$this->db->query("select admin from user where email='$email'");
            return $query->row();
        }
        public function quanxian($email,$admin){
            $query=$this->db->query("update user set admin='$admin' where email='$email'");

            return $query;
        }
    }
?>