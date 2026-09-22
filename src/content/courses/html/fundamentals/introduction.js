const introductionToHtml = {
  id: 'html-introduction',
  slug: 'introduction',
  title: 'Introduction to HTML',
  description:
    'Understand what HTML is, why it is important, and how it forms the structure of every web page.',
  difficulty: 'Beginner',
  estimatedTime: 15,

  sections: [
    {
      id: 'introduction',
      type: 'text',
      title: 'Introduction',
      content: ` HTML is the standard markup language used to structure content on the web. It tells the browser what different pieces of content represent, such as headings, paragraphs, links, images, lists, forms, and other parts of a web page. HTML is not a programming language. It is a markup language that describes the structure and meaning of content. `,
    },

    {
      id: 'why-html',
      type: 'text',
      title: 'Why HTML Matters',
      content: ` Every website starts with structure. HTML provides that structure before CSS is used to control presentation and JavaScript is used to add behavior. A strong understanding of HTML makes it easier to build accessible, maintainable, and well-structured web applications. `,
    },

    {
      id: 'prerequisites',
      type: 'list',
      title: 'Prerequisites',
      items: [
        'Basic familiarity with using a computer.',
        'A modern web browser such as Chrome, Firefox, Edge, or Safari.',
        'A code editor such as Visual Studio Code.',
        'No previous HTML experience is required.',
      ],
    },

    {
      id: 'what-is-html',
      type: 'text',
      title: 'What Is HTML?',
      content: ` HTML stands for HyperText Markup Language. It uses elements to describe the structure and meaning of content. For example, a heading can be represented using a heading element, while a paragraph can be represented using a paragraph element. The browser reads these elements and uses them to construct the document displayed on the screen. `,
    },

    {
      id: 'basic-syntax',
      type: 'code',
      title: 'Basic HTML Syntax',
      language: 'html',
      code: `<h1>Hello, world!</h1>`,
      explanation:
        'This example creates a level-one heading containing the text "Hello, world!".',
    },

    {
      id: 'first-example',
      type: 'code',
      title: 'Your First HTML Page',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Web Page</title>
  </head>

  <body>
    <h1>Hello, world!</h1>
    <p>My first HTML page.</p>
  </body>
</html>`,
      explanation:
        'This is a minimal HTML document containing a document type declaration, the html element, a head section, and visible content inside the body.',
    },

    {
      id: 'browser-process',
      type: 'steps',
      title: 'How the Browser Uses HTML',
      steps: [
        'The browser receives the HTML document.',
        'It reads the HTML elements and their relationships.',
        'It builds an internal representation of the document.',
        'The browser uses that structure to display the page.',
      ],
    },

    {
      id: 'common-mistakes',
      type: 'list',
      title: 'Common Mistakes',
      items: [
        'Forgetting to close elements that require closing tags.',
        'Using HTML only for visual styling instead of meaningful structure.',
        'Creating deeply nested markup without a clear reason.',
        'Ignoring semantic HTML elements.',
      ],
    },

    {
      id: 'best-practices',
      type: 'list',
      title: 'Best Practices',
      items: [
        'Use meaningful and semantic HTML elements.',
        'Keep the document structure organized and readable.',
        'Indent nested elements consistently.',
        'Use lowercase HTML element names.',
        'Write HTML with accessibility in mind.',
      ],
    },

    {
      id: 'practice',
      type: 'practice',
      title: 'Practice',
      description:
        'Create a simple HTML page containing a heading and a paragraph.',
      tasks: [
        'Create a valid HTML document.',
        'Add a level-one heading containing your name.',
        'Add a paragraph describing yourself.',
      ],
    },

    {
      id: 'summary',
      type: 'summary',
      title: 'Summary',
      items: [
        'HTML is a markup language used to structure web content.',
        'HTML provides the foundation of a web page.',
        'HTML uses elements to describe content and structure.',
        'Browsers interpret HTML and use it to construct the displayed document.',
        'Semantic and well-structured HTML improves maintainability and accessibility.',
      ],
    },
  ],
}

export default introductionToHtml