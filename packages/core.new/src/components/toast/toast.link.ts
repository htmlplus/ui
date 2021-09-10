import { createLink } from '@app/services';

const link = createLink({
  scope: (i) => i.connector
})

export const { Action, Inject, Observable, reconnect } = link;