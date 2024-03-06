import axios from "axios";

export default axios.create({
    baseURL: "http://26.147.127.222:3000/"
})

export function getUserDatails() {
    return axios.get('http://26.147.127.222:3000/api/auth', {
        withCredentials: true
    });
}

export function getUserTabs(props) {
    return axios.post('http://26.147.127.222:3000/getTabs', {
        userId: props
    }, {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    });
}