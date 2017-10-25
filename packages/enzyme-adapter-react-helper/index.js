import Enzyme from 'enzyme';

export default function setupEnzymeAdapter(options = {}) {
  let Adapter;

  try {
    Adapter = require('enzyme-adapter-react-16');
  } catch (e) {
    try {
      Adapter = require('enzyme-adapter-react-15');
    } catch (e) {
      try {
        Adapter = require('enzyme-adapter-react-15.4');
      } catch (e) {
        try {
          Adapter = require('enzyme-adapter-react-14');
        } catch (e) {
          try {
            Adapter = require('enzyme-adapter-react-13');
          } catch (e) {
            throw new Error('It seems as though you don\'t have enzyme-adapter-react installed. Please install the relevant version and try again.');
          }
        }
      }
    }
  }

  Enzyme.configure({
    adapter: new Adapter(),
    ...options,
  });
}
