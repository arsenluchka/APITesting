const axios = require('axios')
const { expect } = require('chai')

describe("API test suite", async () => {
    it("Verify that allows creating a User", async () => {
        const res = await axios.post('https://petstore.swagger.io/v2/user',
            {
              
                "id": 0,
                "username": "arsenluchka",
                "firstName": "Arsen",
                "lastName": "Luchka",
                "email": "arsenluchka@mail.com",
                "password": "111111",
                "phone": "380904230334",
                "userStatus": 0
            
               
            });
        console.log(res.data)
        expect(res.data.code).to.equal(200);
    })
    it("Verify that allows login as a User", async () => {
        const res = await axios.get('https://petstore.swagger.io/v2/user/login',
            {
                "username": "arsenluchka",
                "password": "111111",
            });
        console.log(res.data)
        expect(res.data.code).to.equal(200);

    })
    it("Verify that allows creating a User", async () => {
        const res = await axios.post('https://petstore.swagger.io/v2/user/createWithList',
            [
                {

                    "id": 0,
                    "username": "arsenluchka1",
                    "firstName": "Arsen",
                    "lastName": "Luchka",
                    "email": "arsenluchka1@mail.com",
                    "password": "111111",
                    "phone": "380904230334",
                    "userStatus": 0
                },
                {

                    "id": 0,
                    "username": "arsenluchka2",
                    "firstName": "Arsen",
                    "lastName": "Luchka",
                    "email": "arsenluchka2@mail.com",
                    "password": "111111",
                    "phone": "380904230334",
                    "userStatus": 0
                },
                {

                    "id": 0,
                    "username": "arsenluchka3",
                    "firstName": "Arsen",
                    "lastName": "Luchka",
                    "email": "arsenluchka3@mail.com",
                    "password": "111111",
                    "phone": "380904230334",
                    "userStatus": 0
                }
            ]);
        console.log(res.data)
        expect(res.data.code).to.equal(200);
        expect(res.data.message).to.equal('ok');
    })
    it("Verify that allows Log out User", async () => {
        const res = await axios.get('https://petstore.swagger.io/v2/user/logout')

        console.log(res.data)
        expect(res.data.code).to.equal(200);
        expect(res.data.message).to.equal('ok');
    })
    it("Verify that allows adding a new Pet", async () => {
        const res = await axios.post('https://petstore.swagger.io/v2/pet',
            {
                "id": 0,
                "category": {
                    "id": 12,
                    "name": "Jeck"
                },
                "name": "Bigle",
                "photoUrls": [
                    "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
                 ],
                "tags": [
                    {
                        "id": 12,
                        "name": "Small"
                    }
                ],
                "status": "available"
            })

        console.log(res.data)
        expect(res.data.category.id).equal(12);
        expect(res.data.category.name).equal('Jeck');
    })

    it("Verify that allows updating Pet’s image", async () => {
        const res = await axios.put('https://petstore.swagger.io/v2/pet',
            {
                "id": 9223372016900016000,
                "category": {
                    "id": 12,
                    "name": "Jeck"
                },
                "name": "Bigle",
                "photoUrls": [
                    "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
                    "https://cdn.britannica.com/99/152499-050-29EFB7EE/Beagle.jpg"

                 ],
                "tags": [
                    {
                        "id": 12,
                        "name": "Small"
                    }
                ],
                "status": "available"
            })

        console.log(res.data)
        expect(res.data.category.id).equal(12);
        expect(res.data.category.name).equal('Jeck');
    })
    it("Verify that allows updating Pet’s name and status", async () => {
        const res = await axios.put('https://petstore.swagger.io/v2/pet',
            {
                "id": 9223372016900016000,
                "category": {
                    "id": 12,
                    "name": "Jecky"
                },
                "name": "Bigle",
                "photoUrls": [
                    "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
                    "https://cdn.britannica.com/99/152499-050-29EFB7EE/Beagle.jpg"

                 ],
                "tags": [
                    {
                        "id": 12,
                        "name": "Small"
                    }
                ],
                "status": "pending"
            })

        console.log(res.data)
        expect(res.data.category.id).equal(12);
        expect(res.data.category.name).equal('Jecky')
        expect(res.data.status).equal('pending');
    })
    it("Verify that allows deleting Pet", async () => {
        const res = await axios({
            method:"delete",
            url:'https://petstore.swagger.io/v2/pet/9223372016900016000',
            headers:{
                api_key:'special-key'
            }
        })
        console.log(res.data)
        expect(res.data.code).to.equal(200);
    })
  })