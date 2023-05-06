import { EnergyType } from '../Energy';
import Archtype from './Archetype';

class Warrior extends Archtype {
  private static _counter = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';

    Warrior._counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._counter;
  }
}

export default Warrior;
