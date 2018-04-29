import { createStructuredSelector } from 'reselect';
import testJson from '../../fixtures/presentation/2.1/04/manifest';
import * as currentManifest from '../../../src/api/current-manifest';
import { createStoreAndImportManifest } from '../../../test-utils';

describe('iiif/presentation/2.1/04 Metadata Pairs with Multiple Values in same Language', () => {
  global.fetch = require('jest-fetch-mock');

  it('should render multiple languages as array, leaving it to viewer to decide on display', async () => {
    const store = await createStoreAndImportManifest(testJson);
    const state = store.getState();

    expect(
      createStructuredSelector({
        metadata: currentManifest.getMetadata,
      })(state)
    ).toMatchSnapshot();
  });
});
