import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private player1: Fighter,
    private environment: SimpleFighter[] | Fighter[],
  ) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints !== -1
      && this.environment.every((enemy) => enemy.lifePoints !== -1)) {
      this.environment.forEach((enemy) => {
        this.player1.attack(enemy);
        enemy.attack(this.player1);
      });
    }

    return super.fight();
  }
}