import { React, Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Overview extends Component {


    state = {
        text: this.props.overview
    }

    render() {
        return (
            <div>
                <CKEditor
                    editor={ClassicEditor}
                    data={this.props.overview}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({
                            text: data
                        })
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />

                <button className="btn btn-success" onClick={() => this.props.save(this.state.text)}>Save</button>


            </div>
        )
    }
}

export default Overview