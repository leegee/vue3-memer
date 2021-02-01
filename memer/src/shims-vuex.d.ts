import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {

  interface ComputedStyles {
    fontSize: string;
    fontFamily: string;
    textAlign: string;
    color: string;
    top: number | null;
    bottom: number | null;
    left: number | null;
    right: number | null;
    width: number;
    height: number;
  }

  interface TextOverlay {
    id: string;
    hidden: boolean;
    text: string;
    style: ComputedStyles;
  }

  interface TextOverlays {
    [text: string]: TextOverlay;
  }

  interface State {
    image: string;
    imageOriginal: string;
    fontClass: string;
    fontSizeClass: string;
    fontWeightClass: string;
    text: TextOverlays;
    width: number;
    height: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
