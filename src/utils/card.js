/* career: {
  中立: 1,
  猎人: 2,
  战士: 3,
  法师: 4,
}
  race: {
    无：0，
    鱼人: 1,
    机械: 2,
    野兽: 3,
  }
*/
/* card: {
  hp: 1,
  cost: 2,
  atk: 3,
  career: 4,
  race: 5,
  other:65,
}
*/
import png1 from '@/assets/card/1.png'
import png2 from '@/assets/card/2.png'
import png3 from '@/assets/card/3.png'
import png4 from '@/assets/card/4.png'
import png5 from '@/assets/card/5.png'
import png6 from '@/assets/card/6.png'
import png7 from '@/assets/card/7.png'
import png8 from '@/assets/card/8.png'
import png9 from '@/assets/card/9.png'
import png10 from '@/assets/card/10.png'
import png11 from '@/assets/card/11.png'
import png12 from '@/assets/card/12.png'
import png13 from '@/assets/card/13.png'
import png14 from '@/assets/card/14.png'
import png15 from '@/assets/card/15.png'

const cards = [
  {
    id: 1,
    hp: 1,
    cost: 1,
    atk: 2,
    career: 1,
    race: 1,
    other: {},
    pro: '鱼人袭击者',
    path: png1
  },
  {
    id: 2,
    hp: 3,
    cost: 2,
    atk: 2,
    career: 1,
    race: 3,
    other: {},
    pro: '淡水鳄',
    path: png2
  },
  {
    id: 3,
    hp: 2,
    cost: 2,
    atk: 3,
    career: 1,
    race: 3,
    other: {},
    pro: '迅猛龙',
    path: png3
  },
  {
    id: 4,
    hp: 1,
    cost: 1,
    atk: 2,
    career: 1,
    race: 0,
    other: {},
    pro: '熔岩暴怒者',
    path: png4
  },
  {
    id: 5,
    hp: 1,
    cost: 0,
    atk: 1,
    career: 1,
    race: 0,
    other: {},
    pro: '小精灵',
    path: png5
  },
  {
    id: 6,
    hp: 2,
    cost: 2,
    atk: 3,
    career: 1,
    race: 1,
    other: {},
    pro: '淤泥践踏者',
    path: png6
  },
  {
    id: 7,
    hp: 1,
    cost: 2,
    atk: 4,
    career: 1,
    race: 3,
    other: {},
    pro: '暮色野猪',
    path: png7
  },
  {
    id: 8,
    hp: 5,
    cost: 3,
    atk: 1,
    career: 1,
    race: 0,
    other: {},
    pro: '怨影暴怒者',
    path: png8
  },
  {
    id: 9,
    hp: 2,
    cost: 3,
    atk: 5,
    career: 1,
    race: 0,
    other: {},
    pro: '寒冰暴怒者',
    path: png9
  },
  {
    id: 10,
    hp: 5,
    cost: 4,
    atk: 4,
    career: 1,
    race: 0,
    other: {},
    pro: '冰风雪人',
    path: png10
  },
  {
    id: 11,
    hp: 7,
    cost: 4,
    atk: 2,
    career: 1,
    race: 3,
    other: {},
    pro: '绿洲钳嘴龟',
    path: png11
  },
  {
    id: 12,
    hp: 4,
    cost: 4,
    atk: 5,
    career: 1,
    race: 3,
    other: {},
    pro: '迷失的陆行鸟',
    path: png12
  },
  {
    id: 13,
    hp: 3,
    cost: 4,
    atk: 6,
    career: 1,
    race: 0,
    other: {},
    pro: '狼人欺诈者',
    path: png13
  },
  {
    id: 14,
    hp: 6,
    cost: 5,
    atk: 5,
    career: 1,
    race: 0,
    other: {},
    pro: '深渊斗士',
    path: png14
  },
  {
    id: 15,
    hp: 7,
    cost: 6,
    atk: 6,
    career: 1,
    race: 0,
    other: {},
    pro: '石拳食人魔',
    path: png15
  },
  {
    id: 1,
    hp: 1,
    cost: 1,
    atk: 2,
    career: 1,
    race: 1,
    other: {},
    pro: '鱼人袭击者',
    path: png1
  },
  {
    id: 2,
    hp: 3,
    cost: 2,
    atk: 2,
    career: 1,
    race: 3,
    other: {},
    pro: '淡水鳄',
    path: png2
  },
  {
    id: 3,
    hp: 2,
    cost: 2,
    atk: 3,
    career: 1,
    race: 3,
    other: {},
    pro: '迅猛龙',
    path: png3
  },
  {
    id: 4,
    hp: 1,
    cost: 1,
    atk: 2,
    career: 1,
    race: 0,
    other: {},
    pro: '熔岩暴怒者',
    path: png4
  },
  {
    id: 5,
    hp: 1,
    cost: 0,
    atk: 1,
    career: 1,
    race: 0,
    other: {},
    pro: '小精灵',
    path: png5
  },
  {
    id: 6,
    hp: 2,
    cost: 2,
    atk: 3,
    career: 1,
    race: 1,
    other: {},
    pro: '淤泥践踏者',
    path: png6
  },
  {
    id: 7,
    hp: 1,
    cost: 2,
    atk: 4,
    career: 1,
    race: 3,
    other: {},
    pro: '暮色野猪',
    path: png7
  },
  {
    id: 8,
    hp: 5,
    cost: 3,
    atk: 1,
    career: 1,
    race: 0,
    other: {},
    pro: '怨影暴怒者',
    path: png8
  },
  {
    id: 9,
    hp: 2,
    cost: 3,
    atk: 5,
    career: 1,
    race: 0,
    other: {},
    pro: '寒冰暴怒者',
    path: png9
  },
  {
    id: 10,
    hp: 5,
    cost: 4,
    atk: 4,
    career: 1,
    race: 0,
    other: {},
    pro: '冰风雪人',
    path: png10
  },
  {
    id: 11,
    hp: 7,
    cost: 4,
    atk: 2,
    career: 1,
    race: 3,
    other: {},
    pro: '绿洲钳嘴龟',
    path: png11
  },
  {
    id: 12,
    hp: 4,
    cost: 4,
    atk: 5,
    career: 1,
    race: 3,
    other: {},
    pro: '迷失的陆行鸟',
    path: png12
  },
  {
    id: 13,
    hp: 3,
    cost: 4,
    atk: 6,
    career: 1,
    race: 0,
    other: {},
    pro: '狼人欺诈者',
    path: png13
  },
  {
    id: 14,
    hp: 6,
    cost: 5,
    atk: 5,
    career: 1,
    race: 0,
    other: {},
    pro: '深渊斗士',
    path: png14
  },
  {
    id: 15,
    hp: 7,
    cost: 6,
    atk: 6,
    career: 1,
    race: 0,
    other: {},
    pro: '石拳食人魔',
    path: png15
  }
]

export default cards
