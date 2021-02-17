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
    displayFlex: boolean;
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
    lineHeight: number;
    fontColor: string;
    fontOpacity: number;
    canvasColor: string;
    fontBgColor: string;
    fontBgOpacity: number;
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    text: TextOverlays;
    chosenLayout: string;
    showModal: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
