function verify() {
    var data = new Date()
    var year = data.getFullYear() 
    var inserted_year = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (inserted_year.value.length == 0 || inserted_year.value > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(inserted_year.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'homem'
            if (age >= 0 && age < 13) {
                // criança
                img.setAttribute('src', 'kid-m.png')
            } else if (age < 25) {
                // jovem
                img.setAttribute('src', 'young-m.png')
            } else if (age < 60) {
                // adulto
                img.setAttribute('src', 'adult-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'old-m.png')
            }
        } else if (fsex[1].checked) {
            gender = 'mulher'
            if (age >= 0 && age < 13) {
                // criança
                img.setAttribute('src', 'kid-f.png')
            } else if (age < 25) {
                // jovem
                img.setAttribute('src', 'young-f.png')
            } else if (age < 60) {
                // adulta
                img.setAttribute('src', 'adult-f.png')
            } else {
                // idosa
                img.setAttribute('src', 'old-f.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gender} com ${age} anos.</p>`
        res.appendChild(img)
    }  
}