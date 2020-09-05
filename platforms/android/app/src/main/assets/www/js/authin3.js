
localStorage.back = '';
localStorage.drpchk = 0;
localStorage.drpchk2 = 0;
var rrr = 0;
var xxx = 0;
var optionss = [];
var dpmail = [];

function agecall(year) {
    var today = new Date();
    var yyyy = (parseInt(year)) ? parseInt(year) : 0;
    //alert(yyyy);
    var range = false;

    var age = today.getFullYear() - yyyy;//birthDate.getFullYear();
    if (age <=  15) { // small
        range = true;
    } else { //adult dependen
        range = false;
    }
    return range;
}
function finishup() {
    var count = parseInt(localStorage.headcount);
    var hhpass = document.getElementById('passport').value;
    // alert('headcount:' + count);
    for (var i = 0; i < count; i++) {
        var marital = document.getElementById('work' + i).value;
        var oc = document.getElementById('occ' + i).value;
        var state = document.getElementById('state' + i).value;
        var year = document.getElementById('year' + i).value;
        var num = document.getElementById('no' + i).value;
        var prog = document.getElementById('drop' + i).value;
        var name = document.getElementById('name' + i).value;
        var stat = document.getElementById('status' + i).value;
        var presum = (stat == 'PP' || stat == 'NP') ? 'yes' : 'no';

        var occ = ($.trim(oc) == '') ? 'none': oc;

        if ($.trim(marital) == '') {
            alert('Question on marital status has not been answered for ' + name);
            return false;
        } else if ($.trim(num) == '') {
            alert('Question on Mobile Number has not been answered for ' + name);
            return false;
        } else if ($.trim(occ) == '') {
            alert('Question on Occupation has not been answered for ' + name);
            return false;
        } else if ($.trim(state) == '') {
            alert('Question on State of Origin has not been answered for ' + name);
            return false;
        } else if ($.trim(year) == '') {
            alert('Question on Years of Residence has not been answered for ' + name);
            return false;
        } else if ($.trim(hhpass) == '') {
            alert("Household display image has not been uploaded");
            return false;
        } else if ($.trim(prog) == '' && $.trim(stat) != 'NN') {
            alert('Please select a program for ' + name);
            return false;
        }
    }

    if (navigator.onLine) {
        for (var i = 0; i < count; i++) {
            var marital = document.getElementById('work' + i).value;
            var occ = document.getElementById('occ' + i).value;
            var state = document.getElementById('state' + i).value;
            var year = document.getElementById('year' + i).value;
            var num = document.getElementById('no' + i).value;
            var prog = document.getElementById('drop' + i).value;
            var name = document.getElementById('name' + i).value;
            var stat = document.getElementById('status' + i).value;
            var presume = (stat == 'PP' || stat == 'NP') ? 'yes' : 'no';
            var hid = localStorage.screendate;

            var url = "https://pvtb.com.ng/pharm/auth_new.php?callback=?";
            var dataString = "marital=" + marital + "&occ=" + occ + "&state=" + state + "&year=" + year + "&mobile=" + num + "&prog=" + prog + "&name=" + name + "&stat=" + stat + "&presum=" + presume + "&hid=" + hid  + "&hhpass=" + hhpass + "&finishup=";
            //alert(dataString);
            //console.log(dataString);
            //return false;
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                timeout: 9000,
                beforeSend: function () {
                    localStorage.back = '';
                },
                success: function (data) {
                    if (data) {
                        localStorage.question2 = '';
                        localStorage.tbstatus = '';
                        localStorage.iii = '';
                        localStorage.headcount = 0;
                        localStorage.screendate = '';
                    }

                }
            });
        }
        alert('Screening Completed With Data Uploaded Successfully!');
        window.location.href = 'pmt.html';
    } else {// offline
        for (var i = 0; i < count; i++) {
            //if()
            var marital = document.getElementById('work' + i).value;
            var occ = document.getElementById('occ' + i).value;
            var year = document.getElementById('year' + i).value;
            var state = document.getElementById('state' + i).value;
            var num = document.getElementById('no' + i).value;
            var prog = document.getElementById('drop' + i).value;
            var name = document.getElementById('name' + i).value;
            var stat = document.getElementById('status' + i).value;
            var presume = (stat == 'PP' || stat == 'NP') ? 'yes' : 'no';
            var hid = localStorage.screendate;
            var dataString = "marital=" + marital + "&occ=" + occ + "&state=" + state + "&year=" + year + "&mobile=" + num + "&prog=" + prog + "&name=" + name + "&stat=" + stat + "&presum=" + presume + "&hid=" + hid + "&finishup=";
            var jsonData2 = '"marital":"' + marital + '","occ":"' + occ + '","state":"' + state + '","year":"' + year + '","mobile":"' + num + '","prog":"' + prog + '","name":"' + name + '","stat":"' + stat + '","presum":"' + presum + '","hid":"' + hid  + '","hhpass":"' + hhpass + '","commtext":"' + 'true' + '"';

            for (i = 0; i < 99999; i++) {
                if (localStorage.getItem(i)) {
                   // alert('getitem  : ' + localStorage.getItem(i));
                    continue;
                }
                //var value = localStorage.getItem(key); // Pass a key name to get its value.
                var value = jsonData2;
                //alert(i + ' : ' + value);
                var key = i;
                localStorage.setItem(key, value); // Pass a key name and its value to add or update that key.
                //localStorage.removeItem(key) // Pass a key name to remove that key from storage.
                break;
            }

        }
        alert('Screening Completed With Offline Data Storage!');
        window.location.href = 'pmt.html';
    }
    //end tb status
    //end question2
    // end iii
    // headcount
    //end localStorage.screendate as hid
    // redirect to pmt
}

