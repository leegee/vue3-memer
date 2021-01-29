import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComputedStyles {
    top: string;
    bottom: string;
    left: string;
    right: string;
    fontSize: string;
    fontFamily: string;
  }

  interface TextOverlay {
    id: string;
    hidden: boolean;
    text: string;
    style: ComputedStyles;// CSSStyleDeclaration 
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
