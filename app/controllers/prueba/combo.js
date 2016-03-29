import Ember from 'ember';

export default Ember.Controller.extend({
  cartas: [
    {
      id: "1",
      text: "Nekusar, the Mindrazer",
      description: "At the beginning of each player's draw step, that player draws an additional card.",
      imagen: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=376426&type=card"
    }, {
      id: "2",
      text: "Sylvan Yeti",
      disabled: true,
      description: "Sylvan Yeti's power is equal to the number of cards in your hand.",
      imagen: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=20217&type=card"
    }, {
      id: "3",
      text: "Meteorite",
      description: "When Meteorite enters the battlefield, it deals 2 damage to target creature or player.",
      imagen: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383308&type=card"
    }
  ],

  actions: {
    editarTabla(hash){
      console.log("Editar", hash);
    },
    cancelarEditar(hash){
      console.log("Cancelar", hash);
    }

  }
});
