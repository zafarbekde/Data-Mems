import axios from 'react'

export default async (req, res) => {
    const {email, password} = req.body;

    try{
        // Kirish API so'nggi nuqtasini shu yerda chaqiring
        const response = await axios.post('/api/login', {email, password});
        res.status(200).json(response.data);
    }
    catch (error){
        res.status(error.response.status).json(error.response.data);
    }
};


