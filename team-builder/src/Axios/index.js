import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Front-End Engineer',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Jack',
    email: 'jack@jack.com',
    role: 'Back-End Engineer',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Stephen',
    email: 'stephen@stephen.com',
    role: 'Full Stack Engineer',
  }
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMemberList })
  },
  post(url, { username, email, role }) {
    const newTeamMember = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}