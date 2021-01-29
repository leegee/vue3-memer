import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface TextOverlay {
    name: string;
    hidden: boolean;
    text: string;
  }

  interface TextOverlays {
    [text: string]: TextOverlay;
  }

  interface State {
    image: string;
    text: TextOverlays;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
