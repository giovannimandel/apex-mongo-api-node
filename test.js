const { MongoClient } = require('mongodb');

// URL de conexão
const url = 'mongodb://localhost:27017';
// Nome do banco de dados
const dbName = 'meuBancoDeDados';

async function connectToMongoDB() {
    const client = new MongoClient(url);

    try {
        console.log("Tentando conectar ao MongoDB...");
        await client.connect();
        console.log("Conectado ao MongoDB com sucesso!");
        
        const db = client.db(dbName);
        // Realize operações com o banco de dados aqui...

    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
    } finally {
        await client.close();
    }
}

connectToMongoDB();
