
var train = { no: "", na: "", so: "", de: "", fa: "" };
pa = "<table align=center><tr><th>Sl no</th><th>NAME</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
var date;
var pacd;
var tt_fa = 0;
var p_c = 0;
var PNR = "";
var count = 100;
ticket = "";
var d_tt = "";

///////////////////////////////////////////////////////////////////////
function get_trains() {
    var fr = document.getElementById("f_name").value;
    var tr = document.getElementById("t_name").value;
    console.log(fr);
    if (fr == "") {
        alert("Enter Source")
    }
    else if (tr == "") {
        alert("Enter Destination")
    }
    else {

        console.log(tr)
        var src = document.getElementById("f_name").value;
        var dest = document.getElementById("t_name").value;
        let url = 'http://localhost:9191/api/train/' + src + '/' + dest;

        let fr = fetch(url, { method: 'GET' })
        fr.then(function (response) {
            return response.text();
        })
            .then(data => {
                console.log("success")
                console.log(data);
                append(data);
            })

        function append(data) {
            const jasonobj = JSON.parse(data);
            const data1 = jasonobj
            for (let i in data1) {
                let obj = data1[i]


                train.no = obj.trainNo;
                train.na = obj.trainName;
                train.so = obj.source;
                train.de = obj.destination;
                train.fa = obj.ticketPrice;

                console.log(train);

                table = "<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>FARE</th></tr>";

                table += "<tr><td>" + obj.trainNo + "</td><td>" + obj.trainName + "</td><td>" + obj.source + "</td><td>" + obj.destination + "</td><td>" + obj.ticketPrice + "</td></tr>";
                table += "</table>"
                add1();
                document.getElementById("trdata").innerHTML = table;
            }
           // console.log(obj);
        }
        
    }

}

function get_train() {
    var tr = document.getElementById("tr_no").value;
    date = document.getElementById("da_te").value;
    console.log(date);
    if (date == "") {
        alert("Choose Travel date")
    }
    else {

        console.log(tr)

        let url = 'http://localhost:9191/api/train/' + tr;

        let fr = fetch(url, { method: 'GET' })
        fr.then(function (response) {
            return response.json();
        })
            .then(data => {
                console.log("success")
                append(data);
            })

        function append(data) {

            train.no = data.trainNo;
            train.na = data.trainName;
            train.so = data.source;
            train.de = data.destination;
            train.fa = data.ticketPrice;

            console.log(train);

            table = "<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>FARE</th></tr>";

            table += "<tr><td>" + data.trainNo + "</td><td>" + data.trainName + "</td><td>" + data.source + "</td><td>" + data.destination + "</td><td>" + data.ticketPrice + "</td></tr>";
            table += "</table>"
            add1();
            document.getElementById("tdata").innerHTML = table;

        }

    }

}

function add1() {
    d_tt += "Train Number \t:" + train.no + "\n"
    d_tt += "Train Name \t:" + train.na + "\n"
    d_tt += "From \t:" + train.so + "\n"
    d_tt += "To \t:" + train.de + "\n"
    d_tt += "Date \t:" + date + "\n"
}

var pd_tt = "S.no " + "\t" + " Name" + "\t" + "Age " + "\t" + "Gender " + "\t" + "Fare" + "\n";


function add_pa() {



    if (train.no == "") {
        alert("Choose Train");
    }
    else {
        tab = "<table align=center id='pa_t'><tr><th>Sl no</th><th>NAME</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
        var pac = document.getElementById("pa_no").value;
        var p_fa = train.fa;
        pacd = parseInt(pac);
        if (pacd > p_c) {
            p_c++;
            p_na = document.getElementById("pa_na").value.toUpperCase();
            var p_nas = p_na;
            var l = p_na.length;
            console.log(l);


            p_ag = parseInt(document.getElementById("pa_ag").value);
            p_gn = (document.getElementById("pa_gn").value).toUpperCase();

            if (p_ag <= 12) {
                p_fa = p_fa * 50 / 100;
            } else if (p_ag > 60) {
                p_fa = p_fa * 60 / 100;
            }

            if (p_gn == 'F') {
                p_fa = p_fa * 75 / 100;

            }


            tt_fa += p_fa;
            tab += "<tr> <td>" + p_c + "</td><<td>" + p_na + "</td><td>" + p_ag + "</td><td>" + p_gn + "</td> <td>" + p_fa + "</td></tr>";
            pa += "<tr> <td>" + p_c + "</td><<td>" + p_na + "</td><td>" + p_ag + "</td><td>" + p_gn + "</td> <td>" + p_fa + "</td></tr>";
            tab += "</table>"
            pd_tt += " " + p_c + " \t" + p_nas + "\t " + p_ag + " \t" + p_gn + " \t" + p_fa + "\n";
            console.log(p_c);
            console.log(p_na);
            console.log(p_ag);
            console.log(p_gn);
            console.log(p_fa);
            if (p_c == pacd) {
                console.log(tt_fa);
                show_pa();
            }
            else {
                document.getElementById("padata").innerHTML = tab;
            }

        }
        else {
            alert(pacd + " passengers added sucessfully");

        }
    }
}

function show_pa() {
    tab += "</table>"
    document.getElementById("padata").innerHTML = pa;
}


function book_ticket() {

    if (p_c == pacd) {
        PNR = get_pnr();
        console.log("pnr =" + PNR);
        ticket = "PNR : " + PNR + "\n\n",
            ticket += "Train Number : " + train.no + "\n\n",
            ticket += "Train Name : " + train.na + "\n\n",
            ticket += "From : " + train.so + "\n\n",
            ticket += "To : " + train.de + "\n\n",
            ticket += "Date : " + date + "\n\n",
            ticket += "Passengers:" + "\n\n",
            ticket += "" + pd_tt + "\n",
            ticket += " Total Fare = " + tt_fa;
        console.log(ticket);
        document.getElementById("tcdata").innerHTML = ticket;
    }
    else {
        alert("add passenger")
    }


}


function get_pnr() {
    var ch1 = train.so.charAt(0);
    var ch2 = train.de.charAt(0);
    var x = date;
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    count++;
    const pnr = ch1 + ch2 + "_" + yyyymmdd + "_" + count;
    return pnr;
}



//////////////////////////////////////////////////////////////////

function download_ticket() {
    if (PNR == "") {
        alert("No Dta found");
    }
    else {
        var text = ticket;
        var filename = PNR + ".txt";

        download(filename, text);

        var text1 = ticket;
         var filename1 = PNR + ".pdf";
      
         download1(filename1, text1);

        window.print();
    }

}




function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function download1(filename1, text1) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text1));
    element.setAttribute('download', filename1);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
