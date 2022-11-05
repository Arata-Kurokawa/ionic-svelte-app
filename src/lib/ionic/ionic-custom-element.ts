
import { defineCustomElement as defineCustomElementIonApp } from "@ionic/core/components/ion-app"
import { defineCustomElement as defineCustomElementIonNav } from "@ionic/core/components/ion-nav"
import { defineCustomElement as defineCustomElementIonTabs } from "@ionic/core/components/ion-tabs"
import { defineCustomElement as defineCustomElementIonTab } from "@ionic/core/components/ion-tab"
import { defineCustomElement as defineCustomElementIonTabBar } from "@ionic/core/components/ion-tab-bar"
import { defineCustomElement as defineCustomElementIonTabButton } from "@ionic/core/components/ion-tab-button"
import { defineCustomElement as defineCustomElementIonHeader } from "@ionic/core/components/ion-header"
import { defineCustomElement as defineCustomElementIonToolbar } from "@ionic/core/components/ion-toolbar"
import { defineCustomElement as defineCustomElementIonContent } from "@ionic/core/components/ion-content"
import { defineCustomElement as defineCustomElementIonFooter } from "@ionic/core/components/ion-footer"
import { defineCustomElement as defineCustomElementIonModal } from "@ionic/core/components/ion-modal"
import { defineCustomElement as defineCustomElementIonIcon } from "@ionic/core/components/ion-icon"
import { defineCustomElement as defineCustomElementIonLabel } from "@ionic/core/components/ion-label"

export default function defineCustomElement() {
  defineCustomElementIonApp()
  defineCustomElementIonNav()
  defineCustomElementIonTabs()
  defineCustomElementIonTab()
  defineCustomElementIonTabBar()
  defineCustomElementIonTabButton()
  defineCustomElementIonHeader()
  defineCustomElementIonToolbar()
  defineCustomElementIonContent()
  defineCustomElementIonFooter()
  defineCustomElementIonModal()
  defineCustomElementIonIcon()
  defineCustomElementIonLabel()
}
