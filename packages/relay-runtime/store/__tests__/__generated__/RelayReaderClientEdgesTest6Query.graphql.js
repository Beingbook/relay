/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<783cfd5bca4c5317a1929891b8cd53d5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type UserClientEdgeResolver$key = any;
import userClientEdgeResolver from "../resolvers/UserClientEdgeResolver.js";
// Type assertion validating that `userClientEdgeResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userClientEdgeResolver: (
  rootKey: UserClientEdgeResolver$key, 
) => mixed);
export type RelayReaderClientEdgesTest6Query$variables = {||};
export type RelayReaderClientEdgesTest6Query$data = {|
  +me: ?{|
    +the_alias: ?{|
      +name: ?string,
    |},
  |},
|};
export type RelayReaderClientEdgesTest6Query = {|
  response: RelayReaderClientEdgesTest6Query$data,
  variables: RelayReaderClientEdgesTest6Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "RelayReaderClientEdgesTest6Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ClientEdgeToServerObject",
            "operation": require('./ClientEdgeQuery_RelayReaderClientEdgesTest6Query_me__the_alias.graphql'),
            "backingField": {
              "alias": "the_alias",
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserClientEdgeResolver"
              },
              "kind": "RelayResolver",
              "name": "client_edge",
              "resolverModule": require('./../resolvers/UserClientEdgeResolver.js'),
              "path": "me.the_alias"
            },
            "linkedField": {
              "alias": "the_alias",
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "client_edge",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReaderClientEdgesTest6Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "80412f2805c0f96efd2fb86ce6ef3008",
    "id": null,
    "metadata": {},
    "name": "RelayReaderClientEdgesTest6Query",
    "operationKind": "query",
    "text": "query RelayReaderClientEdgesTest6Query {\n  me {\n    ...UserClientEdgeResolver\n    id\n  }\n}\n\nfragment UserClientEdgeResolver on User {\n  name\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "9b8dd5eefbc4ad7a0eb7a42257b6abb5";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderClientEdgesTest6Query$variables,
  RelayReaderClientEdgesTest6Query$data,
>*/);
