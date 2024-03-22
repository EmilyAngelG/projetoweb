const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos", {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})


//IMPORTANTE: A etapa a seguir é responsavel pela criação das tabelas definidas acima
//Agendamentos.sync({force: true})
/*
O comando acima possui a seguinte função por padrão:

Executing (default): DROP TABLE IF EXISTS `agendamentos`;
Executing (default): CREATE TABLE IF NOT EXISTS `agendamentos` 
(`id` INTEGER NOT NULL auto_increment , `nome` VARCHAR(255), `telefone` INTEGER, 
`origem` VARCHAR(255), `data_contato` DATETIME, `observacao` TEXT, `createdAt` DATETIME NOT NULL, 
`updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

Por isso só deve ser executada uma vez. Descomente, execute e depois comente novamente
*/
module.exports = Agendamentos