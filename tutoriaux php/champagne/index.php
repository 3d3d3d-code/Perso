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
        echo 'Coucou , je suis la mere : '.this->_name;
    }
}

$mama = new Mere('Katie');
$mama->hello();
