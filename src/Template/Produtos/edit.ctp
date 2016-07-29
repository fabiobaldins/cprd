<div>
    <?= $this->Form->create($produto) ?>
    <fieldset>
        <legend>Editar Produto</legend>
        <?php
            echo $this->Form->input('descricao');
            echo $this->Form->input('saldo');
            echo $this->Form->input('preco');
            echo $this->Form->input('ativo');
            echo $this->Form->input('ultima_alteracao');
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
