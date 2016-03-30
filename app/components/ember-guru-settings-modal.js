import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    guardar: function() {
      alert('se llamo guardar en guru settings modal');
    },
    cerrar(){
      alert('close en guru settings modal');
    }
  }
});
