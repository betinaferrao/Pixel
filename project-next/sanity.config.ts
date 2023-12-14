import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from "./sanity/schemas/project-schema";
import schemas from './sanity/schemas';
import carreira from './sanity/schemas/carreira-schema';

export default defineConfig({
    projectId: 'n2d1aklf',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool({structure: (S) => (
        S.list().title('Gerenciamento do site').items([
            S.documentTypeListItem('project').title('Projetos'),
            S.documentTypeListItem('carreira').title('Carreiras'),
        ])
    )})],
    schema: {types: [...schemas]}
});