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
            type: 'slug'
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
            of: [{type: 'block'}]
        }
    ]
    
}