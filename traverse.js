const obj = {
    id: '1',
    name: '1name',
    disabled: false,
    parent: null,
    children: [{
        id: '2',
        name: '2name',
        disabled: false,
        children: [{
            id: '5',
            name: '5name',
            disabled: false,
            children: []
        }]
    }, {
        id: '3',
        name: '3name',
        disabled: false,
        children: []
    }, {
        id: '4',
        name: '4name',
        disabled: false,
        children: []
    }]
}
obj.children.forEach(item => {
    item.parent = obj
})
obj.children[0].children.forEach(item => {
    item.parent = obj.children[0]
})
function traverseTree(tree, id) {
    let stack = [tree]
    while (stack.length) {
        const node = stack.pop()
        if (node.id === id) {
            node.disabled = true
            break
        }
        if (node.children) stack = [...stack, ...node.children]
    }
}

function traverseTree (tree, id) {
    if (tree.id === id) {
        tree.disabled = true
        return
    }
    else if (tree.children){
        for (const item of tree.children) {
            if (item.id === id) {
                item.disabled = true
                break
            }
            if (item.children) traverse(item)
        }
    }
}

// traverseTree(obj, '5')
['1', '2', '5'].forEach(item => traverseTree(obj, item))
console.log(obj)
