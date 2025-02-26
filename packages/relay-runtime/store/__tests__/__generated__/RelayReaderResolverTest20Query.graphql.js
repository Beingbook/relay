/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ff21ddd768f4c6a8e1fc3edbeea9420c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type UserProfilePictureResolver$key = any;
import userUserProfilePictureUriWithScaleResolver from "../resolvers/UserProfilePictureResolver.js";
// Type assertion validating that `userUserProfilePictureUriWithScaleResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userUserProfilePictureUriWithScaleResolver: (
  rootKey: UserProfilePictureResolver$key, 
  args: {|
    scale: ?number,
  |}, 
) => mixed);
export type RelayReaderResolverTest20Query$variables = {|
  scale: number,
|};
export type RelayReaderResolverTest20Query$data = {|
  +me: ?{|
    +profile_picture: ?$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriWithScaleResolver>,
  |},
|};
export type RelayReaderResolverTest20Query = {|
  response: RelayReaderResolverTest20Query$data,
  variables: RelayReaderResolverTest20Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scale"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "scale",
    "variableName": "scale"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTest20Query",
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
            "alias": "profile_picture",
            "args": null,
            "fragment": {
              "args": (v1/*: any*/),
              "kind": "FragmentSpread",
              "name": "UserProfilePictureResolver"
            },
            "kind": "RelayResolver",
            "name": "user_profile_picture_uri_with_scale",
            "resolverModule": require('./../resolvers/UserProfilePictureResolver.js'),
            "path": "me.profile_picture"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayReaderResolverTest20Query",
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
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profile_picture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "uri",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
    "cacheID": "c87d87f80e35aabd9a83e608d16f9e16",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTest20Query",
    "operationKind": "query",
    "text": "query RelayReaderResolverTest20Query(\n  $scale: Float!\n) {\n  me {\n    ...UserProfilePictureResolver_Z91dU\n    id\n  }\n}\n\nfragment UserProfilePictureResolver_Z91dU on User {\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "77f5046dafc58a2c51365cc2d137462a";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTest20Query$variables,
  RelayReaderResolverTest20Query$data,
>*/);
