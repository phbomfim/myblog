---
title: Learning MongoDB
date: "2021-06-29"
tags: ["mongodb","linux"]
published: true
description: ""
---

### Main commands

- Criar uma coleção:
```
    db.createCollection("alunos")
```

- Inserir objetos para esta coleção:
```
    db.alunos.insert({
        "nome": "Felipe",
        "data_nascimento": new Date(1994, 02, 26),
        "curso": {
            "nome": "Sistemas de informação"
        },
        "notas": [10.0, 9.0, 4.5],
        "habilidades": [{
            "nome": "inglês",
            "nível": "avançado"
        }, {
            "nome": "taekwondo",
            "nível": "básico"
        }]
    })
```

- Remover um elemento específico:
```
    db.alunos.remove({
        "_id" : ObjectId ("56cb0002b6d75ec12f75d3b5")
    })
```

- Listar todos os registros:
``` 
    db.alunos.find()
```

- Listar os registros de forma formatada:
```
    db.alunos.find().pretty()
```

- Encontrar um registro específico:
```
    db.alunos.find(
        {
            nome : "Fulano"
            habilidades.nome : "Inglês"
        }
    )
```

- Utilizando o operador OR para busca:
```
    db.alunos.find(
        {
            $or : [
                {curso.nome : "TI"},
                {curso.nome : "Bi de Tecnologia"}
            ]
        }
    )
```

- Utilizando o método AND para busca:
```
    db.alunos.find(
        {
            $or : [
                {curso.nome : "TI"},
                {curso.nome : "Bi de Tecnologia"}
            ],
            curso.nome : "Ciência da Computação"
        }
    )
```

- Utilizando o operador IN para busca:
```
    db.alunos.find(
        {
            curso.nome : { $in: ["TI", "Bi de Tecnologia"] }
        }
    )
```

- Atualizar campo de um registro
```
    db.alunos.update(
        {curso.nome : "Sistema de informação},
        {
            $set : {
                curso.nome : "Sistemas de informação"
            }
        }
    )
```

- Atualizar campo de diversos registros
```
    db.alunos.update(
        {curso.nome : "Sistema de informação},
        {
            $set : {
                curso.nome : "Sistemas de informação"
            }
        }, {
            multi : true
        }
    )
```

- Adiciona um registro dentro de um array de registros
```
    db.alunos.update(
        {_id : ObjectId("...")},
        {
            $push : {
                notas : 8.5
            }
        }
    )
```

- Adiciona registros dentro de um array de registros
```
    db.alunos.update(
        {_id : ObjectId("...")},
        {
            $push : {
                notas : { $each : [8.5, 3] }
            }
        }
    )
```

- Busca comparando valores (greater_than)
```
    db.alunos.find({
        notas : { $gt : 5}
    })
```

- Ordenando uma busca crescente (1) ou decrescente (-1)

```
    db.alunos.find().sort({"nome" : 1}) 
```

- Limitando uma listagem
```
    db.alunos.find().sort({"nome" : 1}).limit(3)
```