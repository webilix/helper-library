import { reFind, reReplace, reVerify } from '../../lib/shared';

export const testVerify = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`RE ${title}: verify`, () => {
        valid.forEach((value: string) => {
            const test: boolean = reVerify(pattern, value);
            expect(test).toBe(true);
        });

        invalid.forEach((value: string) => {
            const test: boolean = reVerify(pattern, value);
            expect(test).toBe(false);
        });
    });
};

export const testFind = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`RE ${title}: find`, () => {
        const test1: string[] = reFind(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length);

        const test2: string[] = reFind(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length);

        const test3: string[] = reFind(pattern, invalid.join(' '));
        expect(test3.length).toBe(0);

        const test4: string[] = reFind(pattern, invalid.join('\n'));
        expect(test4.length).toBe(0);
    });
};

export const testReplace = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`RE ${title}: replace`, () => {
        const test1: string = reReplace(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length - 1);

        const test2: string = reReplace(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length - 1);

        const test3: string = reReplace(pattern, invalid.join(' '));
        expect(test3).toBe(invalid.join(' '));

        const test4: string = reReplace(pattern, invalid.join('\n'));
        expect(test4).toBe(invalid.join('\n'));
    });
};
