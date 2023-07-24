let token = `f065d7c32caeb4d4823e18a2e11df330be16101091440163`
import { HeroState } from "../redux/slices/rootSlice";

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://superhero-api.glitch.me/api/superheroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data:HeroState) => {
        const response = await fetch(`https://superhero-api.glitch.me/api/superheroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:HeroState) => {
        const response = await fetch(`https://superhero-api.glitch.me/api/superheroes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://superhero-api.glitch.me/api/superheroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to delete new data on server')
        }

        return await response.json()
    }
}