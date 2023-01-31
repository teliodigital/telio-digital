import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '40t66y1e',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21'
});

export default client;