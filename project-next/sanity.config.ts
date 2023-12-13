import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from "./sanity/schemas/project-schema";
import schemas from './sanity/schemas';

export default defineConfig({
    projectId: 'n2d1aklf',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: [project]}
});