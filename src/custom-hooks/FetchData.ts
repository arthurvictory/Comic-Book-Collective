import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';
import { HeroState } from '../redux/slices/rootSlice';

export const useGetData = () => {
    const [heroData, setData] = useState<HeroState[]>([]);

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {heroData, getData:handleDataFetch}
}