import memoize from 'lodash.memoize';
import validUrl from 'valid-url';

const normalizeLinkedResourceToObject = memoize(property => {
  if (!property) {
    return null;
  }
  if (typeof property === 'string') {
    if (!validUrl.isWebUri(property)) {
      return null;
    }
    return [{ '@id': property }];
  }
  if (Array.isArray(property)) {
    return normalizeLinkedResourceToObject(property[0]); // only allow one value?
  }
  if (property['@value'] || property['@id']) {
    // presentation 2.
    return [property];
  }
  return null;
});

export default normalizeLinkedResourceToObject;
