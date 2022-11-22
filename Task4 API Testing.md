
The Framework used for API testing is JEST
Thes testing has been done in Javascript.

When the user initially arrives at the page the API end points are called which display the Page and App Data.
Page Data is the data that the API must return to the page being displayed while the data that is hared to other components is called App Data.



?__v__={__NEXT_DATA__.buildId} this piece of code is appended to all the requests made and ensures that the cached results used previously are not used by the current version



For Example:

describe('addVersion', () => {
  beforeEach(() => {
    window.__NEXT_DATA__ = {
      buildId: 'development',
    }
  })
  
  
  developement is appended to all requests.
  
  
  
   afterEach(() => {
    delete window.__NEXT_DATA__
  })
  
  After all test cases are done the delete window._NEXT_DATA__  deletes it 
  
  
  
   it('should add the version query param', () => {
    expect(addVersion('/foo').toString()).toBe('http://localhost/foo?__v__=development')
  })
  
  
  
  This piece of code checks the url to be http://localhost/foo?__v__=development

  it('should accept a URL', () => {
    expect(addVersion(new URL('/foo', window.location.href)).toString()).toBe(
      'http://localhost/foo?__v__=development',
    )
  })
  
  
  here window.location.href returns the full url and checks it to be equal to  'http://localhost/foo?__v__=development'.

  it('should return the original url if it is falsy', () => {
    expect(addVersion()).toBeUndefined()
  })
  
  
  when the url is falsy then it should return undefined.

  it('should not duplicate the version query param', () => {
    expect(addVersion('/foo?__v__=1').toString()).toBe('http://localhost/foo?__v__=1')
  })

This test checks if the original hostname is the same.

  it('should leave the original hostname intact', () => {
    expect(addVersion('http://localhost/foo').toString()).toBe(
      'http://localhost/foo?__v__=development',
    )
  })
  
  
  
  
  
  
  
