const DEVELOPMENT_PATH = '@/components/development'

export function getComponentPath(path) { 
    return [DEVELOPMENT_PATH, path, 'component'].join('/')
} 
