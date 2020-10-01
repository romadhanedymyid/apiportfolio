const mjml2html     = require('mjml')
const nunjucks      = require('nunjucks')

const unescapeTAG = (escapedTAG) => {
    return escapedTAG.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}

module.exports = {
    render: (template, params) => {
        try {
            nunjucks.configure({ autoescape: true })
            
            let mailHeader      = nunjucks.renderString(template, params)
            let result          = unescapeTAG(mailHeader)
            const htmlOutput    = mjml2html(result)
    
            return htmlOutput
        }
        catch (err) {
            return err
        }
    }
}