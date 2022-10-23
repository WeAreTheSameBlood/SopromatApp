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

var last_width_rect_triangle = 8;
var last_height_rect_triangle = 12;
function calcRectParam(width_rect, height_rect) {
    width_rect = width_rect === 0 ?
        width_rect = window.last_width_rect_triangle : window.last_width_rect_triangle = width_rect;
    height_rect = height_rect === 0 ?
        height_rect = window.last_height_rect_triangle : window.last_height_rect_triangle = height_rect;

    let area = width_rect * height_rect;
    let axialMomentsJx = (width_rect * Math.pow(height_rect, 3))/12;
    let axialMomentsJy = (height_rect * Math.pow(width_rect, 3))/12;
    let resistMomentsWx = (width_rect * Math.pow(height_rect, 2))/6;
    let resistMomentsWy = (height_rect * Math.pow(width_rect, 2))/6;

    let resultArea = "<p>\\[A= {b * h} = {"+ width_rect +" * "+ height_rect+"} = "+ area.toFixed(3) +"\\]</p>";
    let resultAxialMoments = "<p>\\[J_x= {{b * h^3} \\over 12} = {{"+ width_rect +" * "+ height_rect+"^3} \\over 12} ="+ axialMomentsJx.toFixed(3) +"\\]</p>" +
        "<p>\\[J_y= {{b^3 * h} \\over 12} = {{"+ width_rect +"^3 * "+ height_rect+"} \\over 12} ="+ axialMomentsJy.toFixed(3) +"\\]</p>";
    let resultResistMoments = "<p>\\[W_x= {{b * h^2} \over 6} = {{"+ width_rect +" * "+ height_rect+"^2} \\over 6} ="+ resistMomentsWx.toFixed(3) +"\\]</p> " +
        "<p>\\[W_y= {{b^2 * h} \\over 6} = {{"+ width_rect +"^2 * "+ height_rect+"} \\over 6} ="+ resistMomentsWy.toFixed(3) +"\\]</p>";

    document.getElementById('rectAreaResult').innerHTML = resultArea;
    document.getElementById('rectAxialMomentsResult').innerHTML = resultAxialMoments;
    document.getElementById('rectAxialResistMomentsResult').innerHTML = resultResistMoments;
}

function calcTriangleParam(width_triangle, height_triangle) {
    width_triangle = width_triangle === 0 ?
        width_triangle = window.last_width_rect_triangle : window.last_width_rect_triangle = width_triangle;
    height_triangle = height_triangle === 0 ?
        height_triangle = window.last_height_rect_triangle : window.last_height_rect_triangle = height_triangle;

    let area = (width_triangle * height_triangle)/2;
    let axialMomentsJx = (width_triangle * Math.pow(height_triangle, 3))/36;
    let axialMomentsJy = (height_triangle * Math.pow(width_triangle, 3))/48;
    let resistMomentsWx = (width_triangle * Math.pow(height_triangle, 2))/24;
    let resistMomentsWy = (height_triangle * Math.pow(width_triangle, 2))/24;

    let resultArea = "<p>\\[A= {{b * h} \\over 2} = {{"+ width_triangle +" * "+ height_triangle+"} \\over 2} = "+ area.toFixed(3) +"\\]</p>";
    let resultAxialMoments = "<p>\\[J_x= {{b * h^3} \\over 12} = {{"+ width_triangle +" * "+ height_triangle+"^3} \\over 36} ="+ axialMomentsJx.toFixed(3) +"\\]</p>" +
        "<p>\\[J_y= {{b^3 * h} \\over 12} = {{"+ width_triangle +"^3 * "+ height_triangle+"} \\over 48} ="+ axialMomentsJy.toFixed(3) +"\\]</p>";
    let resultResistMoments = "<p>\\[W_x= {{b * h^2} \over 6} = {{"+ width_triangle +" * "+ height_triangle+"^2} \\over 24} ="+ resistMomentsWx.toFixed(3) +"\\]</p> " +
        "<p>\\[W_y= {{b^2 * h} \\over 6} = {{"+ width_triangle +"^2 * "+ height_triangle+"} \\over 24} ="+ resistMomentsWy.toFixed(3) +"\\]</p>";

    document.getElementById('triangleAreaResult').innerHTML = resultArea;
    document.getElementById('triangleAxialMomentsResult').innerHTML = resultAxialMoments;
    document.getElementById('triangleAxialResistMomentsResult').innerHTML = resultResistMoments;
}