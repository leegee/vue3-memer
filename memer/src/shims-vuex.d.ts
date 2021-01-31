import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {

  interface ComputedStyles {
    [top: string]: string;
    [bottom: string]: string;
    [left: string]: string;
    [right: string]: string;
    [fontSize: string]: string;
    [fontFamily: string]: string;
    [color: string]: string;
    [width: string]: string;
    [height: string]: string;
    [textAlign: string]: string;
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
    width: string;
    height: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
