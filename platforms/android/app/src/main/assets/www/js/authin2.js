
function bmicall(v) {
    //alert(v);
    var height = document.getElementById("height" + v).value;
    var weight = document.getElementById("weight" + v).value;
    var bmi = document.getElementById("bmi" + v);
    var mal = document.getElementById("mal" + v);
    var out = '';

    if ($.trim(height) != '' && $.trim(weight) != '') {
        var hi = parseFloat($.trim(height));
        var wi = parseFloat($.trim(weight));
        var bi = (wi / (hi * hi)).toFixed(2);

        if (bi == 0) {
            out = 0;
            bmi.value = out;
            bmi.readOnly = true;
            mal.disabled = false;
        } else if (bi > 0 && bi < 18) {
            out = bi + ' - (Malnourished)';
            bmi.value = out;
            bmi.readOnly = true;
            mal.value = 'Yes';
            mal.disabled = true;
        } else if (bi >= 18 && bi < 25) {
            out = bi + ' - (Normal)';
            bmi.value = out;
            bmi.readOnly = true;
            mal.value = 'No';
            mal.disabled = true;
        } else if (bi >= 25 && bi < 30) {
            out = bi + ' - (Overweight)';
            bmi.value = out;
            bmi.readOnly = true;
            mal.value = 'No';
            mal.disabled = true;
        } else if (bi >= 30) {
            out = bi + ' - (Obese)';
            bmi.value = out;
            bmi.readOnly = true;
            mal.value = 'No';
            mal.disabled = true;
        } else {
            out = 0;
            bmi.value = out;
            bmi.readOnly = true;
            mal.disabled = false;
        }
    }
}

function malcall(v) {
    var height = document.getElementById("height" + v);
    var weight = document.getElementById("weight" + v);
    var bmi = document.getElementById("bmi" + v);
    var mal = document.getElementById("mal" + v).value;

    if (mal == 'Yes' || mal == 'No') {
        height.value = 0;
        weight.value = 0;
        bmi.value = 0;
        bmi.readOnly = true;
        height.readOnly = true;
        weight.readOnly = true;
    }else{
        height.value = '';
        weight.value = '';
        bmi.value = '';
        bmi.readOnly = false;
        height.readOnly = false;
        weight.readOnly = false;
    }
}

