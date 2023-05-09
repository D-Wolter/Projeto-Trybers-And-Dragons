import Battle from './Battle';
import Character from '../Character';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';

class PVP extends Battle {
  constructor(
    player: Fighter | Character,
    private _player2: Fighter | SimpleFighter | Monster,
  ) {
    super(player);
  }

  fight(): number {
    let round = true;
    while (round) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      if (
        this.player.lifePoints === -1 
        || this._player2.lifePoints === -1
      ) round = false;
    }
    return super.fight();
  }
}

export default PVP;
