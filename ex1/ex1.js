$(document).ready(function () {
    const blues = $(".blue")
    const btn = $("#button")
    btn.click(() => {
        blues.fadeToggle(2000)
    })
})