import React, { useState } from 'react';

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const onClickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upperCase.', 'success');
  };

  const onClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowerCase.', 'success');
  };

  const onClickClear = () => {
    setText('');
    props.showAlert('text box cleared.', 'success');
  };

  const onClickSentance = () => {
    let newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert('converted to sentanceCase.', 'success');
  };

  const onClickTitle = () => {
    let newText = text
      .split(' ')
      .map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase())
      .toString()
      .replaceAll(',', ' ');
    setText(newText);
    props.showAlert('converted to titleCase.', 'success');
    console.log(newText);
  };

  const onClickCopy = () => {
    let text = document.getElementById('mybox');
    text.select(); // select is use to select the text
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); // for deselect copy value
    props.showAlert('copy text on clipboard.', 'success');
  };

  const onClickRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Remove extra space.', 'success');
  };

  let [text, setText] = useState('');

  return (
    <>
      <div>
        <div
          className='form-group my-3'
          style={{ color: props.mode === 'dark' ? 'white' : '#040858' }}
        >
          <h1 className='form-group mb-2'>{props.heading}</h1>
          <textarea
            className='form-control'
            value={text}
            style={{
              backgroundColor:
                props.mode === 'dark' ? ' rgb(14 43 122)' : 'white',
              color: props.mode === 'dark' ? 'white' : '#040858',
            }}
            onChange={handleOnChange}
            id='mybox'
            rows='8'
            placeholder='Enter text here'
          ></textarea>
        </div>
        <div>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-primary mx-2 my-2 '
            onClick={onClickUpper}
            style={{ border: '1 px solid black' }}
          >
            Convert to uppercase
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-success mx-2 my-2'
            onClick={onClickLower}
          >
            Convert to lowercase
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-secondary mx-2 my-2'
            onClick={onClickSentance}
          >
            Convert to sentanceCase
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-link mx-2 my-2'
            onClick={onClickTitle}
            style={{ border: '10 px solid black' }}
          >
            Convert to titlecase
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-danger mx-2 my-2'
            onClick={onClickClear}
          >
            Clear Text
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-info mx-2 my-2'
            onClick={onClickCopy}
          >
            Copy text
          </button>
          <button
            type='button'
            disabled={text.length === 0}
            className='btn btn-outline-warning mx-2 my-2'
            onClick={onClickRemoveSpace}
          >
            remove extra space
          </button>
        </div>
      </div>
      <div
        className='container my-3'
        style={{ color: props.mode === 'dark' ? 'white' : '#040858' }}
      >
        <h2>Your text summary</h2>
        <b>
          {/* (/\s+/) this is a regular expression it split the text from space and newline both */}
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{' '}
          is word {text.length} is characters
        </b>
        <h3>Reading time 125 word as per minutes.</h3>
        <b>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0)
              .length}{' '}
          minutes read.
        </b>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