function pvtbprog2(type) {
    /* var http = new XMLHttpRequest();
     var url = "https://pvtb.com.ng/pharm/auth_new.php?callback=?";;
     var params = "type=" + type + "&pvtbprog=";
     http.open('POST', url, true);
     
     //Send the proper header information along with the request
     http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     
     http.onreadystatechange = function () {//Call a function when the state changes.
     if (http.readyState == 4 && http.status == 200) {
     // alert(http.responseText);
     // alert(rrr);
     handledata(http.responseText);
     }
     }
     http.send(params);
     */
    // alert(localStorage.jsonnn);
    handledata(localStorage.jsonnn, type);
}



function pvtbprog2(type) {
    //alert(type);
    var back = localStorage.jsonnn;
    var opt = back.split("|");
    // console.log(opt);
    window['me' + xxx] = '';
    for (var i = 0; i < opt.length; i++) {
        if (i == 0 && xxx != i) {
            //window.location.href = "review.html";
        }
        if ($.trim(opt[i]) != "") {
            var drp = opt[i].split("-");
            var drpid = drp[0];
            var drtype = drp[1];
            var drpname = drp[2];
            var drpphone = drp[3];
            var drpemail = drp[4];
            window['me' + xxx] += drpname + ':' + drpemail + ':' + drtype + '|';
        }
    }
    var back = window['me' + xxx].split("|");
    optionss = ["Select Option"];
    for (var c = 0; c < back.length; c++) {
        var opt = back[c];
        if ($.trim(opt) != "") {
            var optt = opt.split(":");
            var ndrtype = optt[2];
            // alert('ndr' + ndrtype);
            if ($.trim(optt) != "" && ndrtype == type) {
                if (c == 0) {
                    var div7 = document.getElementById('dd' + rrr);
                    if (document.getElementById('drop' + rrr)) {
                        var exis = document.getElementById('drop' + rrr);
                        exis.remove();
                    }

                    var inputa7 = document.createElement("select");
                    inputa7.name = 'drop' + rrr;
                    inputa7.id = 'drop' + rrr;
                    inputa7.className = 'browser-default';
                    var option = document.createElement("option");
                    option.value = (optt[0] == "Select Option") ? "" : optt[0];
                    option.text = optt[0];
                    inputa7.appendChild(option);
                    div7.appendChild(inputa7);
                } else {
                    if (!document.getElementById('drop' + rrr)) {
                        var inputa7 = document.createElement("select");
                        inputa7.name = 'drop' + rrr;
                        inputa7.id = 'drop' + rrr;
                        inputa7.className = 'browser-default';
                    } else {
                        var inputa7 = document.getElementById('drop' + rrr);
                    }
                    var div7 = document.getElementById('dd' + rrr);
                    var option = document.createElement("option");
                    option.value = (optt[0] == "Select Option") ? "" : optt[0];
                    option.text = optt[0];
                    inputa7.appendChild(option);
                    div7.appendChild(inputa7);
                }
                //alert('dd' + localStorage.drpchk);
                optionss.push(optt[0]);
                dpmail.push(optt[1]);
            }
        }
    }
    ++rrr;
    ++xxx;
}



function pvtbprog(type) {
    var url = "https://pvtb.com.ng/pharm/auth_new.php?callback=?";
    var dataString = "type=" + type + "&pvtbprog=";

    $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        timeout: 9000,
        beforeSend: function () {
            localStorage.back = '';
        },
        success: function (data) {
            handledata(data);
        }
    });
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


