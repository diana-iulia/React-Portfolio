import * as React from 'react'

export default function Thanks() {
    // because it doesn't like the parenthesis
    var smiley = ":0)"
    return (
        <div id='thanks'>
            Thanks for stopping by! I'd love to hear what you think about this page, please <a id='prettyLink' href='mailto:dianacalin@hotmail.com' target='_blank' rel='noopener noreferrer'>tell me all about it</a> if you'd like {smiley}
        </div>
    )
}