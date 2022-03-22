data = [
    {
        ano: 1983,
        texto: `Convenção dos Direitos da Criança
                <br/>
                Programa de Saúde do Adolescente`,
        bg_color: '#D4D17B',
        border_color: '#C9C55A',
    },
    {
        ano: 1990,
        texto: `Estatuto da Criança e do Adolescente
                <br/>
                OMS Retira Homossexualidade da CID`,
        bg_color: '#C96262',
        border_color: '#BC3B3B',
    },
    {
        ano: 1992,
        texto: `Portaria Interministerial nº 796,
                <br/>
                MEC e MS – sigilo e informação HIV na escola`,
        bg_color: '#3BBC6A',
        border_color: '#2C8D50',
    }
]

for (let i = 0; i < data.length; i++) {
    row = "<div class='row align-items-center' ></div>";
    

    content = "<div class='content rounded p-2' style='border: 3px solid"
    + data[i].border_color + ";'>" + data[i].texto + "</div>";
            
    left = `
        <svg fill="`+ data[i].border_color + `" width="3.9688mm" height="5.2917mm" version="1.1" viewBox="0 0 3.9688 5.2917"
            xmlns="http://www.w3.org/2000/svg">
            <path transform="matrix(.011594 0 0 .013388 -.0033036 -.29155)"
                d="m0.28493 417.03-9.4e-7 -395.25 342.3 197.63z"
                style="paint-order:stroke fill markers" />
        </svg>
        `;

    right = `
        <svg fill="`+ data[i].border_color + `" width="3.9688mm" height="5.2917mm" version="1.1" viewBox="0 0 3.9688 5.2917"
        xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(1.3229)">
                <path transform="matrix(-.011594 0 0 .013388 2.6491 -.29155)" d="m0.28493 417.03-9.4e-7 -395.25 342.3 197.63z" style="paint-order:stroke fill markers"/>
            </g>
        </svg>
    `;

    button = 
        "<button class='label rounded-pill text-white w-100' data-target='"
        + data[i].ano + "' style='border: 3px solid " + data[i].border_color +
        "; background: " + data[i].bg_color + ";'>" + data[i].ano + "</button>";


    if ((i % 2) == 0) {
        balloon = "<div class='balloon' id='" + data[i].ano + "'><div class='d-flex align-items-center'>"
                    + content + left + "</div></div>"
        $('.container').append(
            "<div class='row align-items-center' ><div class='col'>"
            + balloon + "</div><div class='col col-2'>"
            + button + "</div><div class='col'></div></div>"
        )
    }
    else {
        balloon = "<div class='balloon' id='" + data[i].ano + "'\><div class='d-flex align-items-center'>"
                    + right + content + "</div></div>"
        $('.container').append(
            "<div class='row align-items-center' ><div class='col'></div><div class='col col-2'>"
            + button + "</div><div class='col'>"
            + balloon + "</div></div>"
        )
    }

}

data.forEach(d => {





});

$('.balloon').hide();

$('.label').click(function () {
    target = $(this).data('target');
    $('#' + target).fadeIn(200);
})
