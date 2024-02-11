import { useState, useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../authentation/Fetcher'; // Adjust the path accordingly

const useDataFetching = (endpoint, token) => {
    const { data, error, isValidating } = useSWR([endpoint, token], (url, authToken) =>
        fetcher(url, authToken)
    );

    const isLoading = !data && !error;

    return { data, error, isLoading, isValidating };
};

export default useDataFetching;
