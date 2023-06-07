import axios from "axios";

export default async (req, res) => {
    const {email, password} = req.body;

    try{
        const response = await axios.post('/api/register', {email, password});
        res.status(200).json(response.data)
    }
    catch (error){
        res.status(error.response.status).json(error.response.data)
    }
}