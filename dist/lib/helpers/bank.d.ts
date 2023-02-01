export interface IBank {
    id: string;
    title: string;
}
export declare const BANK: {
    findCard: (card: string) => IBank | null;
    getList: () => IBank[];
};
//# sourceMappingURL=bank.d.ts.map