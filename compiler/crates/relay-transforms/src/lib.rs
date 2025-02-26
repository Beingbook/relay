/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#![deny(warnings)]
#![deny(rust_2018_idioms)]
#![deny(clippy::all)]
#![deny(clippy::clone_on_ref_ptr)]
#![allow(clippy::comparison_chain)]

mod applied_fragment_name;
mod apply_custom_transforms;
mod apply_fragment_arguments;
mod apply_transforms;
mod assignable_fragment_spread;
mod client_edges;
mod client_extensions;
mod connections;
mod declarative_connection;
mod defer_stream;
mod directive_finder;
mod errors;
mod flatten;
mod fragment_alias_directive;
mod generate_data_driven_dependency_metadata;
mod generate_id_field;
mod generate_live_query_metadata;
mod generate_typename;
mod handle_fields;
mod hash_arguments;
mod inline_data_fragment;
mod inline_fragments;
mod mask;
mod match_;
mod metadata_directive;
mod murmurhash;
mod no_inline;
mod preloadable_directive;
mod provided_variable_fragment_transform;
mod react_flight;
mod refetchable_fragment;
mod relay_actor_change;
mod relay_client_component;
mod relay_directive;
mod relay_node_identifier;
mod relay_resolvers;
mod remove_base_fragments;
mod required_directive;
mod root_variables;
mod skip_client_directives;
mod skip_client_extensions;
mod skip_null_arguments_transform;
mod skip_redundant_nodes;
mod skip_split_operation;
mod skip_unreachable_node;
mod sort_selections;
mod test_operation_metadata;
mod transform_connections;
mod unwrap_custom_directive_selection;
mod util;
mod validate_operation_variables;
mod validations;

use intern::string_key::StringKey;
use intern::BuildIdHasher;
use std::collections::{HashMap, HashSet};

pub use metadata_directive::{create_metadata_directive, INTERNAL_METADATA_DIRECTIVE};

/// Name of an executable operation
type OperationName = StringKey;

// NOTE: Types are based on intern::string_key::{StringKeyMap, StringKeySet}
pub type DependencyMap = HashMap<OperationName, DependencySet, BuildIdHasher<u32>>;
pub type DependencySet = HashSet<OperationName, BuildIdHasher<u32>>;

