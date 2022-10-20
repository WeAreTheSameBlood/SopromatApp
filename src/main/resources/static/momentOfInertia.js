function calcCircleParam(value) {
    value = value === "" ? 0 : value;

    let area = (Math.PI * Math.pow(value, 2))/4;
    let axialMoments = (Math.PI * Math.pow(value, 4))/64;
    let resistMoments = (Math.PI * Math.pow(value, 3))/32;
    let polarMoment = (Math.PI * Math.pow(value, 4))/32;
    let polarResistMoment = (Math.PI * Math.pow(value, 3))/16;

    let resultArea = "<p>\\[A= {{π * D^2} \\over 4} = {{π * " + value +"^2} \\over 4}="
        + area.toFixed(3) + "\\]</p>";
    let resultAxialMoments = "<p>\\[J_x= J_y= {{π * D^4} \\over 64} = {{π * " + value +"^4} \\over 64}="
        + axialMoments.toFixed(3) + "\\]</p>";
    let resultResistMoments = "<p>\\[W_x= W_y= {{π * D^3} \\over 32} = {{π * " + value +"^3} \\over 32}="
        + resistMoments.toFixed(3) + "\\]</p>";
    let resultPolarMoment = "<p>\\[J_p= {{π * D^4} \\over 32} = {{π * " + value +"^4} \\over 32}="
        + polarMoment.toFixed(3) + "\\]</p>";
    let resultPolarResistMoment = "<p>\\[W_p= {{π * D^3} \\over 16} = {{π * " + value +"^3} \\over 16}="
        + polarResistMoment.toFixed(3) + "\\]</p>";

    document.getElementById('areaResult').innerHTML = resultArea;
    document.getElementById('axialMomentsResult').innerHTML = resultAxialMoments;
    document.getElementById('axialResistMomentsResult').innerHTML = resultResistMoments;
    document.getElementById('polarMomentResult').innerHTML = resultPolarMoment;
    document.getElementById('polarResistMomentResult').innerHTML = resultPolarResistMoment;
}

var last_external_dia = 12;
var last_inner_dia = 8;
function calcTubeParam(external_dia, inner_dia) {

    external_dia = external_dia === 0 ?
        external_dia = window.last_external_dia : window.last_external_dia = external_dia;
    inner_dia = inner_dia === 0 ?
        inner_dia = window.last_inner_dia : window.last_inner_dia = inner_dia;

    let alpha = inner_dia/external_dia;
    let area = ((Math.PI * Math.pow(external_dia, 2))/4) - ((Math.PI * Math.pow(inner_dia, 2))/4);
    let axialMoments = ((Math.PI * Math.pow(external_dia, 4))/64)*(1-Math.pow(alpha,4));
    let resistMoments = ((Math.PI * Math.pow(external_dia, 3))/32)*(1-Math.pow(alpha,4));
    let polarMoment = ((Math.PI * Math.pow(external_dia, 4))/32)*(1-Math.pow(alpha,4));
    let polarResistMoment = ((Math.PI * Math.pow(external_dia, 3))/16)*(1-Math.pow(alpha,4));

    let resultArea = "<p>\\[A= {{π * D^2} \\over 4} - {{π * d^2} \\over 4} = {{π * {("+ external_dia +"^2-"+ inner_dia +"^2)}} \\over 4}= "+ area.toFixed(3) +"\\]</p>";
    let resultAlpha = "<p>\\[α= { d \\over D} = { "+ inner_dia +" \\over "+ external_dia +"}= "+ alpha.toFixed(3) +"\\]</p>";
    let resultAxialMoments = "<p>\\[J_x= J_y= {{{π * D^4} \\over 64}(1-α^4)} = {{{π * " + external_dia +"^4} \\over 64}(1-"+ alpha.toFixed(3) +"^4)}="
        + axialMoments.toFixed(3) + "\\]</p>";
    let resultResistMoments = "<p>\\[W_x= W_y= {{{π * D^3} \\over 32}(1-α^4)} = {{{π * " + external_dia +"^3} \\over 32}(1-"+ alpha.toFixed(3) +"^4)}="
        + resistMoments.toFixed(3) + "\\]</p>";
    let resultPolarMoment = "<p>\\[J_p= {{{π * D^4} \\over 32}(1-α^4)} = {{{π * " + external_dia +"^4} \\over 32}(1-"+ alpha.toFixed(3) +"^4)}="
        + polarMoment.toFixed(3) + "\\]</p>";
    let resultPolarResistMoment = "<p>\\[W_p= {{{π * D^3} \\over 16}(1-α^4)} = {{{π * " + external_dia +"^3} \\over 16}(1-"+ alpha.toFixed(3) +"^4)}="
        + polarResistMoment.toFixed(3) + "\\]</p>";

    document.getElementById('tubeAreaResult').innerHTML = resultArea;
    document.getElementById('tubeAlphaResult').innerHTML = resultAlpha;
    document.getElementById('tubeAxialMomentsResult').innerHTML = resultAxialMoments;
    document.getElementById('tubeAxialResistMomentsResult').innerHTML = resultResistMoments;
    document.getElementById('tubePolarMomentResult').innerHTML = resultPolarMoment;
    document.getElementById('tubePolarResistMomentResult').innerHTML = resultPolarResistMoment;
}