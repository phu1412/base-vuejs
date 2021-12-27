import Repository from "../index";
import { AUTH_RESOURCE } from "../../constants";

export default {
    login: (payload) => {
        return Repository.post(`${AUTH_RESOURCE}/login`, payload)
    },
    register: (payload) => {
        return Repository.post(`${AUTH_RESOURCE}/register`, payload)
    }
}
