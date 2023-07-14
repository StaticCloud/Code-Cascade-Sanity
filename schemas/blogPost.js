export default {
    title: 'Blog Post',
    name: 'blogPost',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 150,
                slugify: title => title.toLowerCase().split(' ').join('-')
            }
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            title: 'Preview Image',
            name: 'previewImage',
            type: 'image'
        },
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [{type: 'block'}, {type: 'bodyImage'}]
        }
    ]
    
}