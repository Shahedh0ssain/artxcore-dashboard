// fetcher.js

const fetcher = async (url, token = '') => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error in fetcher:', error);
        throw error; // Handle the error according to your needs
    }
};

export default fetcher;
