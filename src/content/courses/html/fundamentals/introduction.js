const introductionToHtml = {
  id: 'html-introduction',
  title: 'Introduction to HTML',
  description:
    'Learn what HTML is, how it structures web pages, and how browsers interpret HTML documents.',
  difficulty: 'Beginner',
  estimatedTime: 15,

  sections: [
    {
      type: 'text',
      title: 'Introduction',
      content:
        'HTML is the foundation of every web page. It provides the structure and meaning of content that browsers display to users.',
    },

    {
      type: 'text',
      title: 'Why HTML Matters',
      content:
        'Before learning CSS, JavaScript, or a frontend framework such as Angular, you need to understand how web documents are structured. HTML gives browsers the information they need to understand headings, paragraphs, links, images, forms, and other content.',
    },

    {
      type: 'list',
      title: 'Prerequisites',
      items: [
        'Basic familiarity with using a computer.',
        'A code editor such as Visual Studio Code.',
        'A modern web browser.',
        'Curiosity and willingness to experiment.',
      ],
    },

    {
      type: 'text',
      title: 'What Is HTML?',
      content:
        'HTML stands for HyperText Markup Language. It is a markup language used to describe the structure and meaning of content on the web.',
    },

    {
      type: 'callout',
      variant: 'note',
      title: 'Remember',
      content:
        'HTML describes structure and meaning. CSS controls presentation, while JavaScript adds behavior and interactivity.',
    },

    {
      type: 'text',
      title: 'Basic HTML Syntax',
      content:
        'HTML uses elements to describe different parts of a document. Most elements are written using an opening tag, content, and a closing tag.',
    },

    {
      type: 'code',
      title: 'A Simple HTML Element',
      language: 'html',
      code: `<p>Hello, world!</p>`,
      explanation:
        'The <p> element represents a paragraph. The opening and closing tags tell the browser where the paragraph begins and ends.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip',
      content:
        'HTML is easier to learn when you focus on understanding the structure of a page instead of trying to memorize every element.',
    },

    {
      type: 'text',
      title: 'Your First HTML Page',
      content:
        'A complete HTML document normally contains a document type declaration, an html element, a head section, and a body section.',
    },

    {
      type: 'code',
      title: 'Basic HTML Document',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>

  <body>
    <h1>Hello, world!</h1>
    <p>My first HTML page.</p>
  </body>
</html>`,
      explanation:
        'This is a minimal modern HTML document. The browser uses this structure to understand and render the page.',
    },

    {
      type: 'text',
      title: 'How the Browser Uses HTML',
      content:
        'When you open an HTML document, the browser reads the markup, builds a representation of the document, and uses that structure to render the page.',
    },

    {
      type: 'steps',
      title: 'What Happens When You Open an HTML File',
      steps: [
        'The browser loads the HTML document.',
        'The browser reads the HTML markup.',
        'HTML elements are interpreted and organized into a document structure.',
        'The browser renders the resulting page.',
      ],
    },

    {
      type: 'text',
      title: 'Common Mistakes',
      content:
        'Beginners often make mistakes such as forgetting closing tags, incorrectly nesting elements, or using elements without understanding their purpose.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Common mistake',
      content:
        'Pay attention to element nesting and closing tags. Incorrect structure can produce unexpected results in the browser.',
    },

    {
      type: 'list',
      title: 'Common HTML Mistakes to Avoid',
      items: [
        'Forgetting required closing tags.',
        'Incorrectly nesting elements.',
        'Using HTML elements only for visual styling.',
        'Ignoring semantic meaning.',
        'Writing unnecessarily complicated markup.',
      ],
    },

    {
      type: 'text',
      title: 'Best Practices',
      content:
        'Good HTML should be readable, meaningful, accessible, and logically structured. Prefer semantic elements when they accurately describe the content.',
    },

    {
      type: 'callout',
      variant: 'success',
      title: 'Best practice',
      content:
        'Prefer semantic HTML elements that describe the purpose of your content instead of using generic elements everywhere.',
    },

    {
      type: 'practice',
      title: 'Practice',
      description:
        'Create a simple HTML page containing a heading, a paragraph, and a link.',
      tasks: [
        'Create an index.html file.',
        'Add a valid HTML document structure.',
        'Add an h1 heading.',
        'Add a paragraph describing yourself.',
        'Add a link to a website you frequently use.',
      ],
    },

    {
      type: 'summary',
      title: 'Summary',
      items: [
        'HTML is the markup language used to structure web content.',
        'HTML uses elements and tags to describe content.',
        'A basic HTML document contains html, head, and body sections.',
        'Browsers interpret HTML and use it to render web pages.',
        'Semantic and well-structured HTML provides a strong foundation for CSS and JavaScript.',
      ],
    },
  ],
}

export default introductionToHtml