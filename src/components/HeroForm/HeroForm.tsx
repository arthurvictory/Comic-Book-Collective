// External imports

import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';



// Internal imports
import { chooseName,
        chooseDescription,
        choosePrice,
        chooseAppeared,
        choosePowers } from '../../redux/slices/rootSlice';
import { HeroState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';

interface HeroFormProps {
    id?: string;
    data?: HeroState
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    // const { heroData, getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm<HeroState>({})

    const onSubmit: SubmitHandler<HeroState> = async(data, event) => {
        if (event) event.preventDefault()
    
        if (props.id) {
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Updated comic; ${data.name}`)
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(choosePrice(data.price))
            dispatch(chooseAppeared(data.appeared))
            dispatch(choosePowers(data.superpowers))

            console.log(store.getState())

            await serverCalls.create(store.getState() as HeroState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }    
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="appeared">Comics Appeared In</label>
                    <Input {...register('appeared')} name="appeared" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="superpowers">Superpowers</label>
                    <Input {...register('superpowers')} name="superpowers" placeholder="Superpowers"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}