function startpmt2() {
    var i = document.createElement("fieldset");
    i.id = 1;

    var a = document.createElement("legend");
    a.innerHTML = "Principal";

    var options = ["Select Option"];
    var starta = 1900;
    var enda = 2019;
    var si = 0;
    for (starta = 1900; starta <= enda; starta++) {
        options[si] = starta;
        si++;
    }

    var diva = document.createElement("div");
    diva.className = "input-field with-icon margin-bottom";
    var divb = document.createElement("div");
    divb.className = "margin-bottom_low";
    var spana = document.createElement("span");
    spana.className = "icon icontwo";
    spana.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb = document.createElement("span");
    spanb.className = "span2";
    spanb.innerHTML = ('2 - Year of birth');
    //divb.appendChild(spana);
    divb.appendChild(spanb);
    var divc = document.createElement("div");
    divc.className = "col-sm-10";
    var inputa = document.createElement("select");
    inputa.name = 'age';
    inputa.id = 'age';
    inputa.className = 'browser-default';
    inputa.setAttribute('onChange', 'showDivResp(this)');

    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.text = (options[i2] == "1900") ? "Select Option" : options[i2];
        option.value = (options[i2] == "1900") ? "" : options[i2];
        inputa.appendChild(option);
    }

    divc.appendChild(inputa);
    diva.appendChild(divb);
    diva.appendChild(divc);


    var sex = ["Select Option", "Female", "Male"];
    var diva2 = document.createElement("div");
    diva2.className = "input-field with-icon margin-bottom";
    var divb2 = document.createElement("div");
    divb2.className = "margin-bottom_low";
    var spana2 = document.createElement("span");
    spana2.className = "icon icontwo";
    spana2.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb2 = document.createElement("span");
    spanb2.className = "span2";
    spanb2.innerHTML = ('3 - Gender');
    var divc2 = document.createElement("div");
    divc2.className = "col-sm-10";
    var inputa2 = document.createElement("select");
    inputa2.name = 'gender';
    inputa2.id = 'gender';
    inputa2.className = 'browser-default';
    for (var i2 = 0; i2 < sex.length; i2++) {
        var option = document.createElement("option");
        option.value = (sex[i2] == "Select Option") ? "" : sex[i2];
        option.text = sex[i2];
        inputa2.appendChild(option);
    }
    divc2.appendChild(inputa2);
    // divb2.appendChild(spana2);
    divb2.appendChild(spanb2);
    diva2.appendChild(divb2)
    diva2.appendChild(divc2);

    var diva3 = document.createElement("div");
    diva3.className = "input-field with-icon margin-bottom";
    var spana3 = document.createElement("span");
    spana3.className = "icon icontwo";
    spana3.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa3 = document.createElement("input");
    inputa3.name = 'school';
    inputa3.id = 'school';
    inputa3.type = 'text';
    var labela3 = document.createElement("label");
    labela3.setAttribute('for', 'school');
    labela3.className = 'firecolor';
    labela3.innerHTML = '4 - How many years of schooling has this person had?';
    // diva3.appendChild(spana3);
    diva3.appendChild(inputa3);
    diva3.appendChild(labela3);

    var diva4 = document.createElement("div");
    diva4.className = "input-field with-icon margin-bottom";
    var spana4 = document.createElement("span");
    spana4.className = "icon icontwo";
    spana4.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa4 = document.createElement("input");
    inputa4.name = 'height';
    inputa4.id = 'height';
    inputa4.type = 'text';
    var labela4 = document.createElement("label");
    labela4.setAttribute('for', 'height');
    labela4.className = 'firecolor';
    labela4.innerHTML = '5 - What is this person\'s height in meters';

    //diva4.appendChild(spana4);
    diva4.appendChild(inputa4);
    diva4.appendChild(labela4);

    var diva5 = document.createElement("div");
    diva5.className = "input-field with-icon margin-bottom";
    var spana5 = document.createElement("span");
    spana5.className = "icon icontwo";
    spana5.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa5 = document.createElement("input");
    inputa5.name = 'weight';
    inputa5.id = 'weight';
    inputa5.type = 'text';
    var labela5 = document.createElement("label");
    labela5.setAttribute('for', 'weight');
    labela5.className = 'firecolor';
    labela5.innerHTML = '6 - What is this person\'s weight in kg';

    // diva5.appendChild(spana5);
    diva5.appendChild(inputa5);
    diva5.appendChild(labela5);

    var diva6 = document.createElement("div");
    diva6.className = "input-field with-icon margin-bottom";
    var spana6 = document.createElement("span");
    spana6.className = "icon icontwo";
    spana6.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa6 = document.createElement("input");
    inputa6.name = 'bmi';
    inputa6.id = 'bmi';
    inputa6.type = 'text';
    var labela6 = document.createElement("label");
    labela6.setAttribute('for', 'bmi');
    labela6.className = 'firecolor';
    labela6.innerHTML = '7 - What is this person\'s Body Mass Index?'

    //diva6.appendChild(spana6);
    diva6.appendChild(inputa6);
    diva6.appendChild(labela6);

    var options = ["Select Option", "Yes", "No"];
    var diva7 = document.createElement("div");
    diva7.className = "input-field with-icon margin-bottom";
    var divb7 = document.createElement("div");
    divb2.className = "margin-bottom_low";
    var spana7 = document.createElement("span");
    spana7.className = "icon icontwo";
    spana7.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb7 = document.createElement("span");
    spanb7.className = "span2";
    spanb7.innerHTML = ('8 - Is this person malnourished?');
    var divc7 = document.createElement("div");
    divc7.className = "col-sm-10";
    var inputa7 = document.createElement("select");
    inputa7.name = 'mal';
    inputa7.id = 'mal';
    inputa7.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa7.appendChild(option);
    }
    divc7.appendChild(inputa7);
    //divb7.appendChild(spana7);
    divb7.appendChild(spanb7);
    diva7.appendChild(divb7)
    diva7.appendChild(divc7);

    var options = ["Select Option", "Yes", "No"];
    var diva8 = document.createElement("div");
    diva8.className = "input-field with-icon margin-bottom";
    var divb8 = document.createElement("div");
    divb8.className = "margin-bottom_low";
    var spana8 = document.createElement("span");
    spana8.className = "icon icontwo";
    spana8.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb8 = document.createElement("span");
    spanb8.className = "span2";
    spanb8.innerHTML = ('9 - Is this person looking for work, but not working?');
    var divc8 = document.createElement("div");
    divc8.className = "col-sm-10";
    var inputa8 = document.createElement("select");
    inputa8.name = 'work';
    inputa8.id = 'work';
    inputa8.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa8.appendChild(option);
    }
    divc8.appendChild(inputa8);
    // divb8.appendChild(spana8);
    divb8.appendChild(spanb8);
    diva8.appendChild(divb8)
    diva8.appendChild(divc8);

    var diva1 = document.createElement("div");
    diva1.className = "input-field with-icon margin-bottom";
    var spana1 = document.createElement("span");
    spana1.className = "icon icontwo";
    spana1.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa1 = document.createElement("input");
    inputa1.name = 'fname';
    inputa1.id = 'fname';
    inputa1.type = 'text';
    var labela1 = document.createElement("label");
    labela1.setAttribute('for', 'fname');
    labela1.className = 'firecolor';
    labela1.innerHTML = '1 - What is the person Surname?';
    // diva3.appendChild(spana3);
    diva1.appendChild(inputa1);
    diva1.appendChild(labela1);
    
    var diva11 = document.createElement("div");
    diva11.className = "input-field with-icon margin-bottom";
    var spana11 = document.createElement("span");
    spana11.className = "icon icontwo";
    spana11.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa11 = document.createElement("input");
    inputa11.name = 'oname';
    inputa11.id = 'oname';
    inputa11.type = 'text';
    var labela11 = document.createElement("label");
    labela11.setAttribute('for', 'oname');
    labela11.className = 'firecolor';
    labela11.innerHTML = '2 - What is the person Other Names?';
    // diva3.appendChild(spana3);
    diva11.appendChild(inputa11);
    diva11.appendChild(labela11);

    var gen = document.getElementById("general");
    i.appendChild(a);
    i.appendChild(diva1);
    i.appendChild(diva11);
    i.appendChild(diva);
    i.appendChild(diva2);
    i.appendChild(diva3);
    i.appendChild(diva4);
    i.appendChild(diva5);
    i.appendChild(diva6);
    i.appendChild(diva7);
    i.appendChild(diva8);
    gen.appendChild(i);

    var pitb = '<div id="first">'
            + '<table class="bordered striped" style="border: 3px double #990000">'
            + ' <tr id="lrespondent">'
            + '    <td class=""><input type="hidden" name="status" id="status" value="no"></td>'
            + '   <td><input type="hidden" name="mode" id="mode" value="notset">'
            + '  </td>'
            + '</tr>'

            + '<tr id="lxray">'
            + '<td class="">X-Ray Status</td>'
            + '<td>'
            + ' <select name="xray" id="xray" onchange="showDivXray(this)" class="browser-default" style="">'
            + '   <option value="0" >Choose Option</option>'
            + '  <option value="1" >Positive</option>'
            + ' <option value="2" >Negative</option>'
            + '<option value="3" >Unknown</option>'
            + ' </select>'

            + '  </td>'
            + ' </tr>'
            + '<tr id="lhiv">'
            + ' <td class="">HIV Status</td>'
            + '  <td>'
            + '  <select name="hiv" id="hiv" onchange="showDivHIV(this)" class="browser-default" style="">'
            + '     <option value="0" >Choose Option</option>'
            + '   <option value="1" >Positive</option>'
            + '  <option value="2" >Negative</option>'
            + '  <option value="3" >Unknown</option>'
            + '</select>'

            + ' </td>'
            + ' </tr>'
            + ' <tr id="lcough" class="">'
            + '     <td class="">Have Cough?</td>'
            + '   <td>'
            + '<select name="cough" id="cough" onchange="showDivCough(this)" class="browser-default" style="">'
            + '    <option value="0" >Choose Option</option>'
            + '    <option value="1" >Yes</option>'
            + '    <option value="2" >No</option>'
            + '</select>'

            + '</td>'
            + '</tr>'
            + '<tr id="lmore" class="" style="display: none" >'
            + '<td style="" >Cough More Than 2 Weeks?? </td>'
            + '<td>'
            + '<select name ="more" id="more" onchange="showDivMore(this)" class="browser-default"  style="">'
            + '<option value="0" >Choose Option</option>'
            + '<option value="1" >Yes</option>'
            + '<option value="2" >No</option>'
            + '</select>'
            + '</td> '
            + '</tr>'

            + '<tr class="" id="lgrowth" style="display: none" >'
            + '<td style="" >Is Child Growing Adequately? </td>'
            + '<td>'
            + '<select name ="growth" id="growth" onchange="showDivGrowth(this)" class="browser-default" style="">'
            + '<option value="0" >Choose Option</option>'
            + ' <option value="1" >Yes</option>'
            + '<option value="2" >No</option> '
            + '</select>'
            + ' </td>'
            + '</tr>'
            + ' <tr id="lweight" style="display: none">'
            + '<td>Experiencing Weight Loss? </td>'
            + '<td>'
            + '  <span><input type="radio" id="noweightloss" onclick="showDivWeight(this)" name="weightloss" value="noweightloss" class="with-gap" /><label for="noweightloss">No</label><br>'
            + '<input type="radio" id="weightloss" onclick="showDivWeight(this)" name="weightloss" value="weightloss" class="with-gap"/><label for="weightloss">Yes</label></span>'
            + '</td>'
            + '</tr>'
            + '<tr id="lfever" style="display: none">'
            + '<td>Experiencing Fever? </td>'
            + '<td>'
            + ' <span><input type="radio" id="nofever" onclick="showDivFever(this)" name="fever" value="nofever" class="with-gap" /><label for="nofever">No</label><br>'
            + ' <input type="radio" id="fever" onclick="showDivFever(this)" name="fever" value="fever" class="with-gap" /><label for="fever">Yes</label></span>'
            + '</td>'
            + ' </tr>'
            + '<tr  id="lsweat" style="display: none">'
            + '<td>Experiencing Night Sweats? </td>'
            + ' <td>'
            + '<span><input type="radio" id="nosweat" onclick="showDivSweat(this)" name="sweat" value="nosweat" class="with-gap" /><label for="nosweat">No</label><br>'
            + '<input type="radio" id="sweat" onclick="showDivSweat(this)" name="sweat" value="sweat" class="with-gap" /><label for="sweat">Yes</label></span>'

            + '</td>'
            + '</tr>'
            + ' <tr  id="ltb" style="display: none">'
            + '<td>Contact Cough > 1 Month? </td>'
            + '<td>'
            + '<span><input type="radio" id="notb" onclick="showDivTB(this)" name="tb" value="notb" class="with-gap"  /><label for="notb">No</label><br>'
            + '<input type="radio" id="tb" onclick="showDivTB(this)" name="tb" value="tb" class="with-gap" /><label for="tb">Yes</label></span>'

            + ' </td>'
            + '</tr>'
            + ' <tr  id="ldoc" style="display: none">'
            + ' <td colspan="2">'
            + '      <span style="" >Enter Childs Growth Details (Optional)</span>'
            + '  <textarea id="doc" style="margin-bottom:10px" name="doc" class="" placeholder=" Childs Growth Details Can Include (MUAC, Height, Weight, ETC...)"></textarea>'
            + '</td>'
            + '</tr>'
            + '<tr  id="lantitb" style="display: none">'
            + '<td>Used Any AntiTB Drugs For One Month or More? </td>'
            + '<td> '
            + ' <select name ="antitb" id="antitb" onchange="showDivContact(this)" class="browser-default" style="">'
            + ' <option value="nil" >Choose Option</option>'
            + '<option value="yes" >Yes</option>'
            + '<option value="no" >No</option> '
            + '<option value="unknown" >Unknown</option> '
            + '</select>'
            + '</td>'
            + ' </tr>'
            + '<tr  id="lantitb2" style="display: none">'
            + '<td>Recent Exposure To An Adult Who Has Cough? </td>'
            + '<td> '
            + '<select name ="antitb2" id="antitb2" onchange="showDivContact(this)" class="browser-default" style="">'
            + '  <option value="nil" >Choose Option</option>'
            + ' <option value="yes" >Yes</option>'
            + ' <option value="no" >No</option> '
            + ' <option value="unknown" >Unknown</option> '
            + '</select>'
            + '</td>'
            + '</tr>'
            + '</table>'
            + '</div>';
    // + '<label id="lsupost" class="item-input" style="display: none">';

    var pi = document.createElement("fieldset");
    pi.id = 11;

    var api = document.createElement("legend");
    api.innerHTML = "TB Screening";


    var pdiva = document.createElement("div");
    pdiva.className = "input-field with-icon margin-bottom";
    var pdivb = document.createElement("div");
    pdivb.className = "margin-bottom_low";
    pdivb.innerHTML = pitb;

    pdiva.appendChild(pdivb);
    pi.appendChild(api);
    pi.appendChild(pdiva);
    i.appendChild(pi);
}

