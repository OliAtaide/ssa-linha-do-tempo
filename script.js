data = [
    {
        ano: 1983,
        texto: `Convenção dos Direitos da Criança
                <br/><br/>
                Programa de Saúde do Adolescente`,
        bg_color: '#D4D17B',
        border_color: '#C9C55A',
    },
    {
        ano: 1990,
        texto: `Estatuto da Criança e do Adolescente
                <br/><br/>
                OMS Retira Homossexualidade da CID`,
        bg_color: '#C96262',
        border_color: '#BC3B3B',
    },
    {
        ano: 1992,
        texto: `Portaria Interministerial nº 796,
                <br/><br/>
                MEC e MS – sigilo e informação HIV na escola`,
        bg_color: '#3BBC6A',
        border_color: '#2C8D50',
    },
    {
        ano: 1993,
        texto: `Normas de atenção à saúde integral do adolescente 
                <br/><br/>
                Conferência Internacional de Direitos Humanos – recomenda desenvolvimento de personalidade de adolescentes com proteção e segurança`,
        bg_color: '#C9629D',
        border_color: '#BC3B84',
    },
    {
        ano: 1996,
        texto: `Programa Saúde do Adolescente Bases Programáticas`,
        bg_color: '#89BAD7',
        border_color: '#62A3C9',
    },
    {
        ano: 1999,
        texto: `Resolução nº 001/1999, Conselho Federal de Psicologia`,
        bg_color: '#D4D17B',
        border_color: '#D4D17B',
    },
    {
        ano: 2000,
        texto: `Manual para atendimento de adolescentes grávidas`,
        bg_color: '#C96262',
        border_color: '#BC3B3B',
    },
    {
        ano: 2005,
        texto: `Programa de Saúde Integral de Adolescentes e Jovens`,
        bg_color: '#3BBC6A',
        border_color: '#2C8D50',
    },
    {
        ano: 2006,
        texto: `Lei Maria da Penha
                <br/><br/>
                Cartilha sobre Direitos Sexuais e Direitos Reprodutivos/MS`,
        bg_color: '#C9629D',
        border_color: '#BC3B84',
    },
    {
        ano: 2007,
        texto: `Plano Nacional do Enfrentamento à Violência Sexual InfantoJuvenil
                <br/><br/>
                Programa Saúde na Escola
                <br/><br/>
                Marco teórico e referencial saúde sexual e saúde reprodutiva de adolescentes e jovens
                <br/><br/>
                Marco legal saúde, um direito de adolescentes`,
        bg_color: '#89BAD7',
        border_color: '#62A3C9',
    },
    {
        ano: 2009,
        texto: `Caderneta de Saúde (de menino e de menina)`,
        bg_color: '#D4D17B',
        border_color: '#D4D17B',
    },
    {
        ano: 2010,
        texto: `Orientações Básicas de Atenção Integral à Saúde de Adolescentes nas Escolas e Unidades Básicas de Saúde
                <br/><br/>
                Diretrizes nacionais para a atenção integral à saúde de adolescentes e jovens na promoção, proteção e recuperação da saúde`,
        bg_color: '#C96262',
        border_color: '#BC3B3B',
    },
    {
        ano: 2011,
        texto: `STF reconhece união civil entre pessoas de mesmo sexo
                <br/><br/>
                Atenção humanizada ao abortamento – norma técnica
                <br/><br/>
                Aspectos jurídicos do atendimento às vítimas de violência sexual
                <br/><br/>
                Atenção Integral para Mulheres e Adolescentes em Situação de Violência Doméstica e Sexual Matriz Pedagógica para Formação de Redes`,
        bg_color: '#3BBC6A',
        border_color: '#2C8D50',
    },
    {
        ano: 2012,
        texto: `Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes
                <br/><br/>
                Carta de Intenções sobre a Participação das Juventudes da América Latina em Saúde Pública
                <br/><br/>
                Protocolo para utilização do levonorgestrel
                <br/><br/>
                Cooperação com Guiné Bissau na atenção à saúde de mulheres e adolescentes em situação de violência baseada em gênero`,
        bg_color: '#C9629D',
        border_color: '#BC3B84',
    },
    {
        ano: 2013,
        texto: `Orientações básicas de atenção integral à saúde de adolescentes nas escolas e unidades básicas de saúde
                <br/><br/>
                O SUS e a Saúde Sexual e Reprodutiva de Adolescentes e Jovens no Brasil
                <br/>
                Seminário Internacional Saúde, Adolescência e Juventude
                <br/><br/>
                Orientações para o Atendimento à Saúde do Adolescente (da menina e do menino)`,
        bg_color: '#89BAD7',
        border_color: '#62A3C9',
    },
    {
        ano: 2014,
        texto: `Metodologias para o Cuidado de Crianças, Adolescentes e suas Famílias em Situação de Violências
                <br/><br/>
                Oficina o SUS e o Estatuto da Juventude`,
        bg_color: '#D4D17B',
        border_color: '#D4D17B',
    },
]

for (let i = 0; i < data.length; i++) {
    row = "<div class='row align-items-center' ></div>";


    content = "<div class='content rounded p-2' style='border: 3px solid "
        + data[i].border_color + "; background-color: white;'>" + data[i].texto + "</div>";

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
            + balloon + "</div><div class='col col-sm-2'>"
            + button + "</div><div class='col'></div></div>"
        )
    }
    else {
        balloon = "<div class='balloon' id='" + data[i].ano + "'\><div class='d-flex align-items-center'>"
            + right + content + "</div></div>"
        $('.container').append(
            "<div class='row my-5 align-items-center' ><div class='col'></div><div class='col col-sm-2'>"
            + button + "</div><div class='col'>"
            + balloon + "</div></div>"
        )
    }

}

$('.balloon').css('visibility', 'hidden');

$('.label').click(function () {
    target = $(this).data('target');
    $('#' + target).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
})