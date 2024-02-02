const scrapeIt = require("scrape-it");

exports.handler = async function(event, context) {
    // Parsing the event body to get url and contents
    const { url, contents } = JSON.parse(event.body);

    try {
        // contents is already a JavaScript object, no need to parse it again
        console.log(contents);

        return scrapeIt(url, contents)
            .then(({ data, status }) => {
                console.log(`Status Code: ${status}`)
                console.log(data)
                return {
                    statusCode: status,
                    body: JSON.stringify(data, null, 2)
                };
            });
    } catch (e) {
        console.error("Error:", e);
        // Handle the error if there's an issue with the scrapeIt function or others
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.toString() }, null, 2)
        };
    }
};
