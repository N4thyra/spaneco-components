export const list = [
    {
        label: 'Buttons',
        nodePath: 'buttons',
        detail: false,
    },
    {
        label: 'Epic',
        nodePath: 'buttons/epic',
        detail: true,
    },
    {
        label: 'Navigations',
        nodePath: 'navigations',
        detail: false,
    },
    {
        label: 'Horizontal',
        nodePath: 'navigations/horizontal',
        detail: false,
    },
    {
        label: 'Advanced',
        nodePath: 'navigations/horizontal/advanced',
        detail: true,
    },
    {
        label: 'Simmple',
        nodePath: 'navigations/horizontal/simple',
        detail: true,
    },
    {
        label: 'Vertical',
        nodePath: 'navigations/vertical', 
        detail: false,
    },
];


const buildTree = (acc, node, tmpNode) => {
    const paths = tmpNode.nodePath.split('/');
    const name = paths.shift();
    let childNode = (acc.children ??= []).find(i => i.name === name);
    tmpNode.nodePath = paths.join('/');

    if (!childNode) acc.children.push(childNode = { name, ...node });
    if (paths.length) buildTree(childNode, node, tmpNode);

    return acc;
};

const tree = list.reduce((acc, node) => buildTree(acc, node, {...node}), { children: [] }).children;

 
