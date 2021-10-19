import React from 'react';

function HomepageImage() {
    const url = 'https://media.giphy.com/media/4KkSbPnZ5Skec/giphy.gif';

    return (
        <img src={url} style={{width: 400}} alt='gif of cogs turning' />
    );
}

export default HomepageImage;