pub use crate::errors::{ValidationMessage, ValidationMessageWithData};
pub use applied_fragment_name::get_applied_fragment_name;
pub use apply_custom_transforms::{
    BaseFragmentNames, CustomTransform, CustomTransforms, CustomTransformsConfig,
};
pub use apply_fragment_arguments::{apply_fragment_arguments, NoInlineFragmentSpreadMetadata};
pub use apply_transforms::{apply_transforms, Programs};
pub use assignable_fragment_spread::{
    transform_assignable_fragment_spreads_in_regular_queries,
    transform_assignable_fragment_spreads_in_updatable_queries, validate_assignable_directive,
    validate_updatable_directive, validate_updatable_fragment_spread, TypeConditionInfo,
    ASSIGNABLE_DIRECTIVE, ASSIGNABLE_DIRECTIVE_FOR_TYPEGEN, UPDATABLE_DIRECTIVE,
    UPDATABLE_DIRECTIVE_FOR_TYPEGEN,
};
pub use client_edges::{
    client_edges, remove_client_edge_selections, ClientEdgeGeneratedQueryMetadataDirective,
    ClientEdgeMetadata, ClientEdgeMetadataDirective, CLIENT_EDGE_GENERATED_FRAGMENT_KEY,
    CLIENT_EDGE_SOURCE_NAME, CLIENT_EDGE_WATERFALL_DIRECTIVE_NAME,
};
pub use client_extensions::{client_extensions, CLIENT_EXTENSION_DIRECTIVE_NAME};
pub use connections::{
    extract_connection_metadata_from_directive, ConnectionConstants, ConnectionInterface,
    ConnectionMetadata,
};
pub use declarative_connection::transform_declarative_connection;
pub use defer_stream::{
    transform_defer_stream, DeferDirective, StreamDirective, DEFER_STREAM_CONSTANTS,
};
pub use directive_finder::DirectiveFinder;
pub use flatten::flatten;
pub use fragment_alias_directive::{fragment_alias_directive, FragmentAliasMetadata};
pub use generate_data_driven_dependency_metadata::{
    generate_data_driven_dependency_metadata, RelayDataDrivenDependencyMetadata,
};
pub use generate_id_field::generate_id_field;
pub use generate_live_query_metadata::generate_live_query_metadata;
pub use generate_typename::{generate_typename, TYPE_DISCRIMINATOR_DIRECTIVE_NAME};
pub use handle_fields::{
    extract_handle_field_directives, extract_values_from_handle_field_directive,
    handle_field_transform,
};
pub use hash_arguments::hash_arguments;
pub use inline_data_fragment::{
    inline_data_fragment, InlineDirectiveMetadata, INLINE_DIRECTIVE_NAME,
};
pub use inline_fragments::inline_fragments;
pub use mask::mask;
pub use match_::{
    split_module_import, transform_match, transform_subscriptions, ModuleMetadata,
    SplitOperationMetadata, DIRECTIVE_SPLIT_OPERATION, MATCH_CONSTANTS,
};
pub use no_inline::NO_INLINE_DIRECTIVE_NAME;
pub use preloadable_directive::{is_operation_preloadable, should_generate_hack_preloader};
pub use provided_variable_fragment_transform::provided_variable_fragment_transform;
pub use react_flight::{
    react_flight, ReactFlightLocalComponentsMetadata, REACT_FLIGHT_SCALAR_FLIGHT_FIELD_METADATA_KEY,
};
pub use refetchable_fragment::{
    transform_refetchable_fragment, RefetchableDerivedFromMetadata, RefetchableMetadata,
    CONSTANTS as REFETCHABLE_CONSTANTS, REFETCHABLE_NAME,
};
pub use relay_actor_change::{
    relay_actor_change_transform, RELAY_ACTOR_CHANGE_DIRECTIVE_FOR_CODEGEN,
};
pub use relay_client_component::{
    relay_client_component, RelayClientComponentMetadata, RELAY_CLIENT_COMPONENT_DIRECTIVE_NAME,
    RELAY_CLIENT_COMPONENT_MODULE_ID_ARGUMENT_NAME, RELAY_CLIENT_COMPONENT_SERVER_DIRECTIVE_NAME,
};
pub use relay_directive::RelayDirective;
pub use relay_node_identifier::RelayLocationAgnosticBehavior;
pub use relay_resolvers::{
    find_resolver_dependencies, relay_resolvers, RelayResolverMetadata, ResolverFieldFinder,
    RELAY_RESOLVER_DIRECTIVE_NAME, RELAY_RESOLVER_FRAGMENT_ARGUMENT_NAME,
    RELAY_RESOLVER_IMPORT_PATH_ARGUMENT_NAME,
};
pub use remove_base_fragments::remove_base_fragments;
pub use required_directive::{
    required_directive, RequiredAction, RequiredMetadataDirective, ACTION_ARGUMENT,
    CHILDREN_CAN_BUBBLE_METADATA_KEY, REQUIRED_DIRECTIVE_NAME,
};
pub use skip_client_directives::skip_client_directives;
pub use skip_client_extensions::skip_client_extensions;
pub use skip_null_arguments_transform::skip_null_arguments_transform;
pub use skip_redundant_nodes::{skip_redundant_nodes, SkipRedundantNodesTransform};
pub use skip_split_operation::skip_split_operation;
pub use skip_unreachable_node::{skip_unreachable_node_loose, skip_unreachable_node_strict};
pub use sort_selections::sort_selections;
pub use test_operation_metadata::generate_test_operation_metadata;
pub use transform_connections::transform_connections;
pub use unwrap_custom_directive_selection::unwrap_custom_directive_selection;
pub use util::{
    extract_variable_name, generate_abstract_type_refinement_key, get_fragment_filename,
    remove_directive,
};
pub use validate_operation_variables::validate_operation_variables;
pub use validations::*;
