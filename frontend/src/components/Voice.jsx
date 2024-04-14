import React from 'react';
import axios from "axios";

const Voice = async () => {
    let data = 'Макар гений';

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://bot.jaicp.com/chatapi/webhook/yandex/NMGqJTHQ:39994e4013771bf3e3432836e4845189fc3f72ed',
        headers: {
            'Content-Type': 'application/ssml',
            'Authorization': 'y0_AgAAAABi_G9dAAT7owAAAAEB9VYvAAAqhLM28VpAT5GoaGtyS3MVqqiLyA'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export default Voice;