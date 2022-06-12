const DEVELOPMENT_PATH = '@/components/development'

export function getComponentPath(path) {
    return [DEVELOPMENT_PATH, path, 'component'].join('/')
}

export function getModuleNotFoundMsg(moduleName) {
    return `${moduleName} couldn't be loaded 😞. Open the developer console to see more info.`;
}

export function getViewUrl(url) {
    return `/views/${url}`;
}