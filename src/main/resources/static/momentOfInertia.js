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