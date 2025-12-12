import { shallowRef, onScopeDispose, getCurrentScope } from "vue";
import type { Store } from "nanostores";

export function useStoreSafe<T>(store: Store<T>) {
  const value = store.get?.() ?? (store as any).value;
  const state = shallowRef<T>(value);

  if (import.meta.env.SSR) {
    return state;
  }

  const unsubscribe = store.subscribe((v) => (state.value = v));

  const scope = getCurrentScope();
  if (scope) {
    onScopeDispose(unsubscribe);
  }

  return state;
}
