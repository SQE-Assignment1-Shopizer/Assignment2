var supertest = require('supertest');
const request=supertest('http://jsonplaceholder.typicode.com/')

const SECONDS = 1000;
jest.setTimeout(60 * SECONDS)


describe('tasks manage test suite' , ()=>{

    beforeAll(()=> {
   
       console.log('Start running test cases')

    });

    afterAll(()=> {
     
       console.log('Finish running test cases')

    });


describe("POST", () => {
    it('Post-create a new user' , async() => {

    let user={
        name: "Leanne Graham",
        username: "Bret",
    

    }
    
        const response = await request.post('users').send(user);
        expect(response.status).toBe(201);
        console.log(response.body);
    
        

    });

    it('Post-create a new post' , async() => {

        let post={
        title: 'New Day',
        body: 'Bright Sunny day',
        
    
        }
        
        const response = await request.post('posts').send(post);
        
        expect(response.status).toBe(201);
        console.log(response.body);
        
        
    
    })

    it('Post-create a new comment' , async() => {

        let comment={
        postId: 1,
        id: 1,
        name: "WOw",
        body: 'Bright Sunny day',
        email: "Eliseo@gardner.biz"
        }

        const response = await request.post('comments').send(comment);
        expect(response.status).toBe(201);
        console.log(response.body);
    
     
 
    })
});

describe("PATCH", () => {
    it('Patch- modify a post' , async() => {

    
    
     const response = await request.patch('posts/1').send({title : "foo"});
     expect(response.status).toBe(200);
     console.log(response.body);
     expect(response.body.title).toBe("foo");
    
     
 
    })
    it('Patch- modify a comment' , async() => {

    
    
        const response = await request.patch('comments/1').send({name: "comment 1"});
        expect(response.status).toBe(200);
        console.log(response.body);
        expect(response.body.name).toBe("comment 1");
       
        
    
    })

});

describe("GET", () => {
    it("It should respond with an array of comments having specified email", async () => {
      const response = await request.get("comments?email=Eliseo@gardner.biz");
      console.log(response.body);
      expect(response.statusCode).toBe(200);
    });
 
  it("It should respond with an array of comments of post 1", async () => {
    const response = await request.get("posts/1/comments");
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

});



})


