import 'bootstrap-v4-rtl'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css'
import 'popper.js'
import 'Styles/bootstrap-override.css'
import 'Styles/style.css'
import myBody from 'HTML/body.html'
import MembersService from 'Services/members-service'

$('body').append(myBody)

let membersService = new MembersService()

window.addEventListener('hashchange', () => {
    let fragment = window.location.hash.replace(/^#/, '')
    if (fragment === 'members') {
        let members = membersService.getAllMembers()
        $('#form-container').hide()
        $('#members-container').show()
    }
    else if (fragment === 'form') {
        $('#form-container').show()
        $('#members-container').hide()
    }
}, false)