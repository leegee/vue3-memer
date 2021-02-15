/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ClipboardItem {
  items: Array<ClipboardItem>;
}

declare var ClipboardItem: {
  prototype: ClipboardItem;
  new(objects: Record<string, Blob>): ClipboardItem;
};

interface Clipboard {
  read?(): Promise<Array<ClipboardItem>>;

  write?(items: Array<ClipboardItem>): Promise<void>;
}
