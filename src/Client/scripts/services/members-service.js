import $ from 'jquery'

class MembersService {
    async getAllMembers() {
        let members = await $.get('http://localhost:1234/member')
        return members
    }
}

export default MembersService