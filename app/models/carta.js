import Ember from 'ember';

export default Ember.Object.extend({
  id: null,
  Nombre: null,
  Oracle_text: null,
  Imagen: null,

  cambioAlgo: Ember.observer('Oracle_text', function(){
    console.log("Cambio el texto", this);
  })
});
