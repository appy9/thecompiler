## Contributing

**We heartily welcome any and all contributions that match [our product roadmap](https://github.com/onthecompiler/thecompiler/projects/2) and engineering standards!**

That being said, this codebase isn't your typical open source project because it's not a library or package with a limited scope—it's the entire product.

- [Ground Rules](#ground-rules)
- [Adding Data](#adding-data)
- [Codebase](#codebase)
- [Setup](#setup)
- [Roadmap](https://github.com/onthecompiler/thecompiler/projects/2)

### Ground Rules

#### Contributions and discussion guidelines

All conversations and contributors agree to our underlying [code of conduct](https://github.com/onthecompiler/thecompiler/blob/master/CODE_OF_CONDUCT.md). This code of conduct also applies to all conversations that happen within our contributor community here on GitHub. We expect discussions in issues and pull requests to stay positive, productive, and respectful. Remember: there are real people on the other side of that screen!

#### Reporting a bug or discussing a feature idea

If you found a technical bug on the compiler or have ideas for features we should implement, the issue tracker is the best place to share your ideas. Make sure to follow the issue template and you should be golden! ([click here to open a new issue](https://github.com/onthecompiler/thecompiler/issues/new/choose))

#### Fixing a bug or implementing a new feature

If you find a bug on the compiler and open a PR that fixes it we'll review it as soon as possible to ensure it matches our engineering standards. If you want to implement a new feature, open an issue first to discuss what it'd look like and to ensure it fits in [our roadmap](https://github.com/onthecompiler/thecompiler/projects/2) and plans for the app.

If you want to contribute but are unsure to start, we have [a "good first issue" label](https://github.com/onthecompiler/thecompiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) which is applied to newcomer-friendly issues. Take a look at [the full list of good first issues](https://github.com/onthecompiler/thecompiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and pick something you like!

Want to fix a bug or implement an agreed-upon feature? Great, jump to the [local setup instructions](#first-time-setup)!

### Adding Data

To add data simply add your post to the [data/post.json](/data/posts.json) file. On commit the data will be formatted and placed in the correct spots in the app so you don't have to worry about that. The data format is as follows:

```
{
  "authors": ["Name Of", "Each Author"],
  "date_published": "2018-01-01T00:00:00",
  "tags": ["Lists", "Programming"],
  "title": "A really cool website!",
  "url": "https://thecompiler.site"
}
```

`authors([String])`

A list of all the authors associated with your post.

`date_published(Date)`

Date publish in ISO8601 format. Default the time of day to midnight if is available.

`tags([String])`

A list of readable tag names for the post. Please be mindful of spamming tags and use discretion when adding them.

`title(String)`

The title of the post.

`url(String)`

The url of the post.

#### Regenerating the data

When you first download the code the data is set to whatever was added in the last commit. To regenerate the data for development run the following command:

```sh
npm run data
```

### Codebase

#### Technologies

With the ground rules out of the way, let's talk about the coarse architecture of this mono repo:

- **Full-stack JavaScript**: We run a mono-server the serves both GraphQL and Next.js.

Here is a list of all the big technologies we use:

- **GraphQL**: vanilla API setup
- **Next.js**: Serverside Rendered React apps
- **React**: Frontend

#### Folder structure

```sh
thecompiler/
├── components   # React components
├── controllers  # API Controllers
├── data         # The underlying data and file for the data process
├── graphql      # GraphQL Files for the schema and resolvers
├── pages        # Next.js pages
├── static       # Public files used on the frontend
├── stories      # Storybook stories
├── utils        # Grab bag utilities folder
└── server.js    # Main server file
```

#### Code Styles

On commit we run Prettier and kick off the process for massaging the data for the app. This means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`.

### Setup

The first step to running the compiler locally is downloading the code by cloning the repository:

Clone the app

```sh
git clone https://github.com/onthecompiler/thecompiler.git
```

Install dependencies

```sh
npm install
```

Start the mono-server

```sh
npm run dev
```

## License

BSD 3-Clause, see the [LICENSE](./LICENSE) file.
