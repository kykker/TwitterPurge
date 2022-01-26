const fs = require('fs-extra');

module.exports = {
    saveFile: async function saveFile(f, d) {
        try {
            await fs.outputFile( f, d);
            const data = fs.readFile( f, 'utf8');
            console.log(data)
    
        } catch (e) {
            console.error(e)
        }
    }, 
    randomNumber: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    },
    time: new Date().toLocaleTimeString()
    .replaceAll('/', '')
    .replaceAll(':', '')
    .replaceAll(', ', '_')
}