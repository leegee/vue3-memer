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
    strokeColor: string;
    strokeWidth: number;
  }

  interface TextOverlay {
    id: string;
    text: string;
    partOfLayout: string;
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
    imageSaveSize: string;
    minSize: number;
    fontColor: string;
    text: TextOverlays;
    width: number;
    height: number;
    chosenLayout: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
