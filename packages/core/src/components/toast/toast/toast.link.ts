import { createLinkV2 } from '@app/utils';

const link = createLinkV2({
    scope: (i) => i.connector
})

export const { Action, Inject, Observable, reconnect } = link;