<div>
    <h3><?= h($produto->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th><?= __('Descricao') ?></th>
            <td><?= h($produto->descricao) ?></td>
        </tr>
        <tr>
            <th><?= __('Ativo') ?></th>
            <td><?= h($produto->ativo) ?></td>
        </tr>
        <tr>
            <th><?= __('Id') ?></th>
            <td><?= $this->Number->format($produto->id) ?></td>
        </tr>
        <tr>
            <th><?= __('Saldo') ?></th>
            <td><?= $this->Number->format($produto->saldo) ?></td>
        </tr>
        <tr>
            <th><?= __('Preco') ?></th>
            <td><?= $this->Number->format($produto->preco) ?></td>
        </tr>
        <tr>
            <th><?= __('Ultima Alteracao') ?></th>
            <td><?= h($produto->ultima_alteracao) ?></td>
        </tr>
    </table>
</div>
