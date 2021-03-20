// Components 
function StatusText({ text }) {
    const element = document.createElement('li')
    element.textContent = text;
    return element
}

// Initialize application
const app = document.createElement('div')
const searchButton = document.createElement("button");
const statusList = document.createElement("ul");

// Apply styles
applyStyles(app, {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    height: 'max-content',
    width: 'max-content',
    background: 'white',
    border: '1px solid #dbdbdb',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '5px 5px 7px 1px #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse'
})

applyStyles(searchButton, {
    height: '30px',
    width: '30px',
    background: 'orange',
    borderRadius: '100%',
    outline: 'none',
    border: 'none',
})

applyStyles(statusList, {
    height: '100px',
    width: '150px',
    overflow: 'auto',
    border: '1px solid #eee',
    borderRadius: '8px',
    marginRight: '8px'
})


// Set Defaults
logStatus("Idle")

// Add Elements to UI
app.appendChild(searchButton)
app.appendChild(statusList)
document.body.appendChild(app)


// Attach event listeners
searchButton.addEventListener('click', searchOnGoogle);

async function searchOnGoogle() {
    const url_attribute = process.env.NODE_ENV === 'production' ? "src" : "data-ng-src"
    const image_url = document.querySelector('.ans-section').querySelector('img').getAttribute(url_attribute);
    const api_url = `https://api.ocr.space/parse/imageurl?apikey=7ad1ea631088957&url=${image_url}`;

    // Set Status
    logStatus('Purging ...')

    try {

        // Call OCR API to get text in the image
        const response = await content.fetch(api_url);
        const data = await response.json();

        logStatus('Idle')

        const image_text = data.ParsedResults[0].ParsedText
        const google_url = `http://google.com/search?q=${image_text}`

        window.open(google_url)
    } catch (error) {
        logStatus(':( Error')
    }
}


// Utils
function applyStyles(element, styles) {
    Object.keys(styles).forEach(function (styleKey) {
        element.style[styleKey] = styles[styleKey]
    })
}

function logStatus(status) {
    statusList.appendChild(StatusText({ text: status }))
    statusList.lastElementChild.scrollIntoView({ behavior: 'smooth' })
}