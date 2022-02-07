import './App.css';
import React, { useState } from 'react';
import options from './options.json'

function Components() {
  const [dropdown, setdrop] = useState('')
  const [list, setList] = useState([])

  const handleChange = (change) => {
    if (change !== '') {
      setdrop(change)
    }
    if (change === 'Select from list') {
      setdrop('')
    }
  }
  const handleDelete = (dele) => {
    var ary = list.filter(function (v) {
      return v !== dele;
    });
    setList(ary)
  }
  const handlelistadd = () => {
    if (dropdown === '') {
      alert('Selection is empty please select one option')
    }

    if ((list.indexOf(dropdown) > -1)) {
      alert(`${dropdown} already exists in the list try something else`)
      return
    }

    if (dropdown !== '') {
      setList([...list, dropdown])
    }
  }

  const btns = {
    display: 'inline-block',
    backgroundColor: '#7b38d8',
    borderRadius: '10px',
    border: '4px double #cccccc',
    color: '#eeeeee',
    textAlign: 'center',
    fontSize: '28px',
    padding: '20px', margin: '5px',
  }
  const inputSt = {
    display: 'inline-block',
    // backgroundColor: '#7b38d8',
    borderRadius: '10px',
    border: '4px double #cccccc',
    color: 'Black',
    textAlign: 'center',
    fontSize: '28px',
    padding: '20px',
    width: '400px',
    margin: '5px',
  }

  const ListD = () => {
    return (
      <div>
        {list.map((itm) => (
          <div style={{}}>
            <li>
              <span
                style={inputSt}
              >{itm}</span>
              <button
                style={btns}
                onClick={() => {
                  handleDelete(itm)
                }}
              >Delete from list</button>
            </li>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="compo">
        <select
          style={inputSt}
          onChange={(e) =>
            handleChange(e.target.value)
          }>
          {options.sectors.map((itm, index) => (
            <React.Fragment key={index}>
              <option value={itm}>{itm}</option>
            </React.Fragment>
          ))}
        </select >
        <button
          style={btns}
          onClick={() => handlelistadd()}>ADD to list</button>
      </div>
      <ListD />
    </div >
  );
}

export default Components;
