import { BANK } from '../../lib/helpers/bank';

test('BANK: findCard', () => {
    expect(BANK.findCard('502229')?.id).toBe('PG');
    expect(BANK.findCard('5022290000000000')?.id).toBe('PG');
    for (let digit = 1; digit < 10; digit++) {
        const card: string = `502229000000000${digit}`;
        expect(BANK.findCard(card)).toBe(null);
    }
});

test('BANK: getList', () => {
    expect(BANK.getList().length).toBe(35);

    const list: string[] = BANK.getList()
        .map((b) => b.id)
        .filter((id: string, index: number, arr: string[]) => arr.indexOf(id) === index);
    expect(BANK.getList().length === list.length).toBe(true);
});
