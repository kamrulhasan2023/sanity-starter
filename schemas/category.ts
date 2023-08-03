import { defineField } from "sanity";

export default {
    name : "categories",
    title : "Category",
    type: "document",
    fields : [
        defineField({
            name: 'category',
            type: 'string',
            title: 'Category'
        }),
        defineField({
            name : "subcategories",
            type: "array",
            
            of : [
                defineField({
                    name: 'subcategory',
                    type: 'string',
                    title: 'Sub Category',
                    validation: Rule => Rule.required()
                })
            ]
        })
    ]
}