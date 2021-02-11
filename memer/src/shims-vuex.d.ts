import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {

  interface ComputedStyles {
    fontSize: number;
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
    text: string;
    partOfLayout: string;
    style: ComputedStyles;
  }

  interface TextOverlays {
    [text: string]: TextOverlay;
  }

  interface State {
    image?: string;
    imageOriginal?: string;
    width?: number;
    height?: number;
    fontClass: string;
    fontSizeClass: string;
    fontWeight: string;
    imageSaveSize: string;
    largestSide: number;
    fontColor: string;
    lineHeight: number;
    bgColor: string;
    strokeColor: string;
    strokeWidth: number;
    text: TextOverlays;
    chosenLayout: string;
    showModal: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
