var sitem = document.getElementsByClassName("s-item"), i, len;
var citem = document.getElementsByClassName("c-item"), i, len;
var titem = document.getElementsByClassName("t-item"), i, len;
var yitem = document.getElementsByClassName("y-item"), i, len;
var pitem = document.getElementsByClassName("p-item"), i, len;
var ditem = document.getElementsByClassName("d-item"), i, len;
var kmitem = document.getElementsByClassName("km-item"), i, len;
var mitem = document.getElementsByClassName("m-item"), i, len;
var value = document.getElementById("search");

window.getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
}

window.onload = function () { search() };

function search() {
    for (i = 0, len = sitem.length; i < len; i++) {
        sitem[i].innerHTML = getParameterByName("s");
    }
    value.value = getParameterByName("s");
    for (i = 0, len = citem.length; i < len; i++) {
        citem[i].innerHTML = Math.floor(Math.random() * 10 + 1);
    }
    for (i = 0, len = titem.length; i < len; i++) {
        titem[i].innerHTML = getDateString();
    }
    for (i = 0, len = yitem.length; i < len; i++) {
        yitem[i].innerHTML = Math.floor(Math.random() * 7 + 3);
    }
    for (i = 0, len = kmitem.length; i < len; i++) {
        kmitem[i].innerHTML = '<p>Dystans: 253 km</p>';
    }
    for (i = 0, len = mitem.length; i < len; i++) {
        mitem[i].innerHTML = '<a href="mailto:staport@staport.pl">Wyślij zapytanie</a>';
    }
    for (i = 0, len = ditem.length; i < len; i++) {
        ditem[i].innerHTML = '<a href="http://staport.pl">STAPORT Przedsiębiorstwo Przedstawicielskie Sp. z o.o.</a> <h4 class="item-bold h4-margin" > Approved&nbsp;Partner&nbsp;(AppP)</h4 > <p>ul. Bakalarska 26</p> <p>02-212 Warszawa</p> <p>woj.: mazowieckie</p> <p>tel.1: 22 846 46 46</p> <p>tel.2: 22 886 48 37-38</p> <a href="mailto:staport@staport.pl">staport@staport.pl</a> <a href="http://staport.pl">http://staport.pl</a>';
    }
    for (i = 0, len = pitem.length; i < len; i++) {
        p = Math.floor(Math.random() * 25 + 1);
        if (p == 1) {
            pitem[i].innerHTML = "STYCZNIK DLA KOLEI, AC-3, 7.5KW 400V, DC 110V, 0,7...1,25*US, Z DIODĄ PRZECIWZAKŁÓCENIOWĄ, 3-BIEG, WIELKOŚĆ S00, PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 2) {
            pitem[i].innerHTML = "TRACTION CONTACTOR, AC-3 9 A, 4 KW / 400 V 1 NO, 24-34 V DC, 0.7-1.25* US WITH INTEGRATED VARISTOR SIZE S00, SPRING-TYPE TERMINAL SUITABLE FOR PLC OUTPUTS";
        };
        if (p == 3) {
            pitem[i].innerHTML = "STYCZNIK DLA KOLEI, AC-3, 11KW/400V, 1S+1OE, AC(40-60HZ)/DC-OPERATED, UC 24V, 0,7...1,25*US,Z WARYSTOREM, 3-BIEG WIELKOŚĆ S0, PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 4) {
            pitem[i].innerHTML = "STYCZNIK SPRZĘGAJĄCY, AC-3, 5.5KW/ 400V, 1NO, DC 110V, 0.7...1.25*US, Z WARYSTOREM, 3-BIEG ROZMIAR S00, PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 5) {
            pitem[i].innerHTML = "STYCZNIK, AC-3, 4 KW/400 V, 1 NC, DC 24 V, 3-BIEG, ROZMIAR S00, PRZYŁ. ŚRUBOWE";
        };
        if (p == 6) {
            pitem[i].innerHTML = "STYCZNIK, AC-3, 7.5 KW/400 V, 1 NO, AC 230 V, 50/60 HZ, 3-BIEG, ROZMIAR S00, PRZYŁ. ŚRUBOWE";
        };
        if (p == 7) {
            pitem[i].innerHTML = "STYCZNIK, AC-3, 5.5 KW/400 V, 1 NO, DC 24 V, 3-BIEG, ROZMIAR S00, PRZYŁ. ŚRUBOWE";
        };
        if (p == 8) {
            pitem[i].innerHTML = "STYCZNIK SPRZĘGAJĄCY, AC-3, 7.5KW/400V, 1NO+1NC, DC 24V, 3-BIEG, ROZMIAR S0, PRZYŁ. SPRĘŻYNOWE, BRAK MOŻLIWOŚCI MONTAŻU STYKÓW POMOCNICZYCH";
        };
        if (p == 9) {
            pitem[i].innerHTML = "POŁĄCZENIE RÓWNOLEGŁE, 3-BIEG.OLA DLA 3RT201., PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 10) {
            pitem[i].innerHTML = "CZUJNIKI ZBLIŻ. SIMATIC PXI320, M12 INDUKC., DC 10...65V, SN=2MM, ZAB.W MET. WPUSZCZ., NO, 300MA, PNP, 3 PRZEW., MOSIĄDZ NIKL., Z PRZEW, 2M, PUR, IP67";
        };
        if (p == 11) {
            pitem[i].innerHTML = "SIMATIC PXI240 INDUCTIVE SENSOR M30, 3-WIRE, PNP, NC15...34V DC SN=15MM, NOT FLUSH 200MA, IP67, SHORTY M12 CONNECTOR, TYPE F NICKEL-PLATED BRASS";
        };
        if (p == 12) {
            pitem[i].innerHTML = "CZUJNIKI ZBLIŻ. SIMATIC PXI230, M18 INDUKC., DC 15...34V, SN=8MM, ZAB.W MET.WYSTAJACY., NO, 200MA, PNP, 3 PRZEW., MOSIĄDZ NIKL., Z PRZYŁ. M12., IP67";
        };
        if (p == 13) {
            pitem[i].innerHTML = "SIRIUS ACT, PRZYCISK PODWÓJNY, 22MM, OKRĄGŁY, TWORZYWO Z MET. PIERŚCIENIEM, ZIELONY, CZERWONY, PŁASKIE PRZYCISKI";
        };
        if (p == 14) {
            pitem[i].innerHTML = "SIMATIC PXS230 SONAR SENSOR M18S, DIFFUSE SENSO R24V DC, SN=50...400MM 1 NO, 150MA, PNP M12 CONNECTOR, 4-POLE, TYPE F NICKEL-PLATED BRASS, IP67 ANGLED SENSOR";
        };
        if (p == 15) {
            pitem[i].innerHTML = "PRZEKAŹNIK SPRZĘGAJĄCY WYJŚCIOWY, OPTO-PRZEKAŹNIK, PODWÓJNY, 1 NO, TRANZYSTOR, DC 24 V, PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 16) {
            pitem[i].innerHTML = "PRZEKAŹNIK SPRZĘGAJĄCY WYJŚCIOWY, OPTO-PRZEKAŹNIK, PODWÓJNY, 1 NO, TRIAK, DC 24 V, PRZYŁ. SPRĘŻYNOWE";
        };
        if (p == 17) {
            pitem[i].innerHTML = "AKCES. DO 3KD WIELK. 4: NAPĘD OBROTOWY DRZWIOWY Z WAŁKIEM 300 MM, AWARYJNY ŻÓŁTO-CZERWONY; Z TOLER. SPRZĘGŁEM DRZW. ; WYMIARY POKRĘTŁA 100X100, WAŁEK 10X10, Z OZNACZENIEM: TEST - 0 - I; KOMPLETNY, DŁUGOŚĆ DŹWIGNI 140MM";
        };
        if (p == 18) {
            pitem[i].innerHTML = "SINAMICS G120C RATED POWER 1,5KW WITH 150% OVERLOAD FOR 3 SEC 3AC380-480V +10/-20% 47-63HZ INTEGRATED FILTER CLASS A I/O-INTERFACE: 6DI, 2DO,1AI,1AO SAFE TORQUE OFF INTEGRATED FIELDBUS: PROFINET-PN PROTECTION: IP20/ UL OPEN TYPE SIZE: FSAA 173X73X178(HXWX";
        };
        if (p == 19) {
            pitem[i].innerHTML = "SINAMICS G120C RATED POWER 0,75KW WITH 150% OVERLOAD FOR 3 SEC 3AC380-480V +10/-20% 47-63HZ INTEGRATED FILTER CLASS A I/O-INTERFACE: 6DI, 2DO,1AI,1AO SAFE TORQUE OFF INTEGRATED FIELDBUS: PROFINET-PN PROTECTION: IP20/ UL OPEN TYPE SIZE: FSAA 173X73X178(HXW";
        };
        if (p == 20) {
            pitem[i].innerHTML = "SINAMICS G120C RATED POWER 5,5KW WITH 150% OVERLOAD FOR 3 SEC 3AC380-480V +10/-20% 47-63HZ INTEGRATED FILTER CLASS A I/O-INTERFACE: 6DI, 2DO,1AI,1AO SAFE TORQUE OFF INTEGRATED FIELDBUS: PROFINET-PN PROTECTION: IP20/ UL OPEN TYPE SIZE: FSB 196x 100x 225,4";
        };
        if (p == 21) {
            pitem[i].innerHTML = "Front connector for SIMATIC S7-300 20 pole (6ES7392-1AJ00-0AA0) with 20 single cores 0.5 mm2, Single cores H05V-K, Screw version VPE=1 unit L = 2.5 m";
        };
        if (p == 22) {
            pitem[i].innerHTML = "SIRIUS ACT, BLOK STYKÓW Z 1 ELEMENTEM, 1NO, PRZYŁ. SPRĘŻYNOWE, DO MONTAŻU NA PŁYCIE CZOŁOWEJ";
        };
        if (p == 23) {
            pitem[i].innerHTML = "SITOP PSE201U buffer module Buffer time 100 ms to 10 s Depending on load current";
        };
        if (p == 24) {
            pitem[i].innerHTML = "WYPOSAŻENIE DO VL630, VL800, NAPĘD OBROTOWY PRZEDNI, BEZPOŚR. MONT. NA WYŁ.";
        };
        if (p == 25) {
            pitem[i].innerHTML = "WYPOSAŻENIE DO VT1000, VT1600 SPRZĘGŁO ROZŁĄCZNE IP 40";
        };
    }


}

function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`
};







