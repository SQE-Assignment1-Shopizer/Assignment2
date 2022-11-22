
The Framework used for API testing is JEST
Thes testing has been done in Javascript.

When the user initially arrives at the page the API end points are called which display the Page and App Data.
Page Data is the data that the API must return to the page being displayed while the data that is hared to other components is called App Data.



?__v__={__NEXT_DATA__.buildId} this piece of code is appended to all the requests made and ensures that the cached results used previously are not used by the current version



Explanation of the code.

import getAPIURL from '../../src/api/getAPIURL'

describe('getAPIURL', () => {
  beforeEach(() => {
    window.__NEXT_DATA__ = {
      buildId: '1',
    }
  })
  
  (This appends the build id 1 to all the requests to ensure that the previous cache is not served to the current version of the application to prevent errors when breaking challenges are introduced in the API)

  afterEach(() => {
    delete window.__NEXT_DATA__
  })
  
   (This deletes all the data returned from window.__NEXT_DATA__  after executing all the testcases)

  it('should append __NEXT_DATA__.buildId to the query string', () => {
    expect(getAPIURL('/foo')).toBe('/api/foo?__v__=1')
  })

 (This checks that the build id is appended to the url)
 
 
  

  it('should not append __NEXT_DATA__.buildId if __NEXT_DATA__ is undefined', () => {
    delete window.__NEXT_DATA__
    expect(getAPIURL('/foo')).toBe('/api/foo')
  })
})


(If the _NEXT_DATA__ is undefined then it should not be appended.
