/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<61d8f603f4279c9518fa0043c9c9b34b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type useQueryLoaderReactDoubleEffectsTestUserFragment$fragmentType: FragmentType;
export type useQueryLoaderReactDoubleEffectsTestUserFragment$data = {|
  +name: ?string,
  +$fragmentType: useQueryLoaderReactDoubleEffectsTestUserFragment$fragmentType,
|};
export type useQueryLoaderReactDoubleEffectsTestUserFragment$key = {
  +$data?: useQueryLoaderReactDoubleEffectsTestUserFragment$data,
  +$fragmentSpreads: useQueryLoaderReactDoubleEffectsTestUserFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useQueryLoaderReactDoubleEffectsTestUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "72c07efb1c002b4aee506ebf63936270";
}

module.exports = ((node/*: any*/)/*: Fragment<
  useQueryLoaderReactDoubleEffectsTestUserFragment$fragmentType,
  useQueryLoaderReactDoubleEffectsTestUserFragment$data,
>*/);
