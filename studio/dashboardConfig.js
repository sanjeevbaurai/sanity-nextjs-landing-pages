export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edc04b47874525243575832',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x8jvwuig',
                  apiId: 'bc7ba1fa-ed04-406a-89a8-8e6932afaa80'
                },
                {
                  buildHookId: '5edc04b42908feb14b99ce87',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tanut68j',
                  apiId: 'cea7971b-cc89-42e5-befc-b9f1c35c4d72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanjeevbaurai/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tanut68j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
