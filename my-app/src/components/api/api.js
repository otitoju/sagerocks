import axios from 'axios'

//get all applicants
export async function getAllApplicants (){
    try {
        const info = await axios.get('http://localhost:5000/api/v1/applicants')
        return info.data
    } catch (error) {
        return error.message
    }
}

//get all posts
export async function getSingleSubscriber(id) {
    try {
        const info = await axios.get(`http://sellyourmarket.herokuapp.com/api/subscriber/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}

//get all posts
export async function getAllPosts() {
    try {
        const info = await axios.get(`/api/v1/allposts`)
        return info.data
    } catch (error) {
        return error.message
    }
}

//get all services
export async function getAllServices() {
    try {
        const info = await axios.get(`/api/v1/services`)
        return info.data
    } catch (error) {
        return error.message
    }
}

//filterByCategory
export async function filterByCategory(category) {
    try {
        const info = await axios.get(`http://sellyourmarket.herokuapp.com/api/product/${category}`)
        return info.data
    } catch (error) {
       return error.message 
    }
}
