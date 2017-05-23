<?php   if ( ! defined('BASEPATH')) exit('No direct script access allowed');

        class Cart_model extends CI_Model
        {
            public function __construct()
            {
                parent::__construct();

            }
            public function insert($shop,$mummoney,$buyid){
                $data=date("Y-m-d H:i:s");
                $random=rand(100000,1000000);

                $string="";
                for( $i=0;$i<count($shop);$i++){
                    for($j=0;$j<count($shop[$i]);$j++){
                        if($j==0){
                            $string.="商品ID：".$shop[$i][$j];
                        }else if($j==1){
                            $string.="商品名称：".$shop[$i][$j];

                        }else{
                            $string.="购买商品数量：".$shop[$i][$j]."/";
                        }


                    }

                }
                $query=$this->db->query("insert into cart(id,customer,total,timer,tranumber,buyshop) values (null,'$buyid','$mummoney','$data',$random,'$string')");
                return $query;


            }
            public function getAll(){
                $query=$this->db->query("select * from cart");
                return $query->result();

            }
            public function getByname($username){
                $query=$this->db->query("select * from cart where customer='$username'");
                return $query->result();
            }
        }
