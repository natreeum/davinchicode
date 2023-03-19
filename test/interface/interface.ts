export interface member {
  id: string;
  opend: string[];
  unopend: string[];
}

export interface game {
  maxMember: number;
  memList: member[];
  code: string;
}
