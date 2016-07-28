<div class="produtos index large-9 medium-8 columns content">
    <h3><?= __('Produtos') ?></h3>
    <?=$this->Form->button('Novo', array('type' => 'button', 'onclick' => 'newprd();'));?>
    <?=$this->Form->button('Editar', array('type' => 'button', 'onclick' => 'editprod();'));?>
    <?=$this->Form->button('Excluir', array('type' => 'button', 'onclick' => 'delprd();'));?>
    
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr> 
                <th><?= $this->Form->input('produtos[]', ['type' => 'checkbox', 'label'=>false, 'onclick'=>'checkall(this.checked);']); ?></th>
                <th><?= $this->Paginator->sort('id') ?></th>
                <th><?= $this->Paginator->sort('descricao') ?></th>
                <th><?= $this->Paginator->sort('saldo') ?></th>
                <th><?= $this->Paginator->sort('preco') ?></th>
                <th><?= $this->Paginator->sort('ativo') ?></th>
                
                <!--<th class="actions"><?= __('Actions') ?></th> -->
            </tr>
        </thead>
        <tbody>
            <?php foreach ($produtos as $produto): ?>
            <script>
            	var idprodutos = <?=$produto->id?>;
            </script>
            
            <tr>
            	<td><?= $this->Form->input('produtos[]', ['type' => 'checkbox', 'label'=>false, 'value'=>$produto->id]); ?></th>
                <td><?= $this->Number->format($produto->id) ?></td>
                <td><?= h($produto->descricao) ?></td>
                <td><?= $this->Number->format($produto->saldo) ?></td>
                <td><?= $this->Number->format($produto->preco) ?></td>
                <td><?= $this->Form->input('ativos[]', ['type' => 'checkbox', 'label'=>false, 'onclick'=>'ativaprod(idprodutos);']); ?></td>
                
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $produto->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $produto->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $produto->id], ['confirm' => __('Are you sure you want to delete # {0}?', $produto->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
        </ul>
        <p><?= $this->Paginator->counter() ?></p>
    </div>
</div>