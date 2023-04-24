//votos municipales
var municipalPSOE=0;
municipalPSOE=JSON.parse(localStorage.getItem("psoe2"));
var municipalPP=0;
municipalPP=JSON.parse(localStorage.getItem("pp2"));
var municipalPodemos=0;
municipalPodemos=JSON.parse(localStorage.getItem("podemos2"));
var municipalVOX=0;
municipalVOX=JSON.parse(localStorage.getItem("vox2"));
var municipalPACMA=0;
municipalPACMA=JSON.parse(localStorage.getItem("pacma2"));
var municipalCiudadanos=0;
municipalCiudadanos=JSON.parse(localStorage.getItem("ciudadanos2"));
var otros=0;
otros=JSON.parse(localStorage.getItem("otros2"));

//votos Generales
var GeneralPP=0;
GeneralPP=JSON.parse(localStorage.getItem("pp1"));
var GeneralPSOE=0;
GeneralPSOE=JSON.parse(localStorage.getItem("psoe1"));
var GerenalPodemos=0;
GerenalPodemos=JSON.parse(localStorage.getItem("podemos1"));
var GeneralVOX=0;
GeneralVOX=JSON.parse(localStorage.getItem("vox1"));
var GeneralOtros=0;
GeneralOtros=JSON.parse(localStorage.getItem("otros1"));


function votarGeneral()
{
var valorActivo = document.querySelector('input[name="optradio"]:checked').value;


switch(valorActivo){
	case "psoe":
		GeneralPSOE++;
		localStorage.setItem("psoe1", JSON.stringify(GeneralPSOE));
		break;
	case "pp":
		GeneralPP++;
		localStorage.setItem("pp1", JSON.stringify(GeneralPP));
		break;
	case "podemos":
		GerenalPodemos++;
		localStorage.setItem("podemos1", JSON.stringify(GerenalPodemos));
		break;
	case "vox":
		GeneralVOX++;
		localStorage.setItem("vox1", JSON.stringify(GeneralVOX));
		break;
	case "otros":
		GeneralOtros++;
		localStorage.setItem("otros1", JSON.stringify(GeneralOtros));
		break;
	
}

}


function votarMunicipal()
{
var valorActivo1 = document.querySelector('input[name="optradio1"]:checked').value;


switch(valorActivo1){
	case "psoe1":
		municipalPSOE++;
		localStorage.setItem("psoe2", JSON.stringify(municipalPSOE));
		break;
	case "pp1":
		municipalPP++;
		localStorage.setItem("pp2", JSON.stringify(municipalPP));
		break;
	case "podemos1":
		municipalPodemos++;
		localStorage.setItem("podemos2", JSON.stringify(municipalPodemos));
		break;
	case "vox1":
		municipalVOX++;
		localStorage.setItem("vox2", JSON.stringify(municipalVOX));
		break;
	case "pacma1":
		municipalPACMA++;
		localStorage.setItem("pacma2", JSON.stringify(municipalPACMA));
		break;
	case "ciudadanos1":
		municipalCiudadanos++;
		localStorage.setItem("ciudadanos2", JSON.stringify(municipalCiudadanos));
		break;
	case "otros1":
		otros++;
		localStorage.setItem("otros2", JSON.stringify(otros));
		break;
	
}


}

function graficos(){
//general
var generalCanvas = document.getElementById("Generales");
var generalData = {
    labels: [
        "PSOE",
        "PP",
        "Podemos",
        "VOX",
        "Otros"
    ],
    datasets: [
        {
            data: [GeneralPSOE, GeneralPP, GerenalPodemos, GeneralVOX, GeneralOtros],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(generalCanvas, {
  type: 'pie',
  data: generalData
});


//municipal
var municipalCanvas = document.getElementById("Municipales");
var municipalData = {
    labels: [
        "PSOE",
        "PP",
        "Podemos",
        "VOX",
        "Pacma",
        "Ciudadanos",
        "Otros"
    ],
    datasets: [
        {
            data: [municipalPSOE, municipalPP, municipalPodemos, municipalVOX, municipalPACMA, municipalCiudadanos, otros],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF",
                "#FF7D33",
                "#56D0DA"
            ]
        }]
};

var pieChart = new Chart(municipalCanvas, {
  type: 'pie',
  data: municipalData
});
}
