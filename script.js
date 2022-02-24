function nolasa(m1, m2, m3){

    const malas = document.getElementsByClassName("mala"); // šī rinda ievada ciparus rāmītī (sasaista ar funkciju)
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);

    if (m1>0 && m2>0 && m3>0){ // ja 1., 2. un 3. mala ir lielāka par 0, tad tiks izvadīti malu garumi, ja nē, tad izvadīs "false"
        console.log({m1, m2, m3});
        return {m1, m2, m3};
    } else {
        console.log(false);
        return false;
    }
}

function perimetrs(m1, m2, m3) { // izrēķina trijstūra 3 malu summu jeb perimetru
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log(p);
    return(p);
}

function pusperimetrs(m1, m2, m3) { // izrēķina trijstūra perimetru
    const pusperimetrs = perimetrs(m1, m2, m3)/2;
    console.log(pusperimetrs);
    return(pusperimetrs);
}

function laukums(m1, m2, m3) { // izv
    const pusperimetrs = perimetrs(m1, m2, m3)/2;
    let trijlaukums = Math.sqrt(
        pusperimetrs*((pusperimetrs - m1)*(pusperimetrs - m2)*(pusperimetrs - m3)));
        console.log(trijlaukums);
        return trijlaukums;
}

function irTrijsturis(m1, m2, m3) { // pārbauda, vai trijstūris eksistē
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) { // pārbauda, vai izpildās trijstūra nevienādība
        return true; // atgriež true
    } else {
        return false; // atgriež false
    }
}