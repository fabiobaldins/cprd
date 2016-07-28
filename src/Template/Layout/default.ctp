<?php

$system_name = 'Areco - Cadastro de Produtos';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $system_name ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <?= $this->Html->css('base.css') ?>
    <?= $this->Html->css('cake.css') ?>
    <?= $this->Html->css('jquery-ui.min') ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
    <?= $this->Html->script('jquery-3.1.0.min');?>
    <?= $this->Html->script('jquery-ui.min') ?>
    
    <?= $this->Html->script('produtos');?>
   
</head>
<body>

    
    <?= $this->Flash->render() ?>
    
    <?= $this->fetch('content') ?>
    
    <footer>
    </footer>
</body>
</html>