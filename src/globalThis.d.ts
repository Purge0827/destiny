/* eslint-disable @typescript-eslint/consistent-type-definitions */

interface ImportMeta {
  url: string,
}

declare function queueMicrotask (callback: VoidFunction | (() => Promise<void>)): void;

interface HTMLElement {
  attachInternals(): ElementInternals,
}

// TODO: This interface needs a lot of work
interface ElementInternals {
  ariaActiveDescendantElement: null,
  ariaAtomic: null,
  ariaAutoComplete: null,
  ariaBusy: null,
  ariaChecked: null,
  ariaColCount: null,
  ariaColIndex: null,
  ariaColSpan: null,
  ariaControlsElements: null,
  ariaCurrent: null,
  ariaDescribedByElements: null,
  ariaDescription: null,
  ariaDetailsElements: null,
  ariaDisabled: null,
  ariaErrorMessageElement: null,
  ariaExpanded: null,
  ariaFlowToElements: null,
  ariaHasPopup: null,
  ariaHidden: null,
  ariaKeyShortcuts: null,
  ariaLabel: null,
  ariaLabelledByElements: null,
  ariaLevel: null,
  ariaLive: null,
  ariaModal: null,
  ariaMultiLine: null,
  ariaMultiSelectable: null,
  ariaOrientation: null,
  ariaOwnsElements: null,
  ariaPlaceholder: null,
  ariaPosInSet: null,
  ariaPressed: null,
  ariaReadOnly: null,
  ariaRelevant: null,
  ariaRequired: null,
  ariaRoleDescription: null,
  ariaRowCount: null,
  ariaRowIndex: null,
  ariaRowSpan: null,
  ariaSelected: null,
  ariaSetSize: null,
  ariaSort: null,
  ariaValueMax: null,
  ariaValueMin: null,
  ariaValueNow: null,
  ariaValueText: null,
  form?: HTMLFormElement,
  labels?: HTMLLabelElement,
  role: null,
  states: DOMTokenList,
  validationMessage?: string,
  validity?: boolean,
  willValidate?: boolean,
}