function finishpmt2() {
    var headcount = parseInt(localStorage.headcount);
    //alert('headcount ' + headcount);
    if (headcount != parseInt(iii)) {

        var i = document.createElement("fieldset");
        i.id = iii + 1;
        var fieldid = iii;
        var indi = parseInt(iii) + 1;

        var a = document.createElement("legend");
        a.innerHTML = 'Individual ' + indi;

        var options = ["Select Option"];
        var starta = 2020;
        var enda = 1900;
        var si = 0;
        for (starta = 2020; starta >= enda; starta--) {
            options[si] = starta;
            si++;
        }
        var diva = document.createElement("div");
        diva.className = "input-field with-icon margin-bottom";
        var divb = document.createElement("div");
        divb.className = "margin-bottom_low";
        var spana = document.createElement("span");
        spana.className = "icon icontwo";
        spana.innerHTML = ('<i class="fa fa-map-pin"></i>');
        var spanb = document.createElement("span");
        spanb.className = "span2";
        spanb.innerHTML = ('3 - Year of birth');
        //divb.appendChild(spana);
        divb.appendChild(spanb);
        var divc = document.createElement("div");
        divc.className = "col-sm-10";
        var inputa = document.createElement("select");
        inputa.name = 'age' + iii;
        inputa.id = 'age' + iii;
        var fillup = inputa.id;
        inputa.onchange = function () {
            checklevel(fillup, fieldid);
        };
        inputa.className = 'form-control';
        for (var i2 = 0; i2 < options.length; i2++) {
            var option = document.createElement("option");
            option.text = (options[i2] == "2020") ? "Select Option" : options[i2];
            option.value = (options[i2] == "2020") ? "" : options[i2];
            inputa.appendChild(option);
        }
        inputa.className = 'browser-default';

        divc.appendChild(inputa);
        diva.appendChild(divb)
        diva.appendChild(divc);


        var sex = ["Select Option", "Female", "Male"];
        var diva2 = document.createElement("div");
        diva2.className = "input-field with-icon margin-bottom";
        var divb2 = document.createElement("div");
        divb2.className = "margin-bottom_low";
        var spana2 = document.createElement("span");
        spana2.className = "icon icontwo";
        spana2.innerHTML = ('<i class="fa fa-map-pin"></i>');
        var spanb2 = document.createElement("span");
        spanb2.className = "span2";
        spanb2.innerHTML = ('4 - Gender');
        var divc2 = document.createElement("div");
        divc2.className = "col-sm-10";
        var inputa2 = document.createElement("select");
        inputa2.name = 'gender' + iii;
        inputa2.id = 'gender' + iii;
        inputa2.className = 'browser-default';
        for (var i2 = 0; i2 < sex.length; i2++) {
            var option = document.createElement("option");
            option.value = (sex[i2] == "Select Option") ? "" : sex[i2];
            option.text = sex[i2];
            inputa2.appendChild(option);
        }
        divc2.appendChild(inputa2);
        // divb2.appendChild(spana2);
        divb2.appendChild(spanb2);
        diva2.appendChild(divb2)
        diva2.appendChild(divc2);

        var diva1 = document.createElement("div");
        diva1.className = "input-field with-icon margin-bottom";
        var spana1 = document.createElement("span");
        spana1.className = "icon icontwo";
        spana1.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
        var inputa1 = document.createElement("input");
        inputa1.name = 'fname' + iii;
        ;
        inputa1.id = 'fname' + iii;
        ;
        inputa1.type = 'text';
        var labela1 = document.createElement("label");
        labela1.setAttribute('for', 'fname' + iii);
        labela1.className = 'firecolor';
        labela1.innerHTML = '1 - What is the person Surname?';
        // diva3.appendChild(spana3);
        diva1.appendChild(inputa1);
        diva1.appendChild(labela1);
        
        
        var diva11 = document.createElement("div");
        diva11.className = "input-field with-icon margin-bottom";
        var spana11 = document.createElement("span");
        spana11.className = "icon icontwo";
        spana11.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
        var inputa11 = document.createElement("input");
        inputa11.name = 'oname' + iii;
        ;
        inputa11.id = 'oname' + iii;
        ;
        inputa11.type = 'text';
        var labela11 = document.createElement("label");
        labela11.setAttribute('for', 'oname' + iii);
        labela11.className = 'firecolor';
        labela11.innerHTML = '2 - What is the person Other Name?';
        // diva3.appendChild(spana3);
        diva11.appendChild(inputa11);
        diva11.appendChild(labela11);

        var coo = document.createElement("div");
        coo.id = 'coo' + iii;
        coo.appendChild(diva2)

        var gen = document.getElementById("general");
        i.appendChild(a);
        i.appendChild(diva1);
        i.appendChild(diva11);
        i.appendChild(diva);
        i.appendChild(coo);
        gen.appendChild(i);


        var pitb = '<div id="first">'
                + '<table class="bordered striped" style="border: 3px double #990000">'
                + ' <tr id="lrespondent' + iii + '">'
                + '    <td class=""><input type="hidden" name="status' + iii + '" id="status' + iii + '" value="no"></td>'
                + '   <td><input type="hidden" name="mode" id="mode" value="notset">'
                + '  </td>'
                + '</tr>'

                + '<tr id="lxray' + iii + '">'
                + '<td class="">X-Ray Status</td>'
                + '<td>'
                + ' <select name="xray' + iii + '" id="xray' + iii + '" onchange="showDivXray(this)" class="browser-default" style="">'
                + '   <option value="0" >Choose Option</option>'
                + '  <option value="1" >Positive</option>'
                + ' <option value="2" >Negative</option>'
                + '<option value="3" >Unknown</option>'
                + ' </select>'

                + '  </td>'
                + ' </tr>'
                + '<tr id="lhiv' + iii + '">'
                + ' <td class="">HIV Status</td>'
                + '  <td>'
                + '  <select name="hiv' + iii + '" id="hiv' + iii + '" onchange="showDivHIV(this)" class="browser-default" style="">'
                + '     <option value="0" >Choose Option</option>'
                + '   <option value="1" >Positive</option>'
                + '  <option value="2" >Negative</option>'
                + '  <option value="3" >Unknown</option>'
                + '</select>'

                + ' </td>'
                + ' </tr>'
                + ' <tr id="lcough' + iii + '" class="">'
                + '     <td class="">Have Cough?</td>'
                + '   <td>'
                + '<select name="cough' + iii + '" id="cough' + iii + '" onchange="showDivCough(this)" class="browser-default" style="">'
                + '    <option value="0" >Choose Option</option>'
                + '    <option value="1" >Yes</option>'
                + '    <option value="2" >No</option>'
                + '</select>'

                + '</td>'
                + '</tr>'
                + '<tr id="lmore' + iii + '" class="" style="display: none" >'
                + '<td style="" >Cough More Than 2 Weeks?? </td>'
                + '<td>'
                + '<select name ="more' + iii + '" id="more' + iii + '" onchange="showDivMore(this)" class="browser-default"  style="">'
                + '<option value="0" >Choose Option</option>'
                + '<option value="1" >Yes</option>'
                + '<option value="2" >No</option>'
                + '</select>'
                + '</td> '
                + '</tr>'

                + '<tr class="" id="lgrowth' + iii + '" style="display: none" >'
                + '<td style="" >Is Child Growing Adequately? </td>'
                + '<td>'
                + '<select name ="growth' + iii + '" id="growth' + iii + '" onchange="showDivGrowth(this)" class="browser-default" style="">'
                + '<option value="0" >Choose Option</option>'
                + ' <option value="1" >Yes</option>'
                + '<option value="2" >No</option> '
                + '</select>'
                + ' </td>'
                + '</tr>'
                + ' <tr id="lweight' + iii + '" style="display: none">'
                + '<td>Experiencing Weight Loss? </td>'
                + '<td>'
                + '  <span><input type="radio" id="noweightloss' + iii + '" onclick="showDivWeight(this)" name="weightloss' + iii + '" value="noweightloss" class="with-gap" /><label for="noweightloss' + iii + '">No</label><br>'
                + '<input type="radio" id="weightloss' + iii + '" onclick="showDivWeight(this)" name="weightloss' + iii + '" value="weightloss" class="with-gap"/><label for="weightloss' + iii + '">Yes</label></span>'
                + '</td>'
                + '</tr>'
                + '<tr id="lfever' + iii + '" style="display: none">'
                + '<td>Experiencing Fever? </td>'
                + '<td>'
                + ' <span><input type="radio" id="nofever' + iii + '" onclick="showDivFever(this)" name="fever' + iii + '" value="nofever" class="with-gap" /><label for="nofever' + iii + '">No</label><br>'
                + ' <input type="radio" id="fever' + iii + '" onclick="showDivFever(this)" name="fever' + iii + '" value="fever" class="with-gap" /><label for="fever' + iii + '">Yes</label></span>'
                + '</td>'
                + ' </tr>'
                + '<tr  id="lsweat' + iii + '" style="display: none">'
                + '<td>Experiencing Night Sweats? </td>'
                + ' <td>'
                + '<span><input type="radio" id="nosweat' + iii + '" onclick="showDivSweat(this)" name="sweat' + iii + '" value="nosweat" class="with-gap" /><label for="nosweat' + iii + '">No</label><br>'
                + '<input type="radio" id="sweat' + iii + '" onclick="showDivSweat(this)" name="sweat' + iii + '" value="sweat" class="with-gap" /><label for="sweat' + iii + '">Yes</label></span>'

                + '</td>'
                + '</tr>'
                + ' <tr  id="ltb' + iii + '" style="display: none">'
                + '<td>Contact Cough > 1 Month? </td>'
                + '<td>'
                + '<span><input type="radio" id="notb' + iii + '" onclick="showDivTB(this)" name="tb' + iii + '" value="notb" class="with-gap"  /><label for="notb' + iii + '">No</label><br>'
                + '<input type="radio" id="tb' + iii + '" onclick="showDivTB(this)" name="tb' + iii + '" value="tb" class="with-gap" /><label for="tb' + iii + '">Yes</label></span>'

                + ' </td>'
                + '</tr>'
                + ' <tr  id="ldoc' + iii + '" style="display: none">'
                + ' <td colspan="2">'
                + '      <span style="" >Enter Childs Growth Details (Optional)</span>'
                + '  <textarea id="doc' + iii + '" style="margin-bottom:10px" name="doc' + iii + '" class="" placeholder=" Childs Growth Details Can Include (MUAC, Height, Weight, ETC...)"></textarea>'
                + '</td>'
                + '</tr>'
                + '<tr  id="lantitb' + iii + '" style="display: none">'
                + '<td>Used Any AntiTB Drugs For One Month or More? </td>'
                + '<td> '
                + ' <select name ="antitb' + iii + '" id="antitb' + iii + '" onchange="showDivContact(this)" class="browser-default" style="">'
                + ' <option value="nil" >Choose Option</option>'
                + '<option value="yes" >Yes</option>'
                + '<option value="no" >No</option> '
                + '<option value="unknown" >Unknown</option> '
                + '</select>'
                + '</td>'
                + ' </tr>'
                + '<tr  id="lantitb2' + iii + '" style="display: none">'
                + '<td>Recent Exposure To An Adult Who Has Cough? </td>'
                + '<td> '
                + '<select name ="antitb2' + iii + '" id="antitb2' + iii + '" onchange="showDivContact(this)" class="browser-default" style="">'
                + '  <option value="nil" >Choose Option</option>'
                + ' <option value="yes" >Yes</option>'
                + ' <option value="no" >No</option> '
                + ' <option value="unknown" >Unknown</option> '
                + '</select>'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</div>';
        // + '<label id="lsupost" class="item-input" style="display: none">';

        var pi = document.createElement("fieldset");
        pi.id = 11;

        var api = document.createElement("legend");
        api.innerHTML = "TB Screening";


        var pdiva = document.createElement("div");
        pdiva.className = "input-field with-icon margin-bottom";
        var pdivb = document.createElement("div");
        pdivb.className = "margin-bottom_low";
        pdivb.innerHTML = pitb;

        pdiva.appendChild(pdivb);
        pi.appendChild(api);
        pi.appendChild(pdiva);
        i.appendChild(pi);

    } else {
        document.getElementById('lsupost').style.display = "block";
        //alert('Stop one');
        var rew = document.getElementById("nextscreen");
        rew.innerHTML = "Next Phase";
        rew.onclick = function () {
            screenup();
        };
        rew.className = 'btn-large block margin-bottomm';
    }
    ++iii;
}

