
var musicData = [
    {
        name: 'Run to the hills',
        artist: 'Iron Maiden'
    },
    {
        name: 'Bad Things',
        artist: 'Jace Everett',
    },
    {
        name: 'Paralyzer',
        artist: 'Finger Eleven',
    },
    {
        name: 'Barracuda',
        artist: 'Fergie',
    },
    {
        name: 'Black Magic',
        artist: 'Fleetwood Mac',
    },
];
window.onload = function () {
    for (var i in musicData) {
        var item = musicData[i];
        item.id = (parseInt(i) + 1);
        item.image = "img/" + item.id + '.jpg';
        //Veri çok gözüksün diye aynı objeyi başka bir instance üzerinde tekrar ekliyoruz.
        musicData.push({
            id: item.id,
            image: item.image,
            name: item.name,
            artist:item.artist,
        });
    }
}