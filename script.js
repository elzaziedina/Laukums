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