function getAge(year) {
    var today = new Date();
    var yyyy = (parseInt(year)) ? parseInt(year) : 0;
    //alert(yyyy);
    var range = '0';

    if (yyyy == 0) {
        alert('Question on year of birth has not been answered for principal');
        range = '0';
        return range;
    }

    var age = today.getFullYear() - yyyy;//birthDate.getFullYear();
    if (age > 70) { // adult dependent
        range = '2';
    } else if (age < 5) { // infant 
        range = '4';
    } else if (age > 5 && age <= 14) { // child n teens
        range = '3';
    } else { //self
        range = '1';
    }
    //alert(range);
    return range;
}

function checklevel(idd, fieldid) {
    var i = document.createElement("fieldset");
    i.id = iii + 1;
    //var fieldid = i.id;

        var indi = parseInt(iii) + 1;

        var a = document.createElement("legend");
        a.innerHTML = 'Individual ' + indi;

    var options = ["Select Option"];
    var starta = 1900;
    var enda = 2019;
    var si = 0;
    for (starta = 1900; starta <= enda; starta++) {
        options[si] = starta;
        si++;
    }
    var diva = document.createElement("div");
    diva.className = "input-field with-icon margin-bottom";
    var divb = document.createElement("div");
    divb.className = "margin-bottom_low";
    var spana = document.createElement("span");
    spana.className = "icon icontwo";
    spana.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb = document.createElement("span");
    spanb.className = "span2";
    spanb.innerHTML = ('1 - Year of birth');
    //divb.appendChild(spana);
    divb.appendChild(spanb);
    var divc = document.createElement("div");
    divc.className = "col-sm-10";
    var inputa = document.createElement("select");
    inputa.name = 'age' + iii;
    inputa.id = 'age' + iii;
    var fillup = inputa.id;
    inputa.onchange = function () {
        checklevel(fillup, fieldid);
    };
    inputa.className = 'form-control';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.text = (options[i2] == "1900") ? "Select Option" : options[i2];
        option.value = (options[i2] == "1900") ? "" : options[i2];
        inputa.appendChild(option);
    }
    inputa.className = 'browser-default';

    divc.appendChild(inputa);
    diva.appendChild(divb)
    diva.appendChild(divc);

    var d = new Date();
    var n = parseInt(d.getFullYear()) - parseInt(document.getElementById(idd).value);
    var gen = document.getElementById('coo' + fieldid);
    gen.innerHTML = '';
    if (n >= 15) { // adult
        gen.appendChild(ret2(fieldid));
        gen.appendChild(ret3(fieldid));
        gen.appendChild(ret4(fieldid));
        gen.appendChild(ret5(fieldid));
        gen.appendChild(ret6(fieldid));
        gen.appendChild(ret7(fieldid));
        gen.appendChild(ret8(fieldid));
        gen.appendChild(ret9(fieldid));
    } else if (n < 15 && n > 5) { //teen
        gen.appendChild(ret2(fieldid));
        gen.appendChild(ret3b(fieldid));
    } else { // infant
        gen.appendChild(ret2(fieldid));

    }
}
function ret3b(v) {

    var options = ["Select Option", "Yes", "No"];
    var diva3b = document.createElement("div");
    diva3b.className = "input-field with-icon margin-bottom";
    var divb3b = document.createElement("div");
    divb3b.className = "margin-bottom_low";
    var spana3b = document.createElement("span");
    spana3b.className = "icon icontwo";
    spana3b.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb3b = document.createElement("span");
    spanb3b.className = "span2";
    spanb3b.innerHTML = ('5 - Is this person attending school at this time?');
    var divc3b = document.createElement("div");
    divc3b.className = "col-sm-10";
    var inputa3b = document.createElement("select");
    inputa3b.name = 'schteen' + v;
    inputa3b.id = 'schteen' + v;
    inputa3b.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa3b.appendChild(option);
    }
    divc3b.appendChild(inputa3b);
    // divb8.appendChild(spana8);
    divb3b.appendChild(spanb3b);
    diva3b.appendChild(divb3b)
    diva3b.appendChild(divc3b);

    return diva3b;
}

