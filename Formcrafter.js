function Add() {
    var val = document.querySelector('select').value;

    var mainbox = document.querySelector('.formbox')
    mainbox.classList.add('mainbox');


    if (val === "text") {
        let inputbox1 = document.createElement('div');
        inputbox1.classList.add('formdiv1')

        let paradiv = document.createElement('div')
        paradiv.classList.add("paradiv");
        paradiv.style.display = "none";
        let para = document.createElement('span');
        para.classList.add('para');
        // para.style = "color:black";
        para.id = "color1";

        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = "lable";
        input1.classList.add('inp1');


        let Addbut1 = document.createElement('button');
        Addbut1.innerHTML = "DONE";
        Addbut1.classList.add('but1')

        Addbut1.onclick = function () {
            input1.style.display = "none";
            Addbut1.style.display = "none";
            para.style.display = "inline";
            paradiv.style.display = 'inline';
            let values = input1.value;
            para.innerHTML = `${values}  :`;
            input2.style = "margin-left:239px"
        }

        let lable2 = document.createElement('label');
        lable2.className = "lable2";
        lable2.id = "lable2";
        let input2 = document.createElement("input");
        input2.type = 'text';
        input2.placeholder = "text";
        input2.classList.add('inp2');
        input2.id = "inputs2";

        rembut1 = document.createElement('button');
        rembut1.innerHTML = "X";
        rembut1.classList.add('removebutton')
        rembut1.id = "removes";

        rembut1.onclick = function () {
            inputbox1.style.display = "none";
        }

        mainbox.appendChild(inputbox1);
        inputbox1.appendChild(paradiv);
        inputbox1.appendChild(input1);
        inputbox1.appendChild(Addbut1);
        inputbox1.appendChild(input2);
        inputbox1.appendChild(rembut1);
        paradiv.appendChild(para);
        inputbox1.appendChild(lable2);
    } else if (val === "number") {
        let inputbox1 = document.createElement('div');
        inputbox1.classList.add('formdiv1')

        let paradiv = document.createElement('div')
        paradiv.classList.add("paradiv");
        paradiv.style.display = "none"
        let para = document.createElement('span');
        // para.innerHTML = "";
        para.classList.add('para');


        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = "lable";
        input1.classList.add('inp1');


        let Addbut1 = document.createElement('button');
        Addbut1.innerHTML = "DONE";
        Addbut1.classList.add('but1')

        Addbut1.onclick = function () {
            input1.style.display = "none";
            Addbut1.style.display = "none";
            para.style.display = "inline";
            paradiv.style.display = 'inline';
            let values = input1.value;
            para.innerHTML = `${values}  :`;
            input2.style = "margin-left:239px"
        }

        let lable3 = document.createElement('label');
        lable3.className = "lable3";
        lable3.id = 'lable3';
        let input2 = document.createElement("input");
        input2.type = 'number';
        input2.placeholder = "number";
        input2.classList.add('inp2');
        input2.id = "inputs3";

        rembut1 = document.createElement('button');
        rembut1.innerHTML = "X";
        rembut1.classList.add('removebutton')
        rembut1.id = "removes";

        rembut1.onclick = function () {
            inputbox1.style.display = "none";
        }

        mainbox.appendChild(inputbox1);
        inputbox1.appendChild(paradiv);
        inputbox1.appendChild(input1);
        inputbox1.appendChild(Addbut1);
        inputbox1.appendChild(input2);
        inputbox1.appendChild(rembut1);
        paradiv.appendChild(para);
        inputbox1.appendChild(lable3);
    } else if (val === "email") {
        let inputbox1 = document.createElement('div');
        inputbox1.classList.add('formdiv1')

        let paradiv = document.createElement('div')
        paradiv.classList.add("paradiv");
        paradiv.style.display = "none"
        let para = document.createElement('span');
        para.innerHTML = "";
        para.classList.add('para');


        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = "lable";
        input1.classList.add('inp1');


        let Addbut1 = document.createElement('button');
        Addbut1.innerHTML = "DONE";
        Addbut1.classList.add('but1')

        Addbut1.onclick = function () {
            input1.style.display = "none";
            Addbut1.style.display = "none";
            para.style.display = "inline";
            paradiv.style.display = 'inline';
            let values = input1.value;
            para.innerHTML = `${values}  :`;
            input2.style = "margin-left:239px"
        }

        let lable2 = document.createElement('label');
        lable2.className = "lable2";
        lable2.id = "lable4";
        let input2 = document.createElement("input");
        input2.type = 'email';
        input2.placeholder = "email";
        input2.classList.add('inp2');
        input2.id = "inputs4";

        rembut1 = document.createElement('button');
        rembut1.innerHTML = "X";
        rembut1.classList.add('removebutton')
        rembut1.id = "removes";

        rembut1.onclick = function () {
            inputbox1.style.display = "none";
        }

        mainbox.appendChild(inputbox1);
        inputbox1.appendChild(paradiv);
        inputbox1.appendChild(input1);
        inputbox1.appendChild(Addbut1);
        inputbox1.appendChild(input2);
        inputbox1.appendChild(rembut1);
        paradiv.appendChild(para);
        inputbox1.appendChild(lable2);
    } else if (val === "checkbox") {
        let inputbox1 = document.createElement('div');
        inputbox1.classList.add('formdiv1')

        let inputdiv1 = document.createElement('div');
        inputdiv1.classList.add('inputdiv1')

        let inputdiv2 = document.createElement('div');
        inputdiv2.classList.add('inputdiv2')

        let paradiv = document.createElement('div')
        paradiv.classList.add("paradiv");
        paradiv.style.display = "none"
        let para = document.createElement('span');
        para.innerHTML = "";
        para.classList.add('para');


        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = "lable";
        input1.classList.add('inp1');


        let Addbut1 = document.createElement('button');
        Addbut1.innerHTML = "DONE";
        Addbut1.classList.add('but1')

        Addbut1.onclick = function () {
            input1.style.display = "none";
            Addbut1.style.display = "none";
            para.style.display = "inline";
            paradiv.style.display = 'inline';
            let values = input1.value;
            para.innerHTML = `${values}  :`;
            input2.style = "margin-left:239px"
        }

        let lable5 = document.createElement('label');
        lable5.className = "lable5";
        lable5.id = "lable5";
        let input2 = document.createElement("input");
        input2.type = 'text';
        input2.placeholder = "Enter option here";
        input2.classList.add('inp2');
        input2.id = "inppps2";

        rembut1 = document.createElement('button');
        rembut1.innerHTML = "X";
        rembut1.classList.add('removebutton')
        rembut1.id = "removes";

        rembut1.onclick = function () {
            inputbox1.style.display = "none";
            maindiv1.style.display = "none";
        }

        let maindiv = document.createElement('div')
        maindiv.classList.add("maindiv");

        let div1 = document.createElement("button");
        div1.classList.add("div1");
        div1.innerHTML = "ADD";
        div1.id = "hover";
        div1.onclick = function () {
            // var val = input2.value;
            // lab.innerHTML = `${val}`;
            var input = document.querySelector("#inppps2").value;
            var checkboxContainer = document.querySelector(".maindiv1");
            var checkboxLabel = document.createElement("label");
            checkboxLabel.id = "lablecheck";
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = input;
            checkbox.id = "checkboxss";
            checkboxLabel.style = "color:black"
            // checkbox.style.display= "margin-bottom:-20px;"
            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(input));
            checkboxContainer.appendChild(checkboxLabel);
            checkboxContainer.appendChild(document.createElement("br"));
        }

        let div2 = document.createElement("button");
        div2.classList.add("div2");
        div2.innerHTML = "DONE";
        div2.id = "hover";
        div2.onclick = function () {
            input2.style.display = "none";
            div1.style.display = "none";
            div2.style.display = "none";
            maindiv1.style = "margin-top:-30px"
            rembut1.style = "margin-left:70%"
            // rembut1.style.display = "none";
        }


        let maindiv1 = document.createElement('div');
        maindiv1.classList.add("maindiv1");


        mainbox.appendChild(inputbox1);
        inputbox1.appendChild(inputdiv1)
        mainbox.appendChild(maindiv);
        mainbox.appendChild(maindiv1);
        // inputdiv1.appendChild(paradiv)
        inputbox1.appendChild(paradiv);
        inputbox1.appendChild(input1);
        inputbox1.appendChild(Addbut1);
        inputbox1.appendChild(input2);
        inputbox1.appendChild(rembut1);
        paradiv.appendChild(para);
        maindiv.appendChild(div1);
        maindiv.appendChild(div2);
        inputbox1.appendChild(lable5);
    } else if (val === "radio") {
        let inputbox2 = document.createElement('div');
        inputbox2.classList.add('formdiv2');

        let div1input = document.createElement('div');
        div1input.classList.add('div1input');

        let div2input = document.createElement('div');
        div2input.classList.add('div2input');

        let thisdiv3 = document.createElement('div');
        thisdiv3.classList.add('thisdiv3');

        let thisdiv4 = document.createElement('div');
        thisdiv4.classList.add('thisdiv4')

        paragrap = document.createElement('div');
        paragrap.classList.add('paragrap');

        para2 = document.createElement('span');
        // para2.innerHTML = "hrloo"
        para2.classList.add('para2');

        let radioinp1 = document.createElement('input');
        radioinp1.placeholder = "lable";
        radioinp1.classList.add('radioinp1');

        let button1 = document.createElement('button');
        button1.classList.add("button1");
        button1.innerHTML = "DONE";

        button1.onclick = function () {
            radioinp1.style.display = "none";
            button1.style.display = "none";
            paragrap.style = "display:inline;margin-top:5px;";
            let mainvalues = radioinp1.value;
            para2.innerHTML = `${mainvalues}:`;
            radioinp2.style = "margin-left:240px;"
        }

        let lable6 = document.createElement('label');
        lable6.className = "lable6";
        lable6.id = "labradio";
        let radioinp2 = document.createElement('input');
        radioinp2.classList.add('radioinp2');
        radioinp2.placeholder = "Enter your option";
        radioinp2.id = "inputs1";

        let button2 = document.createElement('button');
        button2.classList.add("button2")
        button2.innerHTML = "X";
        button2.id = "removes";

        button2.onclick = function () {
            inputbox2.style.display = "none";
        }

        let button3 = document.createElement("button");
        button3.innerHTML = "ADD";
        button3.classList.add("button3");
        button3.id = "hover";

        button3.onclick = function () {
            var input = document.querySelector(".radioinp2").value;
            var checkboxContainer = document.querySelector(".thisdiv4");
            var checkboxLabel = document.createElement("label");
            checkboxLabel.id = "lablecheck1";
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.name = 'radio';
            checkbox.value = input;
            checkbox.id = "checkboxss1";
            checkboxLabel.style = "color:black";
            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(input));
            checkboxContainer.appendChild(checkboxLabel);
            checkboxContainer.appendChild(document.createElement("br"));
        }

        let button4 = document.createElement("button");
        button4.innerHTML = "DONE";
        button4.classList.add("button4");
        button4.id = "hover";

        button4.onclick = function () {
            button3.style.display = "none";
            button4.style.display = "none";
            // thisdiv3.style.display="none";
            radioinp2.style.display = "none";
            thisdiv3.style = "margin-top:-30px"
            button2.style = "margin-left:70%";
        }

        mainbox.appendChild(inputbox2);
        mainbox.appendChild(thisdiv3);
        mainbox.appendChild(thisdiv4);
        inputbox2.appendChild(div1input);
        inputbox2.appendChild(div2input);
        inputbox2.appendChild(paragrap);
        inputbox2.appendChild(radioinp1);
        inputbox2.appendChild(button1);
        inputbox2.appendChild(radioinp2);
        inputbox2.appendChild(button2);
        paragrap.appendChild(para2);
        thisdiv3.appendChild(button3);
        thisdiv3.appendChild(button4);
        inputbox2.appendChild(lable6);
    } else if (val === "select") {
        let inputbox2_1 = document.createElement('div');
        inputbox2_1.classList.add('formdiv2_1');

        let div1input_1 = document.createElement('div');
        div1input_1.classList.add('div1input_1');

        let div2input_1 = document.createElement('div');
        div2input_1.classList.add('div2input_1');

        let thisdiv3_1 = document.createElement('div');
        thisdiv3_1.classList.add('thisdiv3_1');


        let thisdiv4_1 = document.createElement('div');
        thisdiv4_1.classList.add('thisdiv4_1')

        let thisdiv5_1 = document.createElement('div');
        thisdiv5_1.classList.add('thisdiv5_1');

        paragrap_1 = document.createElement('div');
        paragrap_1.classList.add('paragrap_1');

        para2_1 = document.createElement('span');
        // para2_1.innerHTML = "hrloo"
        para2_1.classList.add('para2_1');

        let radioinp1_1 = document.createElement('input');
        radioinp1_1.placeholder = "lable";
        radioinp1_1.classList.add('radioinp1_1');

        let button1_1 = document.createElement('button');
        button1_1.classList.add("button1_1");
        button1_1.innerHTML = "DONE";

        button1_1.onclick = function () {
            radioinp1_1.style.display = "none";
            button1_1.style.display = "none";
            paragrap_1.style = "display:inline;margin-top:5px;";
            let mainvalues_1 = radioinp1_1.value;
            para2_1.innerHTML = `${mainvalues_1}:`;
            radioinp2_1.style = "margin-left:240px;"
        }

        var newlab = document.createElement('label');
        newlab.id = 'newlab';


        let radioinp2_1 = document.createElement('input');
        radioinp2_1.classList.add('radioinp2_1');
        radioinp2_1.placeholder = "Enter your option";

        let button2_1 = document.createElement('button');
        button2_1.classList.add("button2_1")
        button2_1.innerHTML = "X";
        button2_1.id = "removes";

        button2_1.onclick = function () {
            inputbox2_1.style.display = "none";
            maindivsss.style.display = "none";
        }


        let button3_1 = document.createElement("button");
        button3_1.innerHTML = "ADD";
        button3_1.classList.add("button3_1");
        button3_1.id = "hover";
        button3_1.onclick = function () {
            var inp3 = document.querySelector('.radioinp2_1').value;
            var selct = document.querySelector('.maindivsss');
            var optio = document.createElement('option')
            optio.text = inp3;
            optio.id = "selectbox";
            selct.add(optio);
        }

        let button4_1 = document.createElement("button");
        button4_1.innerHTML = "DONE";
        button4_1.classList.add("button4_1");
        button4_1.id = "hover";
        button4_1.onclick = function () {
            button3_1.style.display = "none";
            button4_1.style.display = "none";
            // thisdiv3.style.display="none";
            radioinp2_1.style.display = "none";
            thisdiv3_1.style = "margin-top:-25px"
            button2_1.style = "margin-left:70%";
        }

        var maindivsss = document.createElement('select');
        maindivsss.className = "maindivsss";
        maindivsss.id= "maindivsss"
        // maindivsss.innerHTML = "-----";

        // var ops = document.createElement('option');
        // ops.innerHTML='-------------';
        // ops.className = 'ops';

        mainbox.appendChild(inputbox2_1);
        mainbox.appendChild(thisdiv3_1);
        mainbox.appendChild(thisdiv4_1);
        mainbox.appendChild(thisdiv5_1);
        inputbox2_1.appendChild(div1input_1);
        inputbox2_1.appendChild(div2input_1);
        inputbox2_1.appendChild(paragrap_1);
        inputbox2_1.appendChild(radioinp1_1);
        inputbox2_1.appendChild(button1_1);
        inputbox2_1.appendChild(radioinp2_1);
        inputbox2_1.appendChild(button2_1);
        paragrap_1.appendChild(para2_1);
        thisdiv3_1.appendChild(button3_1);
        thisdiv3_1.appendChild(button4_1);
        thisdiv5_1.appendChild(maindivsss);
        inputbox2_1.appendChild(newlab);
        
    } else if (val === 'submit') {
        alert("is your form completed");

        var box = document.createElement('div');
        box.className = "box";

        var box1 = document.createElement('div');
        box1.className = "box1";

        var submits = document.createElement('button')
        submits.innerHTML = 'Submit';
        submits.className = 'submits';

        var newdiv = document.createElement('button');
        newdiv.innerHTML = "Submit";
        newdiv.className = "newdiv";
        newdiv.id = "newdiv1";

        submits.onclick = function () {

            var neww = document.querySelector('#maindivbox');
            neww.style.display = "none";

            var arr = document.querySelector("#tedxt");
            arr.innerHTML = "FILL YOUR DETAILS";
            arr.style = "color:white";
            var removess = document.querySelectorAll("#removes");
            removess.forEach(function (element) {
                element.style.display = "none";
            });

            var rem1 = document.querySelector(".formbox")
            rem1.style = "width:68%;background-color:gray;color:white";

            var suu = document.querySelector(".submits");
            suu.style.display = "none";

            var neww = document.querySelector(".newdiv");
            neww.style.display = "block";

            var arr = document.querySelector(".maindiv1");
            arr.style = "margin-left:59%;margin-top:-10px;"
            
        }

        
        newdiv.onclick = function () {
            var arra = document.querySelector(".maindiv1");
            arra.style.display="none";
            
            var rem1 = document.querySelector(".formbox")
            rem1.style = "width:68%;background-color:rgb(28,45,89);color:white";

            var sel = document.querySelector('.formdiv2_1');
            sel.style = "margin-top:-1px";

            var arr = document.querySelector("#tedxt");
            arr.innerHTML = "Data Submitted";
            arr.style = "color:white";

            var textInputs = document.querySelectorAll('#inputs2');
            var labels = document.querySelectorAll('#lable2');

            textInputs.forEach(function (input, index) {
                var inputValue = input.value;
                var label = labels[index];
                label.style = "color:white";
                label.style.display = "block";
                label.innerHTML = inputValue;
                input.style.display = "none";
            });

            var textInputs1 = document.querySelectorAll('#inputs3');
            var labels1 = document.querySelectorAll('#lable3');

            textInputs1.forEach(function (input1, index1) {
                var inputValue1 = input1.value;
                var label1 = labels1[index1];
                label1.style = "color:white";
                label1.style.display = "block";
                label1.innerHTML = inputValue1;
                input1.style.display = "none";
            });

            var textInputs1 = document.querySelectorAll('#inputs4');
            var labels1 = document.querySelectorAll('#lable4');

            textInputs1.forEach(function (input1, index1) {
                var inputValue1 = input1.value;
                var label1 = labels1[index1];
                label1.style = "color:white";
                label1.style.display = "block";
                label1.innerHTML = inputValue1;
                input1.style.display = "none";
            });


            var textInputs1 = document.querySelectorAll('#checkboxss');
            var labels1 = document.querySelectorAll('#lablecheck');
            var labss = document.querySelector('#lable5');

            textInputs1.forEach(function (input1, index1) {
                var label = labels1[index1];
                if (input1.checked) {
                    labss.innerHTML = input1.value;
                    labss.style = "font-size:20px;color:white;font-weight:bold;margin-left:35.5%;"
                    // labss.style = "border:1px solid";
                    label.style.display = "none";
                } else {
                    label.style.display = "none"
                    input1.style.display = "none";
                }
            });


            var textInputs2 = document.querySelectorAll('#checkboxss1');
            var labels2 = document.querySelectorAll('#lablecheck1');
            var labss2 = document.querySelector('#labradio');

            var mainddivv = document.querySelector('.formdiv2')
            mainddivv.style = "margin-top:10px"

            textInputs2.forEach(function (input2, index2) {
                var label2 = labels2[index2];
                if (input2.checked) {
                    labss2.innerHTML = input2.value;
                    labss2.style = "font-size:20px;color:white;font-weight:bold;margin-left:35.5%;"
                    // labss.style = "border:1px solid";
                    label2.style.display = "none";
                } else {
                    label2.style.display = "none"
                    input2.style.display = "none";
                }
            });


            var textInputs2 = document.querySelectorAll('#maindivsss');
            var labels2 = document.querySelectorAll('#selectbox');
            var labss2 = document.querySelector('#newlab');

            textInputs2.forEach(function (input2) {
                var inputValue1 = input2.value;
                labss2.innerHTML = inputValue1;
                labss2.style = "font-size:20px;color:white;font-weight:bold;margin-left:35.5%;"
                input2.style.display = 'none';
            });

            var lastdiv = document.querySelector(".newdiv");
            lastdiv.style.display = "none";
            

        }

        mainbox.appendChild(box);
        mainbox.appendChild(box1);
        box.appendChild(submits);
        box1.appendChild(newdiv);
    }
}