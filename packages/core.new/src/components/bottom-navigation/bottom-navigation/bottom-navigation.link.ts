import { createLink } from '@app/utils';

const link = createLink({
  scope: (i) => i.connector
})

export const { Action, Inject, Observable, reconnect } = link;