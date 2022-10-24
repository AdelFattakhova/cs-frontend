class Structure {
  constructor(fields) {
    this.struct = fields.reduce((struct, field) => {
      struct[field] = null;
      return struct;
    }, {})
  }

  set(key, value) {
    if (this.struct.hasOwnProperty(key)) {
      this.struct[key] = value;
    } else {
      throw new Error('This struct does not contain such a field');
    }
  }

  get(key) {
    return this.struct[key];
  }
}

const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);
console.log(jackBlack);

console.log(jackBlack.get('name')); // 'Jack'
