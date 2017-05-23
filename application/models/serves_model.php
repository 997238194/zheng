<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Serves_model extends CI_Model{
    public function __construct()
    {
        parent::__construct();
    }
    public function getAll(){
        $query=$this->db->query("select * from serves");
        return $query->result();
    }
    public function getAll1(){
        $query=$this->db->query("select * from serves");
        return $query->result();
    }
    public function insert($sname,$price,$stime,$pepname,$contact,$img){
        $query=$this->db->query("insert into serves(id,sname,price,stime,pepname,contact,img) values (null,'$sname','$price','$stime','$pepname','$contact','$img')");
        return $query;
    }
    public function del($id){
        $query=$this->db->query("delete  from serves where id=$id");
        return $query;
    }
    public function upd($id,$sname,$price,$stime,$pepname,$contact,$img){
        $query=$this->db->query("update serves set
        sname='$sname',price='$price',stime='$stime',
        pepname='$pepname',contact='$contact',
        img='$img' where id=$id ");
        return $query;
    }
    public function book($bookname,$bookprice,$bookemail,$bookpho,$booktime,$bookserveid){
        $query=$this->db->query("insert into book(bookid,bookname,bookprice,bookemail,bookpho,booktime,bookserveid) values
                                                  (null ,'$bookname','$bookprice','$bookemail','$bookpho','$booktime','$bookserveid')");
        return $query;
    }
    public function getAllBook(){
        $query=$this->db->query("select * from book");
        return $query->result();
    }

}
