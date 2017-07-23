var sampleMarkdown = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: sampleMarkdown,
      result: marked(sampleMarkdown)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      result: marked(event.target.value)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <textarea
            value={this.state.value}
            className="form-control" rows="20"
            onChange={this.handleChange} />
        </form>
        <div id="result" className='bs-callout bs-callout-info'>
          { this.state.result }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownPreviewer />,
  document.getElementById('root')
);
