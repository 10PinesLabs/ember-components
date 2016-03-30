export function initialize(application) {
  application.inject('route', 'oracle', 'service:oracle');
}

export default {
  name: 'oracle',
  initialize: initialize
};
