import { member } from '../interface/interface';

export class Game {
  creator: string;
  maxMember: number;
  code: string;
  memList: member[] = [];
  isStarted: boolean = false;
  isEnd: boolean = false;
  turn: number = 0;
  numbers: string[] = [
    'w0',
    'w1',
    'w2',
    'w3',
    'w4',
    'w5',
    'w6',
    'w7',
    'w8',
    'w9',
    'w10',
    'w11',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'b10',
    'b11',
  ];
  constructor(memAmount: number, creatorID: string, code: string) {
    this.maxMember = memAmount;
    this.memList.push({ id: creatorID, opend: [], unopend: [] });
    this.code = code;
    this.creator = creatorID;
  }
}
