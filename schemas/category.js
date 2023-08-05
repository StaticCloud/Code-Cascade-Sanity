export default {
    title: 'Category',
    name: 'category',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Color',
            name: 'color',
            type: 'color'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 150,
                slugify: name => name.toLowerCase().split(' ').join('-')
            }
        },
    ]
}