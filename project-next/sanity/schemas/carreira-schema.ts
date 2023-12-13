const carreira = {
    name: 'carreira',
    title: 'Carreiras',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'cargo',
            title: 'Cargo',
            type: 'string'
        },
        {
            name: 'tipo_trabalho',
            title: 'Tipo_Trabalho',
            type: 'string'
        }
    ]
}


export default carreira;