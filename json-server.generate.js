var faker = require('faker');

var database = { productos:[], discos: [], integrantes: [], posts: [], dashboards: [],compras:[]};

var i = 1;
database.compras.push(
  {
    "fecha": "2019-10-14T05:45:08.982Z",
    "items": [
        {
            "id": 3,
            "nombre": "A Kind Of Magic",
            "desc": "\"The film needed their energy.\" Russell Mulcahy – Director Highlander",
            "urlImagen": "./img/akom.jpg",
            "precio": 8457,
            "moneda": "CLP",
            "stock": 3542,
            "cantidad": 4
        },
        {
            "id": 2,
            "nombre": "The Works",
            "desc": "\"We had done some really serious, epic videos in the past, and we just wanted people to know that we didn't take ourselves too seriously, that we could still laugh at ourselves. I think we proved that.\" Roger Taylor on I Want To Break Free",
            "urlImagen": "./img/works.jpg",
            "precio": 21000,
            "moneda": "CLP",
            "stock": 1452,
            "cantidad": 2
        },
        {
            "id": 1,
            "nombre": "Hot Space",
            "desc": "\"New styles, and a whole new sense of values. You’ll love Hot Space ...eventually.\" Record Mirror",
            "urlImagen": "./img/hot-space.jpg",
            "precio": 15000,
            "moneda": "CLP",
            "stock": 8915,
            "cantidad": 1
        }
    ],
    "precioTotal": 90828,
    "cantidadTotal": 7,
    "moneda": "CLP",
    "usuario": "mich022@gmail.com",
    "estado": "enviada",
    "id": 1
  }
  
)

var i=1;
database.productos.push(
  {
    id: 1,
    nombre: "Hot Space",
    desc: "\"New styles, and a whole new sense of values. You’ll love Hot Space ...eventually.\" Record Mirror",
    urlImagen : "./img/hot-space.jpg",
    precio : 15000,
    moneda : "CLP",
    stock : 8915
  }
)
database.productos.push(
{
  id: 2,
  nombre: "The Works",
  desc: "\"We had done some really serious, epic videos in the past, and we just wanted people to know that we didn't take ourselves too seriously, that we could still laugh at ourselves. I think we proved that.\" Roger Taylor on I Want To Break Free",
  urlImagen : "./img/works.jpg",
  precio : 21000,
  moneda : "CLP",
  stock : 1452
})

database.productos.push(
{
  id: 3,
  nombre: "A Kind Of Magic",
  desc: "\"The film needed their energy.\" Russell Mulcahy – Director Highlander",
  urlImagen : "./img/akom.jpg",
  precio : 8457,
  moneda : "CLP",
  stock : 3542
})

var i=1;
database.discos.push({
  id: i++,
  nombre: "Hot Space",
  desc: "\"New styles, and a whole new sense of values. You’ll love Hot Space ...eventually.\" Record Mirror",
  urlImagen : "./img/hot-space.jpg"
});
database.discos.push({
  id: i++,
  nombre: "The Works",
  desc: "\"We had done some really serious, epic videos in the past, and we just wanted people to know that we didn't take ourselves too seriously, that we could still laugh at ourselves. I think we proved that.\" Roger Taylor on I Want To Break Free",
  urlImagen : "./img/works.jpg"
});
database.discos.push({
  id: i++,
  nombre: "A Kind Of Magic",
  desc: "\"The film needed their energy.\" Russell Mulcahy – Director Highlander",
  urlImagen : "./img/akom.jpg"
});

var i=1;
database.integrantes.push({
  id: i++,
  nombre: "Brian May",
  descripcion: "Un buen guitarrista..."
});
database.integrantes.push({
  id: i++,
  nombre: "Freddy Mercury",
  descripcion: "I want to be free"
});
database.integrantes.push({
  id: i++,
  nombre: "John Deacon",
  descripcion: "Virtuoso bajista!"
});
database.integrantes.push({
  id: i++,
  nombre: "Roger Taylor",
  descripcion: "Buen batero!"
});

for (var i=1; i<=10; i++) {
  database.posts.push({
    id: i,
    autor: faker.name.findName(),
    email: faker.internet.email(),
    post: faker.lorem.paragraphs(),
    fechaCreacion: faker.date.recent().toLocaleString()
  });
}


database.dashboards.push({
  id : 1,
  name : "Dashboard for fans",
  key : "dashboard-fan",
  songs : [{
      name : "I Want to Break Free",
      credits : "Freddy Mercury",
      reproductions : faker.random.number(20000)
    },{
      name : "Don't stop me now",
      credits : "Roger Taylor",
      reproductions : faker.random.number(20000)
    },{
      name : "Another One Bites the Dust",
      credits : "John Deacon",
      reproductions : faker.random.number(20000)
    },{
      name : "Somebody to Love",
      credits : "John Deacon",
      reproductions : faker.random.number(20000)
    }
  ],
  albums : [{
    name : "A Night at the Opera",
    reproductions : faker.random.number(20000000)
  },{
    name : "Innuendo",
    reproductions : faker.random.number(20000000)
  },{
    name : "Sheer Heart Attack",
    reproductions : faker.random.number(20000000)
  },{
    name : "News of the World",
    reproductions : faker.random.number(20000000)
  }
  ] 
});


console.log(JSON.stringify(database));