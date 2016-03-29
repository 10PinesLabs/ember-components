import Ember from 'ember';

export default Ember.Controller.extend({
  cartas: [
    {
      id: "1",
      Nombre: "Nekusar, the Mindrazer",
      Oracle_text: "At the beginning of each player's draw step, that player draws an additional card.",
      Imagen: "<img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376426&type=card' />"
    }, {
      id: "2",
      Nombre: "Sylvan Yeti",
      Oracle_text: "Sylvan Yeti's power is equal to the number of cards in your hand.",
      Imagen: "<img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=20217&type=card' />"
    }, {
      id: "3",
      Nombre: "Meteorite",
      Oracle_text: "When Meteorite enters the battlefield, it deals 2 damage to target creature or player.",
      Imagen: "<img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383308&type=card' />"
    }
  ],
  cartasSeleccionadas: [],
  cartasSeleccionadasParaTabla: Ember.computed('cartasSeleccionadas', function() {
    return { rows: this.cartasSeleccionadas };
  }),

  buscar: function(que, donde){
    return donde[donde.indexOf(que)];
  },

  actions: {
    editarTabla(hash){
      console.log("Editar", hash);

      debugger;
      var carta = this.buscar(hash.row, this.cartas);
      Ember.set(carta, hash.key, hash.value);

    },
    cancelarEditar(hash){
      console.log("Cancelar", hash);
    }

  }
});
