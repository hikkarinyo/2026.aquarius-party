import clown from '../../public/images/clown.png'
import dealer from '../../public/images/dealer.png'
import fortune from '../../public/images/fortune.png'
import illusionist from '../../public/images/illusionist.png'
import sprekhstalmeister from '../../public/images/sprekhstalmeister.png'
import strongman from '../../public/images/strongman.png'

export interface Performer {
  name: string;
  description: string;
  image: string;
}

export const PERFORMER_DATA: Performer[] = [
  {
    name: 'Гадалка',
    description: 'Скажет правду, половину выдумает и улыбнётся одинаково.',
    image: fortune,
  },
  {
    name: 'Силач',
    description: 'Испытай свои силы и узнай, насколько ты сильный… или хотя бы попробуй!',
    image: strongman,
  },
  {
    name: 'Клоун',
    description: 'Попадёшь в цель — уйдёшь с красным носом.',
    image: clown,
  },
  {
    name: 'Торговец всячиной',
    description: 'Продаст воздух, если вы не заметите подвоха!',
    image: dealer,
  },
  {
    name: 'Иллюзионист',
    description: 'Путает реальность, правила и шансы на победу.',
    image: illusionist,
  },
  {
    name: 'Егерьшталмейстер',
    description: 'Испытания, где важно удержать равновесие… и самообладание.',
    image: sprekhstalmeister,
  },
]
