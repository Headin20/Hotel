var t1, t2, price1;
function ok() {
    t1 = document.getElementById('fday').value;
    t2 = document.getElementById('lday').value;
    var day1 = t1.slice(-2);
    var day2 = t2.slice(-2);
    var time = day2 - day1;

    price1 = document.getElementById('day_eco').innerHTML;
    document.getElementById('sum_eco').innerHTML = price1 * time;

    price1 = document.getElementById('day_stn').innerHTML;
    document.getElementById('sum_stn').innerHTML = price1 * time;

    price1 = document.getElementById('day_polulucs').innerHTML;
    document.getElementById('sum_polulucs').innerHTML = price1 * time;

    price1 = document.getElementById('day_lucs').innerHTML;
    document.getElementById('sum_lucs').innerHTML = price1 * time;

    price1 = document.getElementById('day_prez').innerHTML;
    document.getElementById('sum_prez').innerHTML = price1 * time;
} 

 function toggle_show(id1, id2, id3, id4) {
    document.getElementById(id1).style.display = document.getElementById(id1).style.display == 'none' ? 'block' : 'none';
    document.getElementById(id2).style.display = document.getElementById(id2).style.display == 'none' ? 'block' : 'none';
    document.getElementById(id3).style.display = document.getElementById(id3).style.display == 'none' ? 'block' : 'none';
    document.getElementById(id4).style.display = document.getElementById(id4).style.display == 'none' ? 'block' : 'none';
}