import { ColorFormats } from '../shared';

import { IS } from '../is';
import { RE } from '../re';

export const COLOR = {
    getFormat: (color: string): ColorFormats | null =>
        !IS.STRING.color(color)
            ? null
            : RE.HEX_COLOR.verify(color)
            ? 'HEX'
            : RE.HSL_COLOR.verify(color)
            ? 'HSL'
            : RE.RGB_COLOR.verify(color)
            ? 'RGB'
            : null,
};
