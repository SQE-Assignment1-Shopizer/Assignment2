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



describe("GET", () => {
    it("It should respond with the album with specific title ", async () => {
        const response = await request.get("albums?title=quidem molestiae enim");
        console.log(response.body);
        expect(response.statusCode).toBe(200);
    });

    it("It should respond with the picture with specified utl", async () => {
        const response = await request.get("photos?url=https://via.placeholder.com/600/92c952");
        console.log(response.body);
        expect(response.statusCode).toBe(200);
    });
})

describe("PUT", () => {
    it('Set the title of a album quidem molestiae enim to fatimas album', async () => {
        const response = await request.put("albums/1").send({ title: 'Fatimas album' });
        expect(response.statusCode).toBe(200)
        console.log(response.body);
        expect(response.body).toMatchObject({title: 'Fatimas album' , id: 1})
    });

    it('Set the title of a photo to fatimas photo', async () => {
        const response = await request.put("photos/1").send({ title: 'Fatimas photo' });
        expect(response.statusCode).toBe(200)
        console.log(response.body);
        expect(response.body).toMatchObject({title: 'Fatimas photo' , id: 1})
    });
})

describe("DELETE", () => {
    it('Delete album where id is 2', async () => {
        const response = await request.delete("albums/2")
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({});
    })

    it('Delete photo where id is 2', async () => {
        const response = await request.delete("photos/2")
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({});
    })
})

})
