import { h } from '@stencil/core';
import { createTunnel } from '@app/utils/tunnel';
export interface TabsTunnelState {
  active?: string,
  request?: (value: string) => void
}

export const TabsTunnel = createTunnel<TabsTunnelState>(
  {},
  (subscribe, child) => <plus-tunnel-consumer subscribe={subscribe} renderer={child} />
);