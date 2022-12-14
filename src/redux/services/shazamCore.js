import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'fa7886e74dmsh77d7c9f5c0498c3p1653a1jsnb351cd618730',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1' ,
             prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key', 'fa7886e74dmsh77d7c9f5c0498c3p1653a1jsnb351cd618730');

                return headers;
             },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query : () => '/charts/world'}),
            getSongDetails: builder.query({query: ({songid}) => `
                /tracks/details?track_id=${songid}   ` })

        }),
    });

    export const{
        useGetSongDetailsQuery,
        useGetTopChartsQuery,
    } = shazamCoreApi;