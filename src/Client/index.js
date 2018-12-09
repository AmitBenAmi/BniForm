import 'bootstrap-v4-rtl'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css'
import 'popper.js'
import 'CSS/bootstrap-override.css'
import 'CSS/style.css'
import myBody from 'HTML/body.html'

$('body').append(myBody)

window.addEventListener('hashchange', () => {
    let fragment = window.location.hash.replace(/^#/, '')
    if (fragment === 'members') {
        $('#form-container').hide()
        $('#members-container').show()
    }
    else if (fragment === 'form') {
        $('#form-container').show()
        $('#members-container').hide()
    }
}, false)