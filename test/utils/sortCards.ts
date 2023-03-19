export function sortCards(cards: string[]) {
  cards.sort((a, b): any => {
    const aClr = a.slice(0, 1);
    const aNum = a.slice(1);
    const bNum = b.slice(1);
    if (aNum == bNum) {
      if (aClr == 'b') return -1;
      else return 1;
    } else return Number(aNum) - Number(bNum);
  });
}
