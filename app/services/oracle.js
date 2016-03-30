import Ember from 'ember';
import Carta from 'ember-components/models/carta';

export default Ember.Service.extend({
  url: "https://api.deckbrew.com/mtg/cards",

  init() {
    this._super(...arguments);
  },

  encontrarPorNombre(nombre) {
    var self = this;
    return Ember.$.getJSON( this.get('url') + "?name=" + nombre).then(function(response) {
      return response.map(function (child) {
        return self.armarCarta( child );
      });
    });
  },

  armarCarta(carta) {
    return Carta.create({
      id: carta.id,
      Nombre: carta.name,
      Oracle_text: carta.text,
      Imagen: "<img src='" + carta.editions[0].image_url + "' />"
    });
  }
});
