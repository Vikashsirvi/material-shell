/** Gnome libs imports */
import * as GObject from 'GObject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { SimpleLayout, } from "src/layout/msWorkspace/tilingLayouts/custom/simple";

@registerGObjectClass
export class SimpleHorizontalLayout extends SimpleLayout {
    isVerticalLayout() {
            return false;
        }
}

SimpleHorizontalLayout.state = { key: 'simple-horizontal' };
SimpleHorizontalLayout.label = 'Simple horizontal';
