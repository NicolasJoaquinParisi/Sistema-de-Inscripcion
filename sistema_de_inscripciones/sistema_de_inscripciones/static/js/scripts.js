"use strict";

function setUpTime() {
    const days = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ]
    
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Deciembre'
    ]

    let today = new Date();
    let currentDay = days[today.getDay()];
    let currentMonth = months[today.getMonth()];
    document.getElementById("fecha-1").innerHTML = `${currentDay} ${today.getDate()}`;
    document.getElementById("fecha-2").innerHTML = `${currentMonth} del ${today.getFullYear()}`;
}


// ALTA Y MODIFICACION MATERIAS
function onCheckBoxMateriaClick(nombreCorrelativa)
{
    let checkBoxCorrelativa = document.getElementById(nombreCorrelativa);

    if (checkBoxCorrelativa.checked)
    {
        checkBoxCorrelativa.value = "True";
        return;
    }

    checkBoxCorrelativa.value = "False";
}

function onSeleccionarTodasLasCorrelativasClick()
{
    let correlativas = document.getElementsByClassName("materia");

    for (let i = 0; i < correlativas.length; i++) {
        correlativas[i].checked = "True";
        correlativas[i].value = "True";
    }
}


function onEliminarCarreraClick(carreraID)
{
    $.ajax({
        url: `/eliminar-carrera/${carreraID}`,
        dataType: 'json',
        success: function (data) {
            showNotification(data.result, data.message);

            if(data.result == "OK")
            {
                $(".swal2-confirm").click(function () {
                    window.location.href = `/listar-carreras`;
                });
            }
        }
      });
}

function onEliminarMateriaClick(materiaID)
{
    $.ajax({
        url: `/eliminar-materia/${materiaID}`,
        dataType: 'json',
        success: function (data) {
            showNotification(data.result, data.message);

            if(data.result == "OK")
            {
                $(".swal2-confirm").click(function () {
                    window.location.href = `/listar-materias`;
                });
            }
        }
      });
}

function initializeEditarCarrera(duracion, materias)
{
    if (duracion === "Grado")
        document.getElementById("grado").checked = "True";
    else
        document.getElementById("terciario").checked = "True";
        
    console.log(duracion);
}

function initializeEditarMateria(a??o, semestre, materias)
{
    let codigos = materias.split(/['']/);
    codigos.forEach(element => {
        if (element != "[" & element != "]" & element != ", " & element != "[]")
        {
            document.getElementById(element).checked = "True";
            document.getElementById(element).value = "True";
        }
    });
    
    switch (a??o)
    {
        case "Primer a??o":
            document.getElementById("primer-a??o").checked = "True";
            break;
        case "Segundo a??o":
            document.getElementById("segundo-a??o").checked = "True";
            break;
        case "Tercer a??o":
            document.getElementById("tercero-a??o").checked = "True";
            break;
        case "Cuarto a??o":
            document.getElementById("cuarto-a??o").checked = "True";
            break;
        case "Quinto a??o":
            document.getElementById("quinto-a??o").checked = "True";
            break;
    }

    switch (semestre)
    {
        case "Curso de ingreso":
            document.getElementById("curso-de-ingreso").checked = "True";
            break;
        case "Primer semestre":
            document.getElementById("primer-semestre").checked = "True";
            break;
        case "Segundo semestre":
            document.getElementById("segundo-semestre").checked = "True";
            break;
    }
}