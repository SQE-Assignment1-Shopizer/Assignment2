var supertest = require('supertest');
const request=supertest('https://jsonplaceholder.typicode.com/')

const SECONDS = 1000;
jest.setTimeout(7 * SECONDS)

describe('tasks manage test suite' , ()=>{

     beforeAll(()=> {
    
        console.log('Start running test cases')

     });

     afterAll(()=> {
      
        console.log('Finish running test cases')

     });




it('Get all tasks where userId is 1' , async() => {

   
    const response = await request.get('todos?userId=1');
    console.log(response.body);
    expect(response.status).toBe(200);

});


it('Set all tasks where todo id is 1 to completed', async () => {
    const response = await request.put('todos/1').send({ completed: true });
    expect(response.statusCode).toBe(200)
    console.log(response.body);
    expect(response.body).toMatchObject({completed: true, id: 1})
});

it('Delete  tasks where tpdo id is 1', async () => {
    const response = await request.delete('todos/1')
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({});
})

})
