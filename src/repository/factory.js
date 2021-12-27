import { AuthRepository } from './entity/authRepository'

const repositories = {
    'auth': AuthRepository
}

const RepositoryFactory = {
    get: name => repositories[name]
}

export default RepositoryFactory