function ret9(v) {
    var options = ["Select Option", "Spouse", "Dependent", "Adult Dependent"];
    var diva9 = document.createElement("div");
    diva9.className = "input-field with-icon margin-bottom";
    var divb9 = document.createElement("div");
    divb9.className = "margin-bottom_low";
    var spana9 = document.createElement("span");
    spana9.className = "icon icontwo";
    spana9.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb9 = document.createElement("span");
    spanb9.className = "span2";
    spanb9.innerHTML = ('11 - Relationship with the Principal?');
    var divc9 = document.createElement("div");
    divc9.className = "col-sm-10";
    var inputa9 = document.createElement("select");
    inputa9.name = 'rela' + v;
    inputa9.id = 'rela' + v;
    inputa9.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa9.appendChild(option);
    }
    divc9.appendChild(inputa9);
    // divb8.appendChild(spana8);
    divb9.appendChild(spanb9);
    diva9.appendChild(divb9)
    diva9.appendChild(divc9);
    return diva9;
}

function ret8(v) {
    var options = ["Select Option", "Yes", "No"];
    var diva8 = document.createElement("div");
    diva8.className = "input-field with-icon margin-bottom";
    var divb8 = document.createElement("div");
    divb8.className = "margin-bottom_low";
    var spana8 = document.createElement("span");
    spana8.className = "icon icontwo";
    spana8.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb8 = document.createElement("span");
    spanb8.className = "span2";
    spanb8.innerHTML = ('10 - Is this person looking for work, but not working?');
    var divc8 = document.createElement("div");
    divc8.className = "col-sm-10";
    var inputa8 = document.createElement("select");
    inputa8.name = 'work' + v;
    inputa8.id = 'work' + v;
    inputa8.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa8.appendChild(option);
    }
    divc8.appendChild(inputa8);
    // divb8.appendChild(spana8);
    divb8.appendChild(spanb8);
    diva8.appendChild(divb8)
    diva8.appendChild(divc8);
    return diva8;
}
function ret7(v) {
    var options = ["Select Option", "Yes", "No"];
    var diva7 = document.createElement("div");
    diva7.className = "input-field with-icon margin-bottom";
    var divb7 = document.createElement("div");
    divb7.className = "margin-bottom_low";
    var spana7 = document.createElement("span");
    spana7.className = "icon icontwo";
    spana7.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb7 = document.createElement("span");
    spanb7.className = "span2";
    spanb7.innerHTML = ('9 - Is this person malnourished?');
    var divc7 = document.createElement("div");
    divc7.className = "col-sm-10";
    var inputa7 = document.createElement("select");
    inputa7.name = 'mal' + v;
    inputa7.id = 'mal' + v;
    inputa7.oninput = function () {
        malcall(v);
    };
    inputa7.className = 'browser-default';
    for (var i2 = 0; i2 < options.length; i2++) {
        var option = document.createElement("option");
        option.value = (options[i2] == "Select Option") ? "" : options[i2];
        option.text = options[i2];
        inputa7.appendChild(option);
    }
    divc7.appendChild(inputa7);
    //divb7.appendChild(spana7);
    divb7.appendChild(spanb7);
    diva7.appendChild(divb7)
    diva7.appendChild(divc7);
    return diva7;
}
function ret6(v) {
    var diva6 = document.createElement("div");
    diva6.className = "input-field with-icon margin-bottom";
    var spana6 = document.createElement("span");
    spana6.className = "icon icontwo";
    spana6.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa6 = document.createElement("input");
    inputa6.name = 'bmi' + v;
    inputa6.id = 'bmi' + v;
    inputa6.type = 'text';
    var labela6 = document.createElement("label");
    labela6.setAttribute('for', 'bmi' + v);
    labela6.className = 'firecolor';
    labela6.innerHTML = '8 - What is this person\'s Body Mass Index?'

    //diva6.appendChild(spana6);
    diva6.appendChild(inputa6);
    diva6.appendChild(labela6);
    return diva6;
}
function ret5(v) {
    var diva5 = document.createElement("div");
    diva5.className = "input-field with-icon margin-bottom";
    var spana5 = document.createElement("span");
    spana5.className = "icon icontwo";
    spana5.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa5 = document.createElement("input");
    inputa5.name = 'weight' + v;
    inputa5.id = 'weight' + v;
    inputa5.type = 'text';
    inputa5.oninput = function () {
        bmicall(v);
    };
    var labela5 = document.createElement("label");
    labela5.setAttribute('for', 'weight' + v);
    labela5.className = 'firecolor';
    labela5.innerHTML = '7 - What is this person\'s weight in kg';

    // diva5.appendChild(spana5);
    diva5.appendChild(inputa5);
    diva5.appendChild(labela5);
    return diva5;
}
function ret4(v) {

    var diva4 = document.createElement("div");
    diva4.className = "input-field with-icon margin-bottom";
    var spana4 = document.createElement("span");
    spana4.className = "icon icontwo";
    spana4.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa4 = document.createElement("input");
    inputa4.name = 'height' + v;
    inputa4.id = 'height' + v;
    inputa4.type = 'text';
    inputa4.oninput = function () {
        bmicall(v);
    };
    var labela4 = document.createElement("label");
    labela4.setAttribute('for', 'height' + v);
    labela4.className = 'firecolor';
    labela4.innerHTML = '6 - What is this person\'s height in meters';

    //diva4.appendChild(spana4);
    diva4.appendChild(inputa4);
    diva4.appendChild(labela4);
    return diva4;
}
function ret3(v) {
    var diva3 = document.createElement("div");
    diva3.className = "input-field with-icon margin-bottom";
    var spana3 = document.createElement("span");
    spana3.className = "icon icontwo";
    spana3.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
    var inputa3 = document.createElement("input");
    inputa3.name = 'school' + v;
    inputa3.id = 'school' + v;
    inputa3.type = 'text';
    var labela3 = document.createElement("label");
    labela3.setAttribute('for', 'school' + v);
    labela3.className = 'firecolor';
    labela3.innerHTML = '5 - How many years of schooling has this person had?';
    // diva3.appendChild(spana3);
    diva3.appendChild(inputa3);
    diva3.appendChild(labela3);
    return diva3;
}
function ret2(v) {
    var sex = ["Select Option", "Female", "Male"];
    var diva2 = document.createElement("div");
    diva2.className = "input-field with-icon margin-bottom";
    var divb2 = document.createElement("div");
    divb2.className = "margin-bottom_low";
    var spana2 = document.createElement("span");
    spana2.className = "icon icontwo";
    spana2.innerHTML = ('<i class="fa fa-map-pin"></i>');
    var spanb2 = document.createElement("span");
    spanb2.className = "span2";
    spanb2.innerHTML = ('4 - Gender');
    var divc2 = document.createElement("div");
    divc2.className = "col-sm-10";
    var inputa2 = document.createElement("select");
    inputa2.name = 'gender' + v;
    inputa2.id = 'gender' + v;
    inputa2.className = 'browser-default';
    for (var i2 = 0; i2 < sex.length; i2++) {
        var option = document.createElement("option");
        option.value = (sex[i2] == "Select Option") ? "" : sex[i2];
        option.text = sex[i2];
        inputa2.appendChild(option);
    }
    divc2.appendChild(inputa2);
    // divb2.appendChild(spana2);
    divb2.appendChild(spanb2);
    diva2.appendChild(divb2)
    diva2.appendChild(divc2);
    return diva2;

}

function finishpmt22() {
    var headcount = parseInt(localStorage.headcount) - 1;
    //alert(headcount);
    for (var i = 0; i <= headcount; i++) {
        if (i == 0) {
            var name = document.getElementById("name").value;
            var gender = document.getElementById("gender").value;
            var age = document.getElementById("age").value;
            if ($.trim(name) == '') {
                alert('Question Name has not been answered for Individual 2');
                return false;
            } else if ($.trim(gender) == '') {
                alert('Question Gender has not been answered for Individual 2');
                return false;
            } else if ($.trim(age) == '') {
                alert('Question Age has not been answered for Individual 2');
                return false;
            }
            localStorage.ind = name + ":" + gender + ":" + age + "-";
            // alert(localStorage.ind);
        } else {
            // alert("name"+i);
            var namey = document.getElementsByName("name" + i)[0].value;
            var gendery = document.getElementById("gender" + i).value;
            var agey = document.getElementById("age" + i).value;
            var x = i + 1;
            var xx = x+1;
            if ($.trim(namey) == '') {
                alert('Question Name has not been answered for Individual ' + xx);
                return false;
            } else if ($.trim(gendery) == '') {
                alert('Question Gender has not been answered for Individual ' + xx);
                return false;
            } else if ($.trim(agey) == '') {
                alert('Question Age has not been answered for Individual ' + xx);
                return false;
            }
            localStorage.ind += namey + ":" + gendery + ":" + agey + "-";
            //alert(localStorage.ind);
        }
    }
    window.location.href = 'personal.html';
}

function createform(headcount) {
    for (i = 1; i <= headcount; i++) {
        var sourceNode = document.getElementById("1");
        var node = duplicateNode(i, sourceNode, ["id", "name", "placeholder"]);
        sourceNode.parentNode.appendChild(node);
    }

}

function duplicateNode(counter, /*DOMNode*/sourceNode, /*Array*/attributesToBump) {

    if (counter > 1) {
        var rar = counter - 1;
        var bus = rar.toString();
        document.getElementById("tit" + bus).innerHTML = "Individual Details - " + counter;
    }

    var out = sourceNode.cloneNode(true);
    if (out.hasAttribute("id")) {
        out["id"] = bump(out["id"]);
    }
    var nodes = out.getElementsByTagName("*");
    var co = 0;
    for (var i = 0, len1 = nodes.length; i < len1; i++) {
        var node = nodes[i];
        for (var j = 0, len2 = attributesToBump.length; j < len2; j++) {
            var attribute = attributesToBump[j];
            if (node.hasAttribute(attribute)) {
                node[attribute] = bump(node[attribute]);
            }
        }
        co++
    }

    function bump(/*String*/str) {
        return str + "" + counter;
    }

    return out;
}


function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do {
        d2 = new Date();
    }
    while (d2 - d < ms);
}

function myCount() {
    var i = localStorage.sid;
    var capsid = (i >= 26 ? ((i / 26 >> 0) - 1) : '') + 'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
    //var capsid = (i >= 26 ? idOf((i / 26 >> 0) - 1) : '') + 'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
    var d = new Date();
    var n = capsid.toUpperCase() + '' + d.getSeconds() + '' + d.getMilliseconds();
    return n;
}

function getcount() {
    var url = "http://mpsportal.com.ng/server/auth.php?callback=?";
    var sid = localStorage.screen;
    //var nnn = localStorage.ppithreshold
    var dataString = "sid=" + sid + "&getcount=";
    if ($.trim(sid) == '' || sid == 0) {
        alert("Method Error");
        return false;
    }

    if (navigator.onLine)
    {
        var countnew = localStorage.hhlinkid;
        alert(localStorage.hhlinkid);
        localStorage.hcount = countnew;//String(dp);
        if (localStorage.commid == 0) {
            localStorage.hhid = 'MPS/PMT/' + countnew;
            $("#counta").html("PMT Screening Household Count4: " + countnew);
        } else {
            localStorage.hhid = 'MPS/PMT/' + countnew;
            $("#counta").html("PMT Screening Household Count3: " + countnew);
        }
    } else {
        var d = new Date();
        var dp = localStorage.hhlinkid; //myCount();
        localStorage.hcount = dp;// String(dp) + localStorage.sid;
        if (localStorage.commid == 0) {
            localStorage.hhid = 'MPS/PMT/' + dp;
            $("#counta").html("Self Screening Household Count2: " + dp);
        } else {
            localStorage.hhid = 'MPS/PMT/' + dp;
            $("#counta").html("PMT Screening Household Count1: " + dp);
        }
    }
    return false;
}


function sendMail(phone) {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'YOUR API KEY HERE',
            'message': {
                'from_email': 'notification@matslagos.com.ng',
                'to': [
                    {
                        'email': 'RECIPIENT@EMAIL.HERE',
                        'name': 'RECIPIENT NAME (OPTIONAL)',
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': 'MATS Alert',
                'html': 'Hello, a presumptive has just been detected at your OPD. Find below the details:<br/>\n\
        Name: \n\
        Phone Number: \n\
        Respondent: \n\
        Growth Details: '
            }
        }
    }).done(function (response) {
        console.log(response); // if you're into that sorta thing
    });
}

if (localStorage.login != "true") {
    window.location.href = "index.html";
}

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);
if (localStorage.login == "true" && filename == 'login.html') {
    window.location.href = "index.html";
}
else if (localStorage.login == "false" && filename != 'login.html') {
    window.location.href = "login.html";
}



function showBox() {
    // Get the checkbox
    var checkBox = document.getElementById("agree");
    // Get the output text
    var text = document.getElementById("formcontents");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
        document.getElementById('first').style.display = "block";
    } else {
        text.style.display = "none";
        document.getElementById('first').style.display = "none";
    }
}

function clickme() {
    var i = iii - 1;
    var resp = getAge(document.getElementById('age' + i).value);
    if (resp == "3" || resp == "4") {
        document.getElementById('lantitb2' + i).style.display = "table-row";
    } else {
        document.getElementById('lantitb' + i).style.display = "table-row";
    }
    document.getElementById('status' + i).value = 'yes';
}

function clickme2() {
    var i = iii - 1;
    document.getElementById('lantitb' + i).style.display = "none";
    document.getElementById('lantitb2' + i).style.display = "none";
    document.getElementById('status' + i).value = 'no';
}


function showDivResp(elem) {
    var i = iii - 1;
    document.getElementById('cough' + i).selectedIndex = 0;
    document.getElementById('hiv' + i).selectedIndex = 0;
    document.getElementById('xray' + i).selectedIndex = 0;
    document.getElementById('antitb' + i).selectedIndex = 0;
    //document.getElementById('state').selectedIndex = 0;
    //document.getElementById('lga').selectedIndex = 0;
    // document.getElementById('facility').selectedIndex = 0;
    document.getElementById('lweight' + i).style.display = "none"
    document.getElementById('lmore' + i).style.display = "none";
    document.getElementById('lgrowth' + i).style.display = "none";
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    var resp = getAge(document.getElementById('age' + i).value);
    if (resp == 4) {
        document.getElementById('lxray' + i).style.display = "none";
    } else {
        document.getElementById('lxray' + i).style.display = "table-row";
    }
}


function showDivHIV(elem) {// reset value for HIV field
    var i = iii - 1;
    document.getElementById('cough' + i).selectedIndex = 0;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lweight' + i).style.display = "none"
    document.getElementById('lmore' + i).style.display = "none";
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";


}

