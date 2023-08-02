import { defineField } from "sanity";

// schemas/person.ts
export default {
    name: "person",
    type: "document",
    title: "Person",
    fields : [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField(
            {
                name: 'age',
                type: 'string',
                title: 'Age'
            }
        ),
        defineField(
         {
            name: "pets",
            type: "array",
            of: [
                {
                  title: 'Pet',
                  type: 'reference',
                  to: [{type: 'pet'}],
                  options: {
                    disableNew: true,
                  }
                }
              ],
            }
        ),
    ]
}