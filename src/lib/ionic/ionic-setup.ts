import { initialize } from "@ionic/core/components"

import defineCustomElement from './ionic-custom-element'

export default function ionicSetup() {
  initialize()
  defineCustomElement()
}
