const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/agencia_turismo', {
}).then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});

app.use(express.json());



const CidadeSchema = new Schema({
    name: String
})
const cidade = mongoose.model('cidade', CidadeSchema)

// Exemplo de esquema e modelo
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    name: String,
    price: Number
});

const Item = mongoose.model('Item', ItemSchema);

// Criar endpoints RESTful
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/items', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
