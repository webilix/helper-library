import { Validator } from '@webilix/validator-library';

const list: { id: string; title: string; card: string | string[] }[] = [
    { id: 'EN', title: 'بانک اقتصاد نوین', card: '627412' },
    { id: 'AN', title: 'بانک انصار', card: '627381' },
    { id: 'IZ', title: 'بانک ایران زمین', card: '505785' },
    { id: 'PS', title: 'بانک پارسیان', card: ['622106', '639194', '627884'] },
    { id: 'PG', title: 'بانک پاسارگاد', card: ['639347', '502229'] },
    { id: 'AY', title: 'بانک آینده', card: '636214' },
    { id: 'TJ', title: 'بانک تجارت', card: ['627353', '585983'] },
    { id: 'TT', title: 'بانک توسعه تعاون', card: '502908' },
    { id: 'ED', title: 'بانک توسعه صادرات ایران', card: ['627648', '207177'] },
    { id: 'HK', title: 'بانک حکمت ایرانیان', card: '636949' },
    { id: 'DY', title: 'بانک دی', card: '502938' },
    { id: 'RF', title: 'بانک رفاه کارگران', card: '589463' },
    { id: 'SM', title: 'بانک سامان', card: '621986' },
    { id: 'SP', title: 'بانک سپه', card: '589210' },
    { id: 'SY', title: 'بانک سرمایه', card: '639607' },
    { id: 'SN', title: 'بانک سینا', card: '639346' },
    { id: 'SH', title: 'بانک شهر', card: ['502806', '504706'] },
    { id: 'SD', title: 'بانک صادرات ایران', card: '603769' },
    { id: 'IM', title: 'بانک صنعت و معدن', card: '627961' },
    { id: 'QM', title: 'بانک قرض الحسنه مهر ایران', card: '606373' },
    { id: 'GH', title: 'بانک قوامین', card: '639599' },
    { id: 'KF', title: 'بانک کارآفرین', card: ['627488', '502910'] },
    { id: 'KS', title: 'بانک کشاورزی', card: ['603770', '639217'] },
    { id: 'GD', title: 'بانک گردشگری', card: '505416' },
    { id: 'MK', title: 'بانک مرکزی', card: '636795' },
    { id: 'MS', title: 'بانک مسکن', card: '628023' },
    { id: 'MT', title: 'بانک ملت', card: ['610433', '991975'] },
    { id: 'ML', title: 'بانک ملی', card: '603799' },
    { id: 'MH', title: 'بانک مهر اقتصاد', card: '639370' },
    { id: 'PT', title: 'پست بانک ایران', card: '627760' },
    { id: 'TS', title: 'موسسه اعتباری توسعه', card: '628157' },
    { id: 'KR', title: 'موسسه اعتباری کوثر', card: '505801' },
    { id: 'EM', title: 'مؤسسه اعتباری ملل (عسکریه سابق)', card: '606256' },
    { id: 'RS', title: 'بانک قرض الحسنه رسالت', card: '504172' },
    { id: 'KH', title: 'بانک خاورمیانه', card: '505809' },
];

export interface IBank {
    id: string;
    title: string;
}

export const BANK = {
    findCard: (card: string): IBank | null => {
        if (
            !Validator.VALUE.isString(card) ||
            card.length < 6 ||
            card.length > 16 ||
            (card.length === 16 && !Validator.STRING.isBankCard(card))
        )
            return null;

        const check: string = card.substring(0, 6);
        const bank = list.find((l) => (typeof l.card === 'string' ? [l.card] : l.card).includes(check));
        return bank ? { id: bank.id, title: bank.title } : null;
    },

    getList: (): IBank[] => list.map((l) => ({ id: l.id, title: l.title })),
};
