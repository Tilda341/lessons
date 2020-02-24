const womanBag = {
  lipstic: 'red',
  mirrow: 'one',
  poket: 'black',
  phone: 'nokia',
  deleteProperty(name) {
    delete this[name];
  },
  addProperty(name, property) {
    this[name] = property;
  },
};
