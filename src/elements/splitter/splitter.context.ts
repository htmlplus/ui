import { PlusCore } from "@/core";

export interface SplitterContext {
  register(child: PlusCore): void;
  unregister(child: PlusCore): void;
}
