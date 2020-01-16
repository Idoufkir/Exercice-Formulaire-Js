


class Personne {
    constructor(prenom, nom, date, lieu, numero, adress, email) {
        this.prenom = prenom;
        this.nom = nom;
        this.date = date;
        this.lieu = lieu;
        this.numero = numero;
        this.adress = adress;
        this.email = email;
    }
}


function afficher(){

    var prenom = document.getElementById('in1').value;
    var nom = document.getElementById('in2').value;
    var date = document.getElementById('in3').value;
    var lieu = document.getElementById('in4').value;
    var numero = document.getElementById('in5').value;
    var adress = document.getElementById('in6').value;
    var email = document.getElementById('in7').value;
    
    let object=new Personne(prenom, nom, date, lieu, numero, adress, email);
    var table = document.getElementById("tb");

    var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);

                cell1.innerHTML = object.prenom;
                cell2.innerHTML = object.nom;
                cell3.innerHTML = object.date;
                cell4.innerHTML = object.lieu;
                cell5.innerHTML = object.numero;
                cell6.innerHTML = object.adress;
                cell7.innerHTML = object.email;
            }


