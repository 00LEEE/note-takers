const fs = require('fs').promises;

const writeToFile = async (destination, content) => {
    try {
        await fs.writeFile(destination, JSON.stringify(content, null, 4));
        console.info(`\nData written to ${destination}.`);
    } catch (error) {
        console.error(error);
    }
};

const readAndAppend = async (content, file) => {
    try {
        const data = await fs.readFile(file, 'utf8');
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        await writeToFile(file, parsedData);
    } catch (error) {
        console.error(error);
    }
};

module.exports = { fs, writeToFile, readAndAppend };