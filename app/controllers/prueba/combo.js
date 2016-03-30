import Ember from 'ember';

export default Ember.Controller.extend({
  oracle: Ember.inject.service(),

  cartas: [],
  cartasSeleccionadas: [],
  cartasSeleccionadasParaTabla: Ember.computed('cartasSeleccionadas', function() {
    return { rows: this.cartasSeleccionadas };
  }),

  buscar: function(que, donde){
    return donde[donde.indexOf(que)];
  },

  actions: {
    editarTabla(hash){
      console.log("Editar", hash, this.cartas);

      var carta = this.buscar(hash.row, this.cartas);
      Ember.set(carta, hash.key, hash.value);

    },
    cancelarEditar(hash){
      console.log("Cancelar", hash);
    },

    buscarCartas(query, deferred){
      var self = this;

      self.get('oracle').encontrarPorNombre(query.term).then(function(cartas){
          self.set('cartas', cartas);
          deferred.resolve(cartas);
        }, deferred.reject
      );
    }
  }
});