function screenup() {
    //'"age":"1969","gender":"Male","school":"1","height":"2","weight":"3","bmi":"2","mal":"Yes","work":"Yes","fname":"Babaoski|"age1":"2008","gender1":"Female","schteen1":"Yes","fname1":"Mamma|"age2":"1990","gender2":"Male","school2":"2","height2":"2","weight2":"3","bmi2":"1","mal2":"No","work2":"Yes","fname2":"Uncle|';
    //0:pre-1:pre-2:pre-
    var datay = localStorage.question2;
    var pres = localStorage.tbstatus;
    var myques = datay.split(',"|"');
    var mypres = pres.split("-");
    var prearr = [];
    var edu = [];
    var health = [];
    var emp = [];
    var eduteen = [];
    var moda = [];

    for (var x = 0; x < mypres.length; x++) {
        var pre = mypres[x];
        if ($.trim(pre) != '') {
            var brk = pre.split(":");
            prearr[brk[0]] = brk[1];
        }
    }
    //console.log(prearr);

    for (var i = 0; i < myques.length; i++) {
        var con = myques[i];
        if ($.trim(con) != '') {
            var conjson = '{' + con + '}';
            var conarr = JSON.parse(conjson);
            //console.log(conarr);
            moda[i] = conarr;
            if (i == 0) {
                var age = conarr['age'];
                var gender = conarr['gender'];
                var school = conarr['school'];
                var height = conarr['height'];
                var weight = conarr['weight'];
                var bmi = conarr['bmi'];
                var mal = conarr['mal'];
                var work = conarr['work'];
                var fname = conarr['fname'];
                var oname = conarr['oname'];

                edu[i] = (parseInt(school) >= 6) ? 0 : 1;
                health[i] = (mal == "Yes") ? 1 : 0;
                emp[i] = (work == "Yes") ? 1 : 0;
            } else {
                var age = conarr['age' + i];
                var gender = conarr['gender' + i];
                var fname = conarr['fname' + i];
                var oname = conarr['oname' + i];
                if (conarr['work' + i]) {// adult
                    var school = conarr['school' + i];
                    var height = conarr['height' + i];
                    var weight = conarr['weight' + i];
                    var bmi = conarr['bmi' + i];
                    var mal = conarr['mal' + i];
                    var work = conarr['work' + i];

                    edu[i] = (parseInt(school) >= 6) ? 0 : 1;
                    health[i] = (mal == "Yes") ? 1 : 0;
                    emp[i] = (work == "Yes") ? 1 : 0;
                } else if (conarr['schteen' + i]) {// teens
                    var school = conarr['schteen' + i];
                    eduteen[i] = (school == "Yes") ? 0 : 1;

                } else {// infants

                }
            }

        }
    }

    var edumark = (edu.includes(1)) ? 0.125 : 0;
    var healthmark = (health.includes(1)) ? 0.125 : 0;
    var eduteenmark = (eduteen.includes(1)) ? 0.125 : 0;
    var empmark = (emp.includes(1)) ? 0.25 : 0;
    var marktwo = edumark + healthmark + eduteenmark + empmark;
    //alert('edu ' + edumark); alert('healthmark ' + healthmark); alert('eduteenmark ' + eduteenmark); alert('empmark ' + empmark);
    // alert('Marktwo: ' + marktwo)
    // alert(localStorage.mpiscore);
    // alert(localStorage.screendate);
    if (navigator.onLine) {
        if (marktwo || marktwo == 0) {
            var url = "https://pvtb.com.ng/pharm/auth_new.php?callback=?";
            var mpi = parseFloat(localStorage.mpiscore) + parseFloat(marktwo);
            var idd = localStorage.screendate;
            var pressend = localStorage.tbstatus;
            localStorage.mpiscore2 = mpi;
            var dataString = "scoredata=" + localStorage.question2 + "&mpi=" + mpi + "&pre=" + pressend + "&idd=" + idd + "&pushscreenpmt2=";
            //upload all other values
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                    //$("#counta").html('Loading Count...');
                },
                success: function (datay) {
                    var poor = '';
                    var hpr = 0;
                    /*if (mpi > 0.26) { //POOR-P
                     poor = "Poor";
                     hpr = 1;
                     } else { //NOT POOR - N
                     poor = "Not Poor";
                     hpr = 0;
                     }*/
                    if (mpi < 0.2) { //NOT POOR - N
                        poor = "Not Poor";
                        hpr = 0;
                    } else if (mpi >= 0.2 && mpi < 0.25) { //NOT POOR - N
                        poor = "Vulnerable";
                        hpr = 0;
                    } else if (mpi >= 0.25 && mpi < 0.5) { //POOR-P
                        poor = "Poor";
                        hpr = 1;
                    } else if (mpi >= 0.5) { //POOR-P
                        poor = "Severely Poor";
                        hpr = 1;
                    }

                    var options = ["Select Option"];
                    //alert('skskss');
                    //console.log(moda);
                    for (var y = 0; y < moda.length; y++) {
                        //console.log(moda[y]);
                        var worky = '';
                        var agey = ''
                        if (y == 0) {
                            worky = moda[y]['work'];
                            agey = moda[y]['age'];
                        } else {
                            worky = (moda[y]['work' + y]);
                            agey = (moda[y]['age' + y]);
                        }
                        var tbs = '';
                        var str = localStorage.tbstatus;
                        var stat = '';
                        var drpid = '';
                        var drpname = '';
                        var drpphone = '';
                        var drpemail = '';

                        // alert(stat);
                        // alert(localStorage.drpchk);

                        //console.log(options);
                        //console.log(dpmail);
                        var options = ["Loading..."];
                        var diva7 = document.createElement("div");
                        diva7.className = "input-field with-icon margin-bottom";
                        var divb7 = document.createElement("div");
                        divb7.className = "margin-bottom_low";
                        var spana7 = document.createElement("span");
                        spana7.className = "icon icontwo";
                        spana7.innerHTML = ('<i class="fa fa-map-pin"></i>');
                        var spanb7 = document.createElement("span");
                        spanb7.className = "span2";
                        spanb7.innerHTML = ('Referral Programme');
                        var divc7 = document.createElement("div");
                        divc7.className = "col-sm-10";
                        divc7.id = "dd" + y;


                        if (str.includes(y)) { //Presumptive-P
                            tbs = "Presumptive";
                            if (hpr == 1) { //POOR && PRESUMPTIVE - PP
                                stat = 'PP';
                                var options = ["Select Option", "Free Programme One", "Free Programme Two"];
                                //document.getElementById('dd' + y).innerHTML = 'yajs';
                                // alert()
                            } else {//NOTPOOR && PRESUMPTIVE - NP
                                var options = ["Select Option", "TB Insurance Programme One", "TB Insurance Programme Two"];
                                //document.getElementById('dd' + y).innerHTML = 'yajs';
                                stat = 'NP';
                            }
                        } else { //NOT Presumptive - N
                            tbs = "Not Presumptive";
                            if (hpr == 1) {//POOR && NOTPRESUMPTIVE - PN
                                var options = ["Select Option", "Govt. Programme One", "Govt. Programme Two"];
                                //document.getElementById('dd' + y).innerHTML = 'yajs';
                                stat = 'PN';
                            } else {//NOTPOOR && NOTPRESUMPTIVE - NN
                                var options = ["No Programme"];
                                stat = 'NN';
                            }
                        }



                        localStorage.drpchk = y;

                        //divb7.appendChild(spana7);
                        divb7.appendChild(spanb7);
                        diva7.appendChild(divb7)
                        diva7.appendChild(divc7);

                        var options = [
                            "Select Option",
                            "Abia",
                            "Adamawa",
                            "Anambra",
                            "Akwa Ibom",
                            "Bauchi",
                            "Bayelsa",
                            "Benue",
                            "Borno",
                            "Cross River",
                            "Delta",
                            "Ebonyi",
                            "Enugu",
                            "Edo",
                            "Ekiti",
                            "FCT-Abuja",
                            "Gombe",
                            "Imo",
                            "Jigawa",
                            "Kaduna",
                            "Kano",
                            "Katsina",
                            "Kebbi",
                            "Kogi",
                            "Kwara",
                            "Lagos",
                            "Nasarawa",
                            "Niger",
                            "Ogun",
                            "Ondo",
                            "Osun",
                            "Oyo",
                            "Plateau",
                            "Rivers",
                            "Sokoto",
                            "Taraba",
                            "Yobe",
                            "Zamfara"
                        ];

                        var diva8 = document.createElement("div");
                        diva8.className = "input-field with-icon margin-bottom";
                        var divb8 = document.createElement("div");
                        divb8.className = "margin-bottom_low";
                        var spana8 = document.createElement("span");
                        spana8.className = "icon icontwo";
                        spana8.innerHTML = ('<i class="fa fa-map-pin"></i>');
                        var spanb8 = document.createElement("span");
                        spanb8.className = "span2";
                        spanb8.innerHTML = ('State of Origin');
                        var divc8 = document.createElement("div");
                        divc8.className = "col-sm-10";
                        var inputa8 = document.createElement("select");
                        //inputa8.type = 'hidden';
                        inputa8.name = 'state' + y;
                        inputa8.id = 'state' + y;
                        inputa8.className = 'browser-default';
                        for (var i2 = 0; i2 < options.length; i2++) {
                            var option = document.createElement("option");
                            option.value = (options[i2] == "Select Option") ? "" : options[i2];
                            option.text = options[i2];
                            inputa8.appendChild(option);
                        }
                        divc8.appendChild(inputa8);

                        var diva1a = document.createElement("div");
                        diva1a.className = "input-field with-icon margin-bottom";
                        var spana1a = document.createElement("span");
                        spana1a.className = "icon icontwo";
                        spana1a.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
                        var inputa1a = document.createElement("input");
                        inputa1a.name = 'year' + y;
                        inputa1a.id = 'year' + y;
                        inputa1a.type = 'text';
                        var labela1a = document.createElement("label");
                        labela1a.setAttribute('for', 'year' + y);
                        labela1a.className = 'firecolor';
                        labela1a.innerHTML = 'Year(s) of Residience?';
                        // diva3.appendChild(spana3);
                        diva1a.appendChild(inputa1a);
                        diva1a.appendChild(labela1a);

                        var inputa8a = document.createElement("input");
                        inputa8a.name = 'work' + y;
                        inputa8a.id = 'work' + y;
                        inputa8a.type = 'hidden';
                        inputa8a.value = 'hhidden';
                        divc8.appendChild(inputa8a);

                        var inputa88 = document.createElement("input");
                        inputa88.name = 'name' + y;
                        inputa88.id = 'name' + y;
                        inputa88.type = 'hidden';
                        inputa88.value = (y == 0) ? moda[y].fname + ' ' + moda[y].oname : moda[y]['fname' + y] + ' ' + moda[y]['oname' + y];
                        divc8.appendChild(inputa88);
                        var inputa888 = document.createElement("input");
                        inputa888.name = 'status' + y;
                        inputa888.id = 'status' + y;
                        inputa888.type = 'hidden';
                        inputa888.value = stat;
                        divc8.appendChild(inputa888);

                        // divb8.appendChild(spana8);

                        divb8.appendChild(spanb8);
                        diva8.appendChild(divb8)
                        diva8.appendChild(divc8);

                        var diva1 = document.createElement("div");
                        diva1.className = "input-field with-icon margin-bottom";
                        if (worky == 'Yes' || agecall(parseInt(agey))) {
                            var inputa1 = document.createElement("input");
                            inputa1.name = 'occ' + y;
                            inputa1.id = 'occ' + y;
                            inputa1.type = 'hidden';
                            inputa1.value = 'hhidden';

                            diva1.appendChild(inputa1)
                        } else {
                            var spana1 = document.createElement("span");
                            spana1.className = "icon icontwo";
                            spana1.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
                            var inputa1 = document.createElement("input");
                            inputa1.name = 'occ' + y;
                            inputa1.id = 'occ' + y;
                            inputa1.type = 'text';
                            var labela1 = document.createElement("label");
                            labela1.setAttribute('for', 'occ' + y);
                            labela1.className = 'firecolor';
                            labela1.innerHTML = 'What is your occupation?';

                            diva1.appendChild(inputa1);
                            diva1.appendChild(labela1);
                        }
                        // diva3.appendChild(spana3);

                        var diva6 = document.createElement("div");
                        diva6.className = "input-field with-icon margin-bottom";
                        var spana6 = document.createElement("span");
                        spana6.className = "icon icontwo";
                        spana6.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
                        var inputa6 = document.createElement("input");
                        inputa6.name = 'no' + y;
                        inputa6.id = 'no' + y;
                        inputa6.type = 'text';
                        var labela6 = document.createElement("label");
                        labela6.setAttribute('for', 'no' + y);
                        labela6.className = 'firecolor';
                        labela6.innerHTML = 'Mobile Number'

                        //diva6.appendChild(spana6);
                        diva6.appendChild(inputa6);
                        diva6.appendChild(labela6);

                        var d = new Date();
                        var month = new Array();
                        month[0] = "Jan";
                        month[1] = "Feb";
                        month[2] = "Mar";
                        month[3] = "Apr";
                        month[4] = "May";
                        month[5] = "Jun";
                        month[6] = "Jul";
                        month[7] = "Aug";
                        month[8] = "Sep";
                        month[9] = "Oct";
                        month[10] = "Nov";
                        month[11] = "Dec";
                        var n = month[d.getMonth()];
                        document.getElementsByClassName("year").innerHTML = d.getFullYear();
                        document.getElementsByClassName("month").innerHTML = month[d.getMonth()];
                        var day = d.getDate();

                        if (true) {
                            if (y == 0) {

                                var div1 = document.createElement("div");
                                div1.className = "maleo-card maleo-event_list margin-bottom_low animated fadeInUp";
                                var div2 = document.createElement("div");
                                div2.className = "event-date";
                                div2.innerHTML = '<span class="month">' + month[d.getMonth()] + '</span><span class="date">' + day + '</span><span class="year">' + d.getFullYear() + '</span>';
                                var diva = document.createElement("div");
                                diva.className = "event-content";
                                var divb = document.createElement("div");
                                divb.className = "event-name";
                                divb.innerHTML = '<i class="fa fa-user"></i> ' + moda[y].fname.toUpperCase() + ' ' + moda[y].oname.toUpperCase();
                                divb.setAttribute = ('style', 'text-align: center;');
                                var divc = document.createElement("div");
                                divc.className = "event-location putleft";
                                divc.setAttribute = ('style', 'float:left');
                                divc.innerHTML = '<i class="fa fa-map-marker"></i> ' + localStorage.screencomm + ', ' + localStorage.screenlga + ', ' + localStorage.screenstate;
                                var divd = document.createElement("div");
                                divd.className = "event-location putright";
                                divd.setAttribute = ('style', 'float:right');
                                divd.innerHTML = '<i class="fa fa-check-circle"></i> MPI: ' + mpi.toFixed(2);
                                ;
                                var dive = document.createElement("div");
                                dive.className = "event-location putleft";
                                dive.setAttribute = ('style', 'float:left');
                                dive.innerHTML = '<i class="fa fa-hospital-o"></i> TB Status: ' + tbs;
                                var divf = document.createElement("div");
                                divf.className = "event-location putright";
                                divf.setAttribute = ('style', 'float:right');
                                divf.innerHTML = '<i class="fa fa-bar-chart"></i> Poverty Level: ' + poor;

                                var div3 = document.createElement("div");
                                var div4 = document.createElement("div");
                                div3.appendChild(divc);
                                div3.appendChild(divd);
                                div4.appendChild(dive);
                                div4.appendChild(divf);

                                var gen = document.getElementById("general");
                                var divax = document.createElement("div");
                                divax.className = "content-container ccc";
                                var divay = document.createElement("div");
                                divay.className = "blog-content";
                                diva.appendChild(divb);
                                //diva.appendChild(divc);
                                //diva.appendChild(divd);
                                diva.appendChild(div3);
                                diva.appendChild(div4);
                                divay.appendChild(diva8);
                                divay.appendChild(diva1a);
                                divay.appendChild(diva6);
                                divay.appendChild(diva1);
                                divay.appendChild(diva7);
                                divax.appendChild(divay);
                                diva.appendChild(divax);
                                div1.appendChild(div2);
                                div1.appendChild(diva);
                                gen.appendChild(div1);
                                /* var options = optionss;
                                 var inputa7 = document.createElement("select");
                                 inputa7.name = 'drop' + y;
                                 inputa7.id = 'drop' + y;
                                 inputa7.className = 'browser-default';
                                 for (var i2 = 0; i2 < options.length; i2++) {
                                 var option = document.createElement("option");
                                 option.value = (options[i2] == "Select Option") ? "" : options[i2];
                                 option.text = options[i2];
                                 inputa7.appendChild(option);
                                 }
                                 divc7.appendChild(inputa7);*/

                            } else {

                                var div1 = document.createElement("div");
                                div1.className = "maleo-card maleo-event_list margin-bottom_low animated fadeInUp";
                                var div2 = document.createElement("div");
                                div2.className = "event-date";
                                div2.innerHTML = '<span class="month">' + month[d.getMonth()] + '</span><span class="date">' + day + '</span><span class="year">' + d.getFullYear() + '</span>';
                                var diva = document.createElement("div");
                                diva.className = "event-content";
                                var divb = document.createElement("div");
                                divb.className = "event-name";
                                divb.innerHTML = ' <i class="fa fa-user"></i> ' + moda[y]['fname' + y].toUpperCase() + ' ' + moda[y]['oname' + y].toUpperCase();
                                divb.setAttribute = ('style', 'text-align: center;');
                                var divc = document.createElement("div");
                                divc.className = "event-location putleft";
                                divc.setAttribute = ('style', 'float:left');
                                divc.innerHTML = ' <i class="fa fa-map-marker"></i> ' + localStorage.screencomm + ', ' + localStorage.screenlga + ', ' + localStorage.screenstate;
                                var divd = document.createElement("div");
                                divd.className = "event-location putright";
                                divd.setAttribute = ('style', 'float:right');
                                divd.innerHTML = ' <i class="fa fa-check-circle"></i> MPI: ' + mpi.toFixed(2);
                                var dive = document.createElement("div");
                                dive.className = "event-location putleft";
                                dive.setAttribute = ('style', 'float:left');
                                dive.innerHTML = ' <i class="fa fa-hospital-o"></i> TB Status: ' + tbs;
                                var divf = document.createElement("div");
                                divf.className = "event-location putright";
                                divf.setAttribute = ('style', 'float:right');
                                divf.innerHTML = ' <i class="fa fa-bar-chart"></i> Poverty Level: ' + poor;

                                var div3 = document.createElement("div");
                                var div4 = document.createElement("div");
                                div3.appendChild(divc);
                                div3.appendChild(divd);
                                div4.appendChild(dive);
                                div4.appendChild(divf);

                                var gen = document.getElementById("general");
                                var divax = document.createElement("div");
                                divax.className = "content-container ccc";
                                var divay = document.createElement("div");
                                divay.className = "blog-content";
                                diva.appendChild(divb);
                                //diva.appendChild(divc);
                                //diva.appendChild(divd);
                                diva.appendChild(div3);
                                diva.appendChild(div4);
                                divay.appendChild(diva8);
                                divay.appendChild(diva1a);
                                divay.appendChild(diva6);
                                divay.appendChild(diva1);
                                divay.appendChild(diva7);
                                divax.appendChild(divay);
                                diva.appendChild(divax);
                                div1.appendChild(div2);
                                div1.appendChild(diva);
                                gen.appendChild(div1);
                                /*var options = optionss;
                                 var inputa7 = document.createElement("select");
                                 inputa7.name = 'drop' + y;
                                 inputa7.id = 'drop' + y;
                                 inputa7.className = 'browser-default';
                                 for (var i2 = 0; i2 < options.length; i2++) {
                                 var option = document.createElement("option");
                                 option.value = (options[i2] == "Select Option") ? "" : options[i2];
                                 option.text = options[i2];
                                 inputa7.appendChild(option);
                                 }
                                 divc7.appendChild(inputa7);*/
                            }
                            //alert(stat);
                            //alert(localStorage.drpchk);
                            pvtbprog2(stat);
                        }

                    }
                }
            });
        }
    } else { // Offline Mode!
        var mpi = parseFloat(localStorage.mpiscore) + parseFloat(marktwo);
        var idd = localStorage.screendate;
        var pressend = localStorage.tbstatus;

        //localStorage.question111 = localStorage.question111.concat('...' + localStorage.question2);
        localStorage.mpiscore2 = mpi;

        var poor = '';
        var hpr = 0;
        /*if (mpi > 0.26) { //POOR-P
         poor = "Poor";
         hpr = 1;
         } else { //NOT POOR - N
         poor = "Not Poor";
         hpr = 0;
         }*/
        if (mpi < 0.2) { //NOT POOR - N
            poor = "Not Poor";
            hpr = 0;
        } else if (mpi >= 0.2 && mpi < 0.25) { //NOT POOR - N
            poor = "Vulnerable";
            hpr = 0;
        } else if (mpi >= 0.25 && mpi < 0.5) { //POOR-P
            poor = "Poor";
            hpr = 1;
        } else if (mpi > 0.5) { //POOR-P
            poor = "Severely Poor";
            hpr = 1;
        }

        var options = ["Select Option"];
        for (var y = 0; y < moda.length; y++) {
            var tbs = '';
            var str = localStorage.tbstatus;
            var stat = '';
            var drpid = '';
            var drpname = '';
            var drpphone = '';
            var drpemail = '';

            // alert(stat);
            // alert(localStorage.drpchk);

            //console.log(options);
            //console.log(dpmail);
            var options = ["Loading..."];
            var diva7 = document.createElement("div");
            diva7.className = "input-field with-icon margin-bottom";
            var divb7 = document.createElement("div");
            divb7.className = "margin-bottom_low";
            var spana7 = document.createElement("span");
            spana7.className = "icon icontwo";
            spana7.innerHTML = ('<i class="fa fa-map-pin"></i>');
            var spanb7 = document.createElement("span");
            spanb7.className = "span2";
            spanb7.innerHTML = ('Referral Programme');
            var divc7 = document.createElement("div");
            divc7.className = "col-sm-10";
            divc7.id = "dd" + y;


            if (str.includes(y)) { //Presumptive-P
                tbs = "Presumptive";
                if (hpr == 1) { //POOR && PRESUMPTIVE - PP
                    stat = 'PP';
                    var options = ["Select Option", "Free Programme One", "Free Programme Two"];
                    //document.getElementById('dd' + y).innerHTML = 'yajs';
                    // alert()
                } else {//NOTPOOR && PRESUMPTIVE - NP
                    var options = ["Select Option", "TB Insurance Programme One", "TB Insurance Programme Two"];
                    //document.getElementById('dd' + y).innerHTML = 'yajs';
                    stat = 'NP';
                }
            } else { //NOT Presumptive - N
                tbs = "Not Presumptive";
                if (hpr == 1) {//POOR && NOTPRESUMPTIVE - PN
                    var options = ["Select Option", "Govt. Programme One", "Govt. Programme Two"];
                    //document.getElementById('dd' + y).innerHTML = 'yajs';
                    stat = 'PN';
                } else {//NOTPOOR && NOTPRESUMPTIVE - NN
                    var options = ["No Programme"];
                    stat = 'NN';
                }
            }



            localStorage.drpchk = y;

            //divb7.appendChild(spana7);
            divb7.appendChild(spanb7);
            diva7.appendChild(divb7)
            diva7.appendChild(divc7);

            var options = [
                "Select Option",
                "Abia",
                "Adamawa",
                "Anambra",
                "Akwa Ibom",
                "Bauchi",
                "Bayelsa",
                "Benue",
                "Borno",
                "Cross River",
                "Delta",
                "Ebonyi",
                "Enugu",
                "Edo",
                "Ekiti",
                "FCT-Abuja",
                "Gombe",
                "Imo",
                "Jigawa",
                "Kaduna",
                "Kano",
                "Katsina",
                "Kebbi",
                "Kogi",
                "Kwara",
                "Lagos",
                "Nasarawa",
                "Niger",
                "Ogun",
                "Ondo",
                "Osun",
                "Oyo",
                "Plateau",
                "Rivers",
                "Sokoto",
                "Taraba",
                "Yobe",
                "Zamfara"
            ];

            var diva8 = document.createElement("div");
            diva8.className = "input-field with-icon margin-bottom";
            var divb8 = document.createElement("div");
            divb8.className = "margin-bottom_low";
            var spana8 = document.createElement("span");
            spana8.className = "icon icontwo";
            spana8.innerHTML = ('<i class="fa fa-map-pin"></i>');
            var spanb8 = document.createElement("span");
            spanb8.className = "span2";
            spanb8.innerHTML = ('State of Origin');
            var divc8 = document.createElement("div");
            divc8.className = "col-sm-10";
            var inputa8 = document.createElement("select");
            //inputa8.type = 'hidden';
            inputa8.name = 'state' + y;
            inputa8.id = 'state' + y;
            inputa8.className = 'browser-default';
            for (var i2 = 0; i2 < options.length; i2++) {
                var option = document.createElement("option");
                option.value = (options[i2] == "Select Option") ? "" : options[i2];
                option.text = options[i2];
                inputa8.appendChild(option);
            }
            divc8.appendChild(inputa8);

            var diva1a = document.createElement("div");
            diva1a.className = "input-field with-icon margin-bottom";
            var spana1a = document.createElement("span");
            spana1a.className = "icon icontwo";
            spana1a.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
            var inputa1a = document.createElement("input");
            inputa1a.name = 'year' + y;
            inputa1a.id = 'year' + y;
            inputa1a.type = 'text';
            var labela1a = document.createElement("label");
            labela1a.setAttribute('for', 'year' + y);
            labela1a.className = 'firecolor';
            labela1a.innerHTML = 'Year(s) of Residience?';
            // diva3.appendChild(spana3);
            diva1a.appendChild(inputa1a);
            diva1a.appendChild(labela1a);

            var inputa8a = document.createElement("input");
            inputa8a.name = 'work' + y;
            inputa8a.id = 'work' + y;
            inputa8a.type = 'hidden';
            inputa8a.value = 'hhidden';
            divc8.appendChild(inputa8a);

            var inputa88 = document.createElement("input");
            inputa88.name = 'name' + y;
            inputa88.id = 'name' + y;
            inputa88.type = 'hidden';
            inputa88.value = (y == 0) ? moda[y].fname + ' ' + moda[y].oname : moda[y]['fname' + y] + ' ' + moda[y]['oname' + y];
            divc8.appendChild(inputa88);
            var inputa888 = document.createElement("input");
            inputa888.name = 'status' + y;
            inputa888.id = 'status' + y;
            inputa888.type = 'hidden';
            inputa888.value = stat;
            divc8.appendChild(inputa888);

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
            inputa1.name = 'occ' + y;
            inputa1.id = 'occ' + y;
            inputa1.type = 'text';
            var labela1 = document.createElement("label");
            labela1.setAttribute('for', 'occ' + y);
            labela1.className = 'firecolor';
            labela1.innerHTML = 'What is your occupation?';
            // diva3.appendChild(spana3);
            diva1.appendChild(inputa1);
            diva1.appendChild(labela1);
            var diva6 = document.createElement("div");
            diva6.className = "input-field with-icon margin-bottom";
            var spana6 = document.createElement("span");
            spana6.className = "icon icontwo";
            spana6.innerHTML = ('<i class="fa fa-map-pin" style="padding-right: 20px"></i>');
            var inputa6 = document.createElement("input");
            inputa6.name = 'no' + y;
            inputa6.id = 'no' + y;
            inputa6.type = 'text';
            var labela6 = document.createElement("label");
            labela6.setAttribute('for', 'no' + y);
            labela6.className = 'firecolor';
            labela6.innerHTML = 'Mobile Number'

            //diva6.appendChild(spana6);
            diva6.appendChild(inputa6);
            diva6.appendChild(labela6);

            var d = new Date();
            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            var n = month[d.getMonth()];
            document.getElementsByClassName("year").innerHTML = d.getFullYear();
            document.getElementsByClassName("month").innerHTML = month[d.getMonth()];
            var day = d.getDate();

            if (true) {
                if (y == 0) {

                    var div1 = document.createElement("div");
                    div1.className = "maleo-card maleo-event_list margin-bottom_low animated fadeInUp";
                    var div2 = document.createElement("div");
                    div2.className = "event-date";
                    div2.innerHTML = '<span class="month">' + month[d.getMonth()] + '</span><span class="date">' + day + '</span><span class="year">' + d.getFullYear() + '</span>';
                    var diva = document.createElement("div");
                    diva.className = "event-content";
                    var divb = document.createElement("div");
                    divb.className = "event-name";
                    divb.innerHTML = '<i class="fa fa-user"></i> ' + moda[y].fname.toUpperCase() + ' ' + moda[y].oname.toUpperCase();
                    divb.setAttribute = ('style', 'text-align: center;');
                    var divc = document.createElement("div");
                    divc.className = "event-location putleft";
                    divc.setAttribute = ('style', 'float:left');
                    divc.innerHTML = '<i class="fa fa-map-marker"></i> ' + localStorage.screencomm + ', ' + localStorage.screenlga + ', ' + localStorage.screenstate;
                    var divd = document.createElement("div");
                    divd.className = "event-location putright";
                    divd.setAttribute = ('style', 'float:right');
                    divd.innerHTML = '<i class="fa fa-check-circle"></i> MPI: ' + mpi.toFixed(2);
                    ;
                    var dive = document.createElement("div");
                    dive.className = "event-location putleft";
                    dive.setAttribute = ('style', 'float:left');
                    dive.innerHTML = '<i class="fa fa-hospital-o"></i> TB Status: ' + tbs;
                    var divf = document.createElement("div");
                    divf.className = "event-location putright";
                    divf.setAttribute = ('style', 'float:right');
                    divf.innerHTML = '<i class="fa fa-bar-chart"></i> Poverty Level: ' + poor;

                    var div3 = document.createElement("div");
                    var div4 = document.createElement("div");
                    div3.appendChild(divc);
                    div3.appendChild(divd);
                    div4.appendChild(dive);
                    div4.appendChild(divf);

                    var gen = document.getElementById("general");
                    var divax = document.createElement("div");
                    divax.className = "content-container ccc";
                    var divay = document.createElement("div");
                    divay.className = "blog-content";
                    diva.appendChild(divb);
                    //diva.appendChild(divc);
                    //diva.appendChild(divd);
                    diva.appendChild(div3);
                    diva.appendChild(div4);
                    divay.appendChild(diva8);
                    divay.appendChild(diva1a);
                    divay.appendChild(diva6);
                    divay.appendChild(diva1);
                    divay.appendChild(diva7);
                    divax.appendChild(divay);
                    diva.appendChild(divax);
                    div1.appendChild(div2);
                    div1.appendChild(diva);
                    gen.appendChild(div1);
                    /* var options = optionss;
                     var inputa7 = document.createElement("select");
                     inputa7.name = 'drop' + y;
                     inputa7.id = 'drop' + y;
                     inputa7.className = 'browser-default';
                     for (var i2 = 0; i2 < options.length; i2++) {
                     var option = document.createElement("option");
                     option.value = (options[i2] == "Select Option") ? "" : options[i2];
                     option.text = options[i2];
                     inputa7.appendChild(option);
                     }
                     divc7.appendChild(inputa7);*/

                } else {

                    var div1 = document.createElement("div");
                    div1.className = "maleo-card maleo-event_list margin-bottom_low animated fadeInUp";
                    var div2 = document.createElement("div");
                    div2.className = "event-date";
                    div2.innerHTML = '<span class="month">' + month[d.getMonth()] + '</span><span class="date">' + day + '</span><span class="year">' + d.getFullYear() + '</span>';
                    var diva = document.createElement("div");
                    diva.className = "event-content";
                    var divb = document.createElement("div");
                    divb.className = "event-name";
                    divb.innerHTML = ' <i class="fa fa-user"></i> ' + moda[y]['fname' + y].toUpperCase() + ' ' + moda[y]['oname' + y].toUpperCase();
                    divb.setAttribute = ('style', 'text-align: center;');
                    var divc = document.createElement("div");
                    divc.className = "event-location putleft";
                    divc.setAttribute = ('style', 'float:left');
                    divc.innerHTML = ' <i class="fa fa-map-marker"></i> ' + localStorage.screencomm + ', ' + localStorage.screenlga + ', ' + localStorage.screenstate;
                    var divd = document.createElement("div");
                    divd.className = "event-location putright";
                    divd.setAttribute = ('style', 'float:right');
                    divd.innerHTML = ' <i class="fa fa-check-circle"></i> MPI: ' + mpi.toFixed(2);
                    var dive = document.createElement("div");
                    dive.className = "event-location putleft";
                    dive.setAttribute = ('style', 'float:left');
                    dive.innerHTML = ' <i class="fa fa-hospital-o"></i> TB Status: ' + tbs;
                    var divf = document.createElement("div");
                    divf.className = "event-location putright";
                    divf.setAttribute = ('style', 'float:right');
                    divf.innerHTML = ' <i class="fa fa-bar-chart"></i> Poverty Level: ' + poor;

                    var div3 = document.createElement("div");
                    var div4 = document.createElement("div");
                    div3.appendChild(divc);
                    div3.appendChild(divd);
                    div4.appendChild(dive);
                    div4.appendChild(divf);

                    var gen = document.getElementById("general");
                    var divax = document.createElement("div");
                    divax.className = "content-container ccc";
                    var divay = document.createElement("div");
                    divay.className = "blog-content";
                    diva.appendChild(divb);
                    //diva.appendChild(divc);
                    //diva.appendChild(divd);
                    diva.appendChild(div3);
                    diva.appendChild(div4);
                    divay.appendChild(diva8);
                    divay.appendChild(diva1a);
                    divay.appendChild(diva6);
                    divay.appendChild(diva1);
                    divay.appendChild(diva7);
                    divax.appendChild(divay);
                    diva.appendChild(divax);
                    div1.appendChild(div2);
                    div1.appendChild(diva);
                    gen.appendChild(div1);
                    /*var options = optionss;
                     var inputa7 = document.createElement("select");
                     inputa7.name = 'drop' + y;
                     inputa7.id = 'drop' + y;
                     inputa7.className = 'browser-default';
                     for (var i2 = 0; i2 < options.length; i2++) {
                     var option = document.createElement("option");
                     option.value = (options[i2] == "Select Option") ? "" : options[i2];
                     option.text = options[i2];
                     inputa7.appendChild(option);
                     }
                     divc7.appendChild(inputa7);*/
                }
                //alert(stat);
                //alert(localStorage.drpchk);
                pvtbprog2(stat);
            }

        }
    }
}