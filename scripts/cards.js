let compras = new Vue({
    el: "#compras",
    data:{
        carrito: [],
        suma: 0
    },
    methods:{
        Eliminar: function(id){
            console.log(id);
            this.carrito.splice(id,1);
            this.Sumar();
        },
        Sumar: function(){
            aux = 0
            this.carrito.forEach(element => {
                aux += element.precio;
            });
            this.suma = aux;
        },
        Comprar: function(){
            alert("Su compra fue realizada con exito, el monto total fue $"+this.suma+",00.");
            this.carrito = [];
            suma = 0;
        }
    }
});

let cards = new Vue({
    el: "#cards",
    data:{
        items: [
            {
                nombre: "Azucar",
                precio: 150
            },
            {
                nombre: "Edulcorante",
                precio: 125
            },
            {
                nombre: "Cacao",
                precio: 200
            },
            {
                nombre: "Vitaminas",
                precio: 450
            },
            {
                nombre: "Complementos",
                precio: 350
            },
            {
                nombre: "Pastas celiacas",
                precio: 770
            },
            {
                nombre: "Sal de potacio",
                precio: 666
            },
            {
                nombre: "Gomitas",
                precio: 60
            },
            {
                nombre: "Alfajores dieteticos",
                precio: 333
            },
            {
                nombre: "azucar",
                precio: 510
            },
            {
                nombre: "Edulcorante",
                precio: 269
            },
            {
                nombre: "Cacao",
                precio: 460
            },
            {
                nombre: "Vitaminas",
                precio: 963
            },
            {
                nombre: "Complementos",
                precio: 741
            },
            {
                nombre: "Pastas celiacas",
                precio: 326
            },
            {
                nombre: "Sal de potacio",
                precio: 642
            },
            {
                nombre: "Gomitas",
                precio: 378
            },
            {
                nombre: "Alfajores dieteticos",
                precio: 951
            }
        ]
    },
    methods:{
        Agregar: function(id){
            console.log(id);
            compras.carrito.push(this.items[id]);
            compras.Sumar();
        }
    }
});