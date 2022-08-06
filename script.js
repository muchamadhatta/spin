function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],

        ];
    }
    return array;
}
function spin() {
    Wheel.play(){
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        let SelectedItem = "";


        let AC = shuffle([1890, 2250, 2610]);
        let Camera = shuffle([1850, 2210, 2570]);
        let Zonk = shuffle([1770, 2130, 2490]);
        let PS = shuffle([1810, 2170, 2530]);
        let Headset = shuffle([1750, 2110, 2470]);
        let Drone = shuffle([1630, 1990, 2350]);
        let ROG = shuffle([1570, 1930, 2290]);


        let results = shuffle([
            AC[0],
            Camera[0],
            Zonk[0],
            PS[0],
            Headset[0],
            Drone[0],
            ROG[0],
        ]);

        if (AC.includes(results[0])) SelectedItem = "Air Condition";
        if (AC.includes(results[0])) SelectedItem = "Air Condition";
        if (AC.includes(results[0])) SelectedItem = "Air Condition";
        if (AC.includes(results[0])) SelectedItem = "Air Condition";

    }
}