import { uuid } from 'uuidv4';

import Pots from '../../models/Pots';

interface PotsDTO {
  id: string;
  title: string;
  value: number;
}

class PotsRepository {
  private pots: Pots[] = [];

  public async create({ title, value }: PotsDTO): Promise<PotsDTO> {
    const pots = new Pots();

    Object.assign(pots, { id: uuid(), value, title });

    this.pots.push(pots);
    return pots;
  }

  public async findPots(): Promise<Pots[]> {
    return this.pots;
  }

  public async findEspecifcPots({ id }: PotsDTO): Promise<Pots | undefined> {
    const findPots = this.pots.find(pot => pot.id === id);
    return findPots;
  }

  public async updatePots({ id, title, value }: PotsDTO): Promise<Pots> {
    const findPot = this.pots.find(pot => pot.id === id);

    const updatedPot = Object.assign(findPot, { id, title, value });

    return updatedPot;
  }
}

export default PotsRepository;
