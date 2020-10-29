function route(name, param = []) {
    try {
        let url = routes[name].url;
        /* ES6 以上語法 */
        if (typeof url.matchAll === 'function') {
            let array = [...url.matchAll(/{([^}]+)}/g)];
            for (let i = 0; i < array.length; i++) {
                if (typeof param[i] !== 'undefined' && param[i] !== '') {
                    url = url.replace(`{${array[i][1]}}`, param[i]);
                } else {
                    url = url.replace(`{${array[i][1]}}`, array[i][1]);
                }
            }
        }
        /* ES5 以下語法 */
        else {
            const regexp = RegExp('{([^}]+)}', 'g');
            let match;
            let i = 0;
            while ((match = regexp.exec(url)) !== null) {
                if (typeof param[i] !== 'undefined' && param[i] !== '') {
                    url = url.replace(`{${match[1]}}`, param[i]);
                } else {
                    url = url.replace(`{${match[1]}}`, match[1]);
                }
                i++;
            }
        }
        return url;
    } catch (error) {
        return error;
    }
}
