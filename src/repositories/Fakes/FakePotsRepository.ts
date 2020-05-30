import Pots from '../../models/Pots';

interface PotsDTO {
  title: string;
  value: number;
}

class PotsRepository {
  private pots: Pots[] = [];

  public async create({ title, value }: PotsDTO): Promise<PotsDTO> {
    pots = new Pots();
    this.pots.value = value;
    this.pots.title = title;

    return this.pots;
  }
}

export default PotsRepository;
