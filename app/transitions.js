/**
 * En este archivo se define cómo son las transiciones de los modals de liquid-tether, para poder reutilizarlas en distintas paginas.
 * Created by JP on 3/23/2016.
 */
import { target } from 'liquid-tether';

export default function(){

  this.transition(
    target('hello-world'),
    this.use('tether', ['to-up', {
      duration: 1500,
      easing: 'easeInOutQuint'
    }])
  );

  this.transition(
    target('modal-dialog'),
    this.toValue(({ index: newIndex }, { index: oldIndex }) => newIndex > oldIndex),
    this.use('tether', ['to-left', 'fade', 'fade']),
    this.reverse('tether', ['to-right', 'fade', 'fade'])
  );

  this.transition(
    target('modal-dialog'),
    this.toValue(({ index }) => index === 1),
    this.use('tether', 'fade', 'fade')
  );

  this.transition(
    target('modal-dialog'),
    this.toValue(({ index }) => !index),
    this.use('tether', 'fade', 'fade')
  );
}

