import 'bootstrap-v4-rtl'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css'
import 'popper.js'
import 'Styles/bootstrap-override.css'
import 'Styles/style.css'
import myBody from 'HTML/body.html'
import MembersService from 'Services/members-service'

$('body').append(myBody)

let membersService = new MembersService()

window.addEventListener('hashchange', async () => {
    let fragment = window.location.hash.replace(/^#/, '')
    if (fragment === 'members') {
        let members = await membersService.getAllMembers()

        members.forEach(member => {
            let groupItem = $('<li>', {
                class: 'list-group-item',
                text: `${member.firstName} ${member.lastName}`
            })
            let deleteButton = $('<button>', {
                type: 'button',
                class: 'delete-button'
            })
            let deleteButtonIcon = $('<span>', {
                html: '&times;'
            })
            deleteButton.append(deleteButtonIcon)
            groupItem.append(deleteButton)
            $('#members-container .list-group').append(groupItem)
        });

        $('#form-container').hide()
        $('#members-container').show()
    }
    else if (fragment === 'form') {
        $('#members-container .list-group').empty()

        $('#form-container').show()
        $('#members-container').hide()
    }
}, false)