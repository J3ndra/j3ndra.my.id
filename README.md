# j3ndra.my.id

### _Build with 🛠️._
<p>
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white" />
</p>

Kasian [sanity](https://www.sanity.io/) gak ada badge.

### 🚀 How to start
1. Clone this project
   ```
    git clone https://github.com/J3ndra/j3ndra.my.id.git
    cd j3ndra.my.id
   ```
2. Install packages
   ```
    yarn
    # OR
    npm install
   ```
3. Copy `.env.example` to `.env.local` and you notice `SANITY_PROJECT_ID` and `SANITY_TOKEN`. You need to setting sanity first before you can go.
   > Dont forget to create sanity account.
   ```
    npm install -g @sanity/cli
    sanity init
   ```

4. Go to sanity directory that you created, and you will see your `SANITY_PROJECT_ID` in `sanity.json`. And for `SANITY_TOKEN`, you need to go to `https://www.sanity.io/manage/personal/project/{SANITY_PROJECT_ID}/api#tokens`, `Add API token` and choose `Deploy Studio` or `Editor`.

5. Now you need to configure the sanity project first. After that, go to directory that you make for sanity and go to `schemas` folder and edit `schema.js`.
   
   `schema.js`
   ```javascript
    ...
    export default createSchema({
        name: 'default',
        types: schemaTypes.concat([
            projects // Add this line
    ...
   ```
   and then create file named `projects.js` and copy this code.
   ```javascript
   export default {
      name: 'projects',
      title: 'Projects',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: "Project title.",
          validation: (Rule) => [Rule.required().error('Field cannot be empty')],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          description: "Project description.",
          validation: (Rule) => [Rule.required().error('Field cannot be empty')],
        },
        {
          name: 'demo',
          title: 'Demo',
          type: 'url',
          validation: (Rule) => [Rule.uri({
              schema:['http', 'https']
          })]
        },
        {
          name: 'github',
          title: 'Github',
          type: 'url',
          validation: (Rule) => [Rule.uri({
              schema:['http', 'https']
          })]
        },
      ],
    };
   ```
   Start sanity by `yarn start` in sanity directory and now you can add your own projects.
6. `yarn dev` to start `Next.js`

## 🐬 Create Docker Image
1. `docker-compose up -d --build`.
2. `docker ps -a` to see if it already running.
3. Now just check `http://localhost:3000` in your browser.

## Thanks to
- Tutorial by [Benjamin Carlson](https://www.youtube.com/c/BenjaminCarlson)
- [Sanity Documentation](https://www.sanity.io/docs/document-type)
- [NextJS](https://nextjs.org)
- [Chakra UI](https://chakra-ui.com/)
- [How to Dockerize Next.JS](https://betterprogramming.pub/4-steps-to-dockerize-your-next-js-app-cfa8a54881af)