

import React, {Component} from 'react';
import { render } from 'react-dom';
import { Editor } from "@tinymce/tinymce-react";


class TinyMceEditor extends Component{

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    console.log(e.target.getContent())
  }

  render(){
    return <Editor
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
      }}
      onChange={this.onChange}
    />
  }
}



const App = () => (
  <div>
    <h2>Tinymce Test with React</h2>
    <TinyMceEditor />
  </div>
);

render(<App />, document.getElementById('root'));
