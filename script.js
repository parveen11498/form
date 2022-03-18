
// // https://stackoverflow.com/questions/20562718/add-data-to-table-using-onclick-function-in-javascript#20562827
var div = document.createElement("div")
div.style.backgroundColor = "rgb(120, 248, 248)"
// var para = document.createElement("p")
// para.innerHTML = "DOM Manipulation with Forms"
// para.style = "text-align:center;font-size:25px;font-weight:bolder"
var form = document.createElement("form")
form.id = "form"
form.className = "inputfield"
form.style = "margin-left:20px";

h1 = document.createElement("h1")
h1.innerHTML = "Submission:"

var le = document.createElement("label")
le.innerHTML="First Name"
le.id="fname"

var fn = document.createElement('input')
fn.id="first-name"
fn.placeholder="first name"

var lname = createele("label", "Last Name", "lname")
var ln = document.createElement('input')
ln.id = "last-name"


var add = createele("label", "Address line1", "addresss")
var ad = document.createElement("textarea")
ad.id = "address"

var add2 = createele("label", "Address Line 2", "address2")
var add22 = document.createElement("textarea")
add22.id = "addresss1"

var pin = createele("label", "PIN", "pincode")
var pinn = document.createElement("input")
pinn.type = "text"
pinn.id = "pincode"


var gender = createele("label", "Gender:", "gendeselect")
gender.style.marginTop="15px"

var r1 = createinp("input", "gender-select")
r1.type = "radio"
r1.name = "gender"
var r = createele("label", "Male", "gender-selectt")

var r2 = createinp("input", "gender-select1")
r2.type = "radio"
r2.name = "gender"
r2.style.marginLeft = "15px"
var r22 = createele("label", "Female", "gender-selectt1")

var r3 = createinp("input", "gender-select3")
r3.type = "radio"
r3.name = "gender"
r3.style.marginLeft = "15px"
var r33 = createele("label", "Others", "gender-selectt3")

// var select=createinp("select","select")
// var opt=createinp("option","opt")
// opt.innerHTML="--Please choose an option--"
// var opt1=createinp("option","opt1")
// opt1.innerHTML="Male"
// var opt2=createinp("option","opt2")
// opt2.innerHTML="Female"
// var opt3=createinp("option","opt3")
// opt3.innerHTML="others"



// select.append(opt,opt1,opt2,opt3)

var p1 = createele("p", "Choose of Food(must choose atleast 2 out of 5 option)", "p1")
var chk = document.createElement("input")
chk.type = "checkbox"
chk.id = "foodd1"

var l = document.createElement("label")
l.id = "food1"
l.innerHTML = "North Indian"

var chk1 = createinp("input", "foodd2")
chk1.type = "checkbox"
var l2 = createele("label", "South Indian", "food2")

var chk2 = createinp("input", "foodd3")
chk2.type = "checkbox"
var l3 = createele("label", "Chinease", "food3")

var chk3 = createinp("input", "foodd4")
chk3.type = "checkbox"
var l4 = createele("label", "Japanese", "food4")

var chk4 = createinp("input", "foodd5")
chk4.type = "checkbox"
var l5 = createele("label", "Sea Food", "food5")

var state = createele("label", "State:", "state")
state.style = "margin-top:10px"
var state1 = createinp("input", "state1")


var country = createele("label", "Country:", "country")
var country1 = createinp("input", "country1")


let button = document.createElement("button")
button.id="submit"
button.innerHTML = "Submit";
button.style.margin="20px"
button.addEventListener("click", vali);

var br = document.createElement("br")
var br1 = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
var br5 = document.createElement("br")
var br6 = document.createElement("br")
var br7 = document.createElement("br")
var br8 = document.createElement("br")
var br9 = document.createElement("br")
var br10 = document.createElement("br")
var br11 = document.createElement("br")
var br12 = document.createElement("br")
var br13 = document.createElement("br")
var br14 = document.createElement("br")
var br15 = document.createElement("br")
var br16 = document.createElement("br")
var br17 = document.createElement("br")
var br18 = document.createElement("br")
var br19 = document.createElement("br")
var br20 = document.createElement("br")


function createele(elename, value, idname) {
    let ress = document.createElement(elename)
    ress.innerHTML = value
    ress.id = idname

    return ress
}

function createinp(elename, idname) {
    let res = document.createElement(elename)
    res.id = idname

    return res
}

form.append(h1, le, br, fn, br1, lname, br2, ln, br3, add, br4, ad, br5, add2, br6, add22, br7, pin, br8, pinn, br10, gender, br9, r1, r, r2, r22, r3, r33, br11, p1,
    chk, l, br12, chk1, l2, br13, chk2, l3, br14, chk3, l4, br15, chk4, l5,
    br16, state, br17, state1, br18, country, br19, country1, br20)

