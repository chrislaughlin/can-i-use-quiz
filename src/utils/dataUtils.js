import data from '../caniusedata';

const BROWSER_LIST = {
    'ie': {
        name: 'IE',
        latestVersion: 11
    },
    'edge': {
        name: 'Edge',
        latestVersion: 76
    },
    'firefox': {
        name: 'Firefox',
        latestVersion: 71
    },
    'chrome': {
        name: 'Chrome',
        latestVersion: 80
    },
    'safari': {
        name: 'Safari',
        latestVersion: 13.1
    }
}

const getLastVersionInObject = browser => Object.values(browser).slice(-1)[0];

const apiList = Object.values(data.data);
const APIs = {
    count: apiList.length,
    list: apiList.map(api => {
        return {
            name: api.title,
            description: api.description,
            link: api.links.length > 0 ? api.links[0].url : null,
            supported: Object.keys(BROWSER_LIST).map(browser => {
                return {
                    ...BROWSER_LIST[browser],
                    supportedVersion: getLastVersionInObject(api.stats[browser]),
                    supportsLatest: getLastVersionInObject(api.stats[browser]) === BROWSER_LIST[browser].latestVersion
                }
            })
        }
    })
};

const getRandomApi = APIList => {
    const index = Math.floor(Math.random() * APIList.list.length -1 ) + 1

    console.log(index);

    return APIList.list[index];
}

export {
    APIs,
    getRandomApi
}