function validateIndividual() {
    //alert(iii);
    var i = iii - 1;

    //alert("age" + i);
    var age = document.getElementById("age" + i).value;
    var fname = document.getElementById("fname" + i).value;
    var oname = document.getElementById("oname" + i).value;
    var gender = document.getElementById("gender" + i).value;

    if ($.trim(age) == '') {
        alert('Question on year of birth has not been answered for individual ' + iii);
        document.getElementById('cough' + i).selectedIndex = 0;
        document.getElementById('xray' + i).selectedIndex = 0;
        return false;
    } else if ($.trim(fname) == '') {
        alert('Question on Surname has not been answered for  individual ' + iii);
        document.getElementById('cough' + i).selectedIndex = 0;
        document.getElementById('xray' + i).selectedIndex = 0;
        return false;
    } else if ($.trim(oname) == '') {
        alert('Question on Other Names has not been answered for  individual ' + iii);
        document.getElementById('cough' + i).selectedIndex = 0;
        document.getElementById('xray' + i).selectedIndex = 0;
        return false;
    } else if ($.trim(gender) == '') {
        alert('Question on gender has not been answered for  individual ' + iii);
        document.getElementById('cough' + i).selectedIndex = 0;
        document.getElementById('xray' + i).selectedIndex = 0;
        return false;
    }

    if (document.getElementById("schteen" + i)) {
        var school = document.getElementById("schteen" + i).value;
        var gender = document.getElementById("gender" + i).value;
        var fname = document.getElementById("fname" + i).value;
        var oname = document.getElementById("oname" + i).value;

        if ($.trim(age) == '') {
            alert('Question on year of birth has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(fname) == '') {
            alert('Question on surname has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(oname) == '') {
            alert('Question on other names has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(gender) == '') {
            alert('Question on gender has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(school) == '') {
            alert('Question on school has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        }
        // eduteen[i] = (school == "Yes") ? 0 : 1;
        localStorage.question2 = localStorage.question2.concat('"age' + i + '":"' + age + '","gender' + i + '":"' + gender + '","schteen' + i + '":"' + school + '","fname' + i + '":"' + fname + '","oname' + i + '":"' + oname + '","|"');
    } else if (document.getElementById("work" + i)) {
        var gender = document.getElementById("gender" + i).value;
        var school = document.getElementById("school" + i).value;
        var height = document.getElementById("height" + i).value;
        var weight = document.getElementById("weight" + i).value;
        var bmi = document.getElementById("bmi" + i).value;
        var mal = document.getElementById("mal" + i).value;
        var work = document.getElementById("work" + i).value;
        var fname = document.getElementById("fname" + i).value;
        var oname = document.getElementById("oname" + i).value;
        var rela = document.getElementById("rela" + i).value;

        //edu[i] = (parseInt(school) >= 6) ? 0 : 1;
        //health[i] = (mal == "Yes") ? 1 : 0;
        //emp[i] = (work == "Yes") ? 1 : 0;

        if ($.trim(age) == '') {
            alert('Question on year of birth has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(fname) == '') {
            alert('Question on surname has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        }  else if ($.trim(oname) == '') {
            alert('Question on other names has not been answered for  individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(gender) == '') {
            alert('Question on gender has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(school) == '') {
            alert('Question on school has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(height) == '') {
            alert('Question on height has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(weight) == '') {
            alert('Question on weight has not been answered individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(bmi) == '') {
            alert('Question on bmi has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(mal) == '') {
            alert('Question on malnutrition  has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(work) == '') {
            alert('Question on work has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        } else if ($.trim(rela) == '') {
            alert('Question on relationship has not been answered for individual ' + iii);
            document.getElementById('cough' + i).selectedIndex = 0;
            document.getElementById('xray' + i).selectedIndex = 0;
            return false;
        }
        localStorage.question2 = localStorage.question2.concat('"age' + i + '":"' + age + '","gender' + i + '":"' + gender + '","school' + i + '":"' + school + '","height' + i + '":"' + height + '","weight' + i + '":"' + weight + '","bmi' + i + '":"' + bmi + '","mal' + i + '":"' + mal + '","work' + i + '":"' + work + '","fname' + i + '":"' + fname + '","oname' + i + '":"' + oname + '","rela' + i + '":"' + rela + '","|"');// + "&headcount=" + headcount2 + "&state=" + state + "&lga=" + lga + "&ward=" + ward + "&scoredata=" + scoredata + "&agent=" + agent + "&pushscreenpmt=";
    } else {
        var gender = document.getElementById("gender" + i).value;
        localStorage.question2 = localStorage.question2.concat('"age' + i + '":"' + age + '","gender' + i + '":"' + gender + '","fname' + i + '":"' + fname + '","oname' + i + '":"' + oname + '","|"');// + "&headcount=" + headcount2 + "&state=" + state + "&lga=" + lga + "&ward=" + ward + "&scoredata=" + scoredata + "&agent=" + agent + "&pushscreenpmt=";
    }
}

function showDivXray(elem) {// reset value for Xray field
    //validateIndividual();
    var i = iii - 1;
    document.getElementById('cough' + i).selectedIndex = 0;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lweight' + i).style.display = "none"
    document.getElementById('lmore' + i).style.display = "none";
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    // document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";


}


function showDivCough(elem) {
    validateIndividual();
    var i = iii - 1;
    var hiv = document.getElementById('hiv' + i).value;
    var xray = document.getElementById('xray' + i).value;
    var resp = getAge(document.getElementById('age' + i).value);

    if ($.trim(resp) == '0' || $.trim(hiv) == '0') {
        alert("Check Year of Birth and HIV Status Field Before Proceeding");
        document.getElementById('hiv' + i).selectedIndex = 0;
        document.getElementById('age' + i).selectedIndex = 0;
        return false;
    }
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('lweight' + i).style.display = "none";
    document.getElementById('growth' + i).selectedIndex = 0;
    document.getElementById('more' + i).selectedIndex = 0;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('fever' + i).checked = false;
    document.getElementById('weightloss' + i).checked = false;
    document.getElementById('nofever' + i).checked = false;
    document.getElementById('noweightloss' + i).checked = false;
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    if (elem.value == 1) {// yes cough
        if (hiv == 1) {
            document.getElementById('yeas3').click(); // yes tb flag by hiv
            document.getElementById('lweight' + i).style.display = "none"
            document.getElementById('lmore' + i).style.display = "none";
            document.getElementById('lgrowth' + i).style.display = "none";
            //document.getElementById('lsupost').style.display = "block";
        } else if (hiv == 2 || hiv == 3) {
            document.getElementById('lweight' + i).style.display = "none"
            document.getElementById('lmore' + i).style.display = "table-row";
            document.getElementById('lgrowth' + i).style.display = "none";
        }
    } else if (elem.value == 2) { // no cough
        document.getElementById('lmore' + i).style.display = "none";
        if (resp == 4) {
            document.getElementById('lgrowth' + i).style.display = "table-row";
            document.getElementById('lweight' + i).style.display = "none";
            document.getElementById('lmore' + i).style.display = "none";
        } else {
            document.getElementById('lweight' + i).style.display = "table-row";
            document.getElementById('lfever' + i).style.display = "table-row";
            document.getElementById('lgrowth' + i).style.display = "none";
            document.getElementById('lmore' + i).style.display = "none";
        }
    }
}


function showDivMore(elem) {
    var i = iii - 1;
    var hiv = document.getElementById('hiv' + i).value;
    var resp = getAge(document.getElementById('age' + i).value);
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('growth' + i).selectedIndex = 0;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('fever' + i).checked = false;
    document.getElementById('weightloss' + i).checked = false;
    document.getElementById('nofever' + i).checked = false;
    document.getElementById('noweightloss' + i).checked = false;
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    if (elem.value == 1) {// yes more than 2 weeks
        if (resp == 4) {
            document.getElementById('lgrowth' + i).style.display = "table-row";
            document.getElementById('lweight' + i).style.display = "none";
        } else {
            document.getElementById('yeas3').click(); // yes tb flag by more than 2 weeks for adults
            document.getElementById('lweight' + i).style.display = "none";
            document.getElementById('lgrowth' + i).style.display = "none";
            //document.getElementById('lsupost').style.display = "block";
        }
    } else if (elem.value == 2) { //below 2 weeks
        if (resp == 4) {
            document.getElementById('lgrowth' + i).style.display = "table-row";
            document.getElementById('lweight' + i).style.display = "none";
        } else {
            document.getElementById('lweight' + i).style.display = "table-row";
            document.getElementById('lfever' + i).style.display = "table-row";
            document.getElementById('lgrowth' + i).style.display = "none";
        }
    }
}


function showDivGrowth(elem) {
    var i = iii - 1;
    var resp = getAge(document.getElementById('age' + i).value);
    ;
    var cough = document.getElementById('cough' + i).value;
    var more = document.getElementById('more' + i).value;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('ldoc' + i).style.display = "none";
    document.getElementById('lfever' + i).style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    if (resp == 4) {
        if (cough == 1) { //yes cough
            if (elem.value == 1) {//yes grow
                if (more == 2) {
                    document.getElementById('lfever' + i).style.display = "table-row";
                } else if (more == 1) {
                    document.getElementById('lfever' + i).style.display = "none";
                    document.getElementById('yeas3').click(); // yes tb flag by cough and >2 weeks
                    //document.getElementById('lsupost').style.display = "block";
                }
            } else if (elem.value == 2) {//no grow
                document.getElementById('lfever' + i).style.display = "none";
                document.getElementById('yeas3').click(); // yes tb flag by cough and >2 weeks
                document.getElementById('ldoc' + i).style.display = "table-row";
                // document.getElementById('lsupost').style.display = "block";
            }
        } else if (cough == 2) {//no cough
            if (elem.value == 1) {//yes grow
                document.getElementById('lfever' + i).style.display = "table-row";
            } else if (elem.value == 2) {//no grow
                document.getElementById('lfever' + i).style.display = "none";
                document.getElementById('yeas3' + i).click(); // yes tb flag by cough and >2 weeks
                document.getElementById('ldoc' + i).style.display = "table-row";
                //document.getElementById('lsupost').style.display = "block";
            }
        }
    }
    else {
        if (cough == 1) { //yes cough
            if (elem.value == 1) {//yes grow
                document.getElementById('ldoc' + i).style.display = "none";
                document.getElementById('lfever' + i).style.display = "none";
                document.getElementById('yeas3').click(); // yes tb flag by cough and >2 weeks
                // document.getElementById('lsupost').style.display = "block";
            } else if (elem.value == 2) {//no grow
                document.getElementById('ldoc' + i).style.display = "table-row";
                document.getElementById('lfever' + i).style.display = "none";
                document.getElementById('yeas3').click(); // yes tb flag by cough and >2 weeks
                //document.getElementById('lsupost').style.display = "block";
            }
        } else if (cough == 2) {//no cough
            if (elem.value == 1) {//yes grow
                document.getElementById('lfever' + i).style.display = "table-row";
            } else if (elem.value == 2) {//no grow
                document.getElementById('lfever' + i).style.display = "none";
                document.getElementById('yeas3').click(); // yes tb flag by cough and >2 weeks
                document.getElementById('ldoc' + i).style.display = "table-row";
                //document.getElementById('lsupost').style.display = "block";
            }
        }
    }
}


function showDivFever(elem) {
    var i = iii - 1;
    var resp = getAge(document.getElementById('age' + i).value);
    var weight = document.getElementById('weightloss' + i).checked;
    var noweight = document.getElementById('noweightloss' + i).checked;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('nosweat' + i).checked = false;
    document.getElementById('sweat' + i).checked = false;
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    if (resp == 4) {
        if (elem.value == "nofever") {
            document.getElementById('yeas4').click(); // no tb from no fever
            document.getElementById('lsupost').style.display = "block";
        } else if (elem.value == "fever") {
            document.getElementById('lsweat' + i).style.display = "table-row";
        }
    }
    else if (resp != 4) {
        if (weight == true) {
            if (elem.value == "fever") {
                document.getElementById('yeas3').click(); // yes tb from yes fever;
                //document.getElementById('lsupost').style.display = "block";
            } else if (elem.value == "nofever") {
                document.getElementById('lsweat' + i).style.display = "table-row";
            }
        } else if (noweight == true) {
            if (elem.value == "fever") {
                document.getElementById('lsweat' + i).style.display = "table-row";
            } else if (elem.value == "nofever") {
                document.getElementById('lsweat' + i).style.display = "table-row";
                //document.getElementById('yeas4').click(); // no tb from no fever;
                //document.getElementById('lsupost').style.display = "block";
            }
        } else {
            alert('Select If Experiencing Weight Loss is True or Not');
        }
    }
}


function showDivWeight(elem) {
    var i = iii - 1;
    document.getElementById('fever' + i).checked = false;
    document.getElementById('nofever' + i).checked = false;
    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lsupost').style.display = "none";
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    //document.getElementById('contact').style.display = "none";
    document.getElementById('lsweat' + i).style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";
}


function showDivSweat(elem) {
    var i = iii - 1;
    var weightloss = false;
    var fever = false;
    if (document.getElementById('weightloss' + i).checked) {
        weightloss = true;
    } else if (document.getElementById('noweightloss' + i).checked) {
        weightloss = false;
    }
    if (document.getElementById('fever' + i).checked) {
        fever = true;
    } else if (document.getElementById('nofever' + i).checked) {
        fever = false;
    }

    //console.log(weightloss + ' . ' +  ' . ' + fever);

    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    // document.getElementById('contact').style.display = "none";
    document.getElementById('ltb' + i).style.display = "none";

    if (elem.value == 'sweat') {
        //document.getElementById('yeas3').click(); //yes tb
        // document.getElementById('lsupost').style.display = "block";
        if (weightloss == false && fever == false) {
            document.getElementById('ltb' + i).style.display = "table-row";
        } else if (weightloss == false && fever == true) {
            document.getElementById('yeas3').click(); //yes tb
        } else if (weightloss == true && fever == false) {
            document.getElementById('yeas3').click(); //yes tb
        } else {
            document.getElementById('yeas3').click(); //yes tb                      
        }
    } else if (elem.value == 'nosweat') {
        if (weightloss == false && fever == false) {
            document.getElementById('yeas4').click(); //no tb}
            document.getElementById('lsupost').style.display = "block";
        } else if (weightloss == false && fever == true) {
            document.getElementById('ltb' + i).style.display = "table-row";
        } else if (weightloss == true && fever == false) {
            document.getElementById('ltb' + i).style.display = "table-row";
        } else {
            document.getElementById('yeas3').click(); //yes tb 
        }
    }
}


function showDivTB(elem) {
    var i = iii - 1;
    var weightloss = false;
    var fever = false;
    var sweat = false;
    if (document.getElementById('weightloss' + i).checked) {
        weightloss = true;
    } else if (document.getElementById('noweightloss' + i).checked) {
        weightloss = false;
    }
    if (document.getElementById('fever' + i).checked) {
        fever = true;
    } else if (document.getElementById('nofever' + i).checked) {
        fever = false;
    }
    if (document.getElementById('sweat' + i).checked) {
        sweat = true;
    } else if (document.getElementById('nosweat' + i).checked) {
        sweat = false;
    }

    document.getElementById('antitb' + i).selectedIndex = 0;
    document.getElementById('lantitb' + i).style.display = "none"
    document.getElementById('lantitb2' + i).style.display = "none";
    // document.getElementById('contact').style.display = "none";

    if (elem.value == 'tb') {
        //document.getElementById('yeas3').click(); //yes tb
        // document.getElementById('lsupost').style.display = "block";
        if (weightloss == false && fever == false && sweat == true) {
            document.getElementById('yeas3').click(); //yes tb
        } else if (weightloss == false && fever == true && sweat == false) {
            document.getElementById('yeas3').click(); //yes tb
        } else if (weightloss == true && fever == false && sweat == false) {
            document.getElementById('yeas3').click(); //yes tb
        } else {
            document.getElementById('yeas3').click(); //yes tb 
        }
    } else if (elem.value == 'notb') {
        if (weightloss == false && fever == false && sweat == true) {
            document.getElementById('yeas4').click(); //no tb}
            document.getElementById('lsupost').style.display = "block";
        } else if (weightloss == false && fever == true && sweat == false) {
            document.getElementById('yeas4').click(); //no tb}
            document.getElementById('lsupost').style.display = "block";
        } else if (weightloss == true && fever == false && sweat == false) {
            document.getElementById('yeas4').click(); //no tb}
            document.getElementById('lsupost').style.display = "block";
        } else {
            document.getElementById('yeas4').click(); //no tb}
            document.getElementById('lsupost').style.display = "block";
        }
    }
}


function showDivContact(elem) {
    var i = iii - 1;
    //alert(elem.value);
    if (elem.value == 'nil') {
        // alert('no done');
        // document.getElementById('contact').style.display = "none";
        document.getElementById('lsupost').style.display = "none";
    }
    else {
       // alert('yes done');
        localStorage.tbstatus = localStorage.tbstatus.concat(i + ':"pre"-'); //'0:"pre"-'
        //document.getElementById('contact').style.display = "block";
        document.getElementById('lsupost').style.display = "block";
    }
}

function finishreview() {
   // alert(localStorage.tbstatus);
   // alert(localStorage.question2);
    //alert('serialcount = ' + iii);
    localStorage.iii = iii;
    var headcount2 = parseInt(localStorage.headcount);
    if (iii >= headcount2) {
        //alert('Stop');
        window.location.href = "review.html";
    } else {
        window.location.href = "rest.html";
    }
}