var divtable=document.createElement("div")
var table = document.createElement("table");
table.style="margin:20px;"
table.id = "datastored"
table.className = "table";
var thead = document.createElement("thead");
thead.className = "thead";
thead.style.backgroundColor = "black"
thead.style.color = "white"
var tr = document.createElement("tr")
var th1 = createele("th", "First Name", "fn")
var th2 = createele("th", "Last Name", "ln")
var th3 = createele("th", "Address Line 1", "ad1")
var th4 = createele("th", "Address Line 2", "ad")
var th5 = createele("th", "Pincode", "pn")
var th6 = createele("th", "Gender", "gn")
var th7 = createele("th", "choice of food", "cn")
var th8 = createele("th", "State", "sn")
var th9 = createele("th", "Country", "cn")

tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9)
thead.append(tr)


table.append(thead);
divtable.append(table)
div.append(form, button, divtable)
document.body.append(div)

function vali() {
    var e = "";
    var gen = "";
    var food = "";
    var foodcount = 0;
    var count = 1

    var n = document.getElementById('first-name').value
    var ln = document.getElementById('last-name').value
    var ad = document.getElementById('address').value
    var ad1 = document.getElementById('addresss1').value
    var pn = document.getElementById('pincode').value
    // var letters = '/^[a-zA-Z]+$/';
    if ((n == parseInt(n) || n == e)) {
        alert("fill the details or you must have entered wrong value")
    }

    if ((ln == parseInt(ln) || ln == e)) {
        alert("fill the details or you must have entered wrong value")
    }
    if (( ad == e)) {
        alert("fill the details or you must have entered wrong value")
    }
    if (( ad1 == e)) {
        alert("fill the details or you must have entered wrong value")
    }
    if ((pn != parseInt(pn) || pn == e)) {
        alert("fill the details or you must have entered wrong value")
    }
    if (document.getElementById('gender-select').checked == true) {
        gen = gen + " " + document.getElementById('gender-selectt').innerHTML;
        console.log(gen)
    
    }
    if (document.getElementById('gender-select1').checked == true) {
        gen = gen + " " + document.getElementById('gender-selectt1').innerHTML;
        console.log(gen)
    }
    if (document.getElementById('gender-select3').checked == true) {
        gen = gen + " " + document.getElementById('gender-selectt3').innerHTML;
        console.log(gen)
    }
    if (document.getElementById('foodd1').checked == true) {
        food = food + " " + document.getElementById("food1").innerHTML
        foodcount++

    }
    if (document.getElementById("foodd2").checked == true) {
        food = food + " " + document.getElementById("food2").innerHTML
        foodcount++
    }
    if (document.getElementById("foodd3").checked == true) {
        food = food + " " + document.getElementById("food3").innerHTML
        foodcount++
    }
    if (document.getElementById("foodd4").checked == true) {
        food = food + " " + document.getElementById("food4").innerHTML
        foodcount++
    }
    if (document.getElementById("foodd5").checked == true) {
        food = food + " " + document.getElementById("food5").innerHTML
        foodcount++

    }
    console.log(food)
    if (foodcount < 2) {
        alert("please select atleast 2 items")
    }
    var sn = document.getElementById('state1').value
    var cn = document.getElementById('country1').value
    if ((sn == parseInt(sn) || sn == e)) {
        alert("fill the details or you must have entered wrong value")
    }
    if ((cn == parseInt(cn) || cn == e)) {
        alert("fill the details or you must have entered wrong value")
    }

    else {
        var table = document.getElementById('datastored')
        var row = table.insertRow(count)
        row.style="background-color: rgb(88, 88, 248)"
        var n = document.getElementById('first-name').value
        var ln = document.getElementById('last-name').value
        var ad = document.getElementById('address').value
        var ad1 = document.getElementById('addresss1').value
        var pn = document.getElementById('pincode').value
        var sn = document.getElementById('state1').value
        var cn = document.getElementById('country1').value

        let cell1 = row.insertCell(0)
        cell1.innerHTML = n
        let cell2 = row.insertCell(1)
        cell2.innerHTML = ln
        let cell3 = row.insertCell(2)
        cell3.innerHTML = ad
        let cell4 = row.insertCell(3)
        cell4.innerHTML = ad1
        let cell5 = row.insertCell(4)
        cell5.innerHTML = pn
        let cell6 = row.insertCell(5)
        cell6.innerHTML = gen
        let cell7 = row.insertCell(6)
        cell7.innerHTML = food
        let cell8 = row.insertCell(7)
        cell8.innerHTML = sn
        let cell9 = row.insertCell(8)
        cell9.innerHTML = cn
    }
    var form = document.getElementById("form")
    form.reset();
}
