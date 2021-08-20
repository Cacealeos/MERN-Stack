import axios from 'axios'

const url = 'http://localhost:8000/Bestiary'

// GET request via axios to the server loaded by dispatch redux
 
export const fetchBestiary = axios.get(url)

    

    



