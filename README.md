<img src="https://raw.githubusercontent.com/stephenwf/iiif-redux/master/iiif-redux.png" width="340" />

[![Coverage Status](https://coveralls.io/repos/github/stephenwf/iiif-redux/badge.svg)](https://coveralls.io/github/stephenwf/iiif-redux)
[![Build Status](https://travis-ci.org/stephenwf/iiif-redux.svg?branch=master)](https://travis-ci.org/stephenwf/iiif-redux)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fstephenwf%2Fiiif-redux.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fstephenwf%2Fiiif-redux?ref=badge_shield)

[Concepts](CONCEPTS.md) | [API Proposal](src/README.md) | [Selector API](src/api/README.md) | [IIIF Spec progress](PROGRESS.md) | [Contributing](CONTRIBUTING.md)
___

:warning: IIIF Redux current state is a request for comments from the community with a proposal for managing 
IIIF resources state on the frontend for both presentational and content creation purposes.

**Pull requests + issues are welcomed to discuss and improve this proposal.** 

___

## What is IIIF Redux?
IIIF Redux is a single source of truth for IIIF resources, split into 3 distinct packages:
- **IIIF Redux** - the "to the spec" implementation, storing and normalizing collections, manifests and canvases.
- **IIIF Redux Viewer** - more state, actions and selectors for building a viewer experience 
- **IIIF Redux Creator** - new set of actions for drafting and editing IIIF resources, and hook-able middleware for saving, for creating editor UIs for IIIF resources.

## Proposal
- [Concepts](CONCEPTS.md) - Primer for the structure of the API
- [API Proposal](src/README.md) - Proposal for how the whole API will function
- [Selector API](src/api/README.md) - How the selector API works currently
- [IIIF Spec progress](PROGRESS.md) - Check list of all IIIF Resource selectors
- [Contributing](CONTRIBUTING.md) - Contributing guidelines

## Testing
For libraries that deal with interoperable data its important to have smoke tests that can be run over 
large sets of manifests. These tests would have to be `expect(blah).toExist()` or `expect(blah.length).not.toEqual(0)` type
tests that SHOULD pass for all manifests. 

In addition unit tests of the units that make up the library (selectors, reducers, actions).

Finally running Interoperable Manifesto library through Manifesto's tests too would work to ensure parity.

## Contributing
This project is currently firmly in the planning and prototyping stages at the moment. Any contributions in the
form of pull requests or issues for discussion are welcome.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fstephenwf%2Fiiif-redux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fstephenwf%2Fiiif-redux?ref=badge_large)
