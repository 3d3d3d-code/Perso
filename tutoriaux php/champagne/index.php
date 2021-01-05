<?php

class Mere
{
    protected $_name;
    public function __construct($name)
    {
        $this->_name = $name;
    }

    public function hello()
    {
        echo 'Coucou , je suis la mere : ' . $this->_name.'<br>';
    }
}

class Fille extends Mere
{
    private  $_otherName;
     public function __construct($name,$otherName){
         parent::__construct($name);
         $this->_otherName = $otherName;
     }

     public function hello() 
     {
         echo  'je suis la fille : ' .$this->_name . ' ' .$this->_otherName.'<br>';
     }
}



$mama = new Mere('Katie');
$mama->hello();

$fifille = new Fille('Maude',' LANISSIE ');
$fifille->hello();

?>