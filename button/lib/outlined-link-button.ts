/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html, TemplateResult} from 'lit';
import {ClassInfo} from 'lit/directives/class-map';

import {LinkButton} from './link-button';

/** @soyCompatible */
export class OutlinedLinkButton extends LinkButton {
  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-button--outlined': true,
    };
  }

  /** @soyTemplate */
  protected override renderOutline(): TemplateResult {
    return html`<span class="md3-button__outline"></span>`;
  }
}
