
const nav = document.getElementById('topNav')
const header = document.getElementById('logo')
const list = document.getElementById('list')
const main = document.getElementById('main')
function openNav() {
    nav.style.width = '220px';
    list.style.display = 'block'
    // main.style.width = `min(100% - 28vw)`
    // main.style.marginInlineStart  = "auto"
    main.style.marginLeft = "240px"
}

function closeNav() {
    main.style.paddingLeft = "0"
    nav.style.width = '0'
    main.style.marginLeft = "40px"

    // main.style.width = `min(100% - 9vw)`

}

const overlay = document.getElementById('myNav')
const hList = document.getElementById('hList')

function openNa() {
    overlay.style.width = '250px';
    hList.style.display = 'block'
}

function closeNa() {
    overlay.style.width = '0'
    hList.style.display = 'none'
    hList.style.display = 'none'
}
