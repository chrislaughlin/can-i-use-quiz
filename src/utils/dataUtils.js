import data from '../caniusedata';

const BROWSER_LIST = {
    'ie': {
        code: 'internet-explorer',
        name: 'IE',
        latestVersion: 11
    },
    'edge': {
        code: 'edge',
        name: 'Edge',
        latestVersion: 76
    },
    'firefox': {
        code: 'firefox',
        name: 'Firefox',
        latestVersion: 71
    },
    'chrome': {
        code: 'chrome',
        name: 'Chrome',
        latestVersion: 80
    },
    'safari': {
        code: 'safari',
        name: 'Safari',
        latestVersion: 13.1
    }
}

const getLastVersionInObject = browser => Object.keys(browser).slice(-1)[0];

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
                    supportsLatest: api.stats[browser][getLastVersionInObject(api.stats[browser])] === 'y'
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




