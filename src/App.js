import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, updateNewItem } from './components/actions';

function App({ newItem, items, addItem, deleteItem, updateNewItem }) {
  const handleAddItem = async () => {
    if (!newItem) {
      alert('Enter an item.');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    await addItem(item);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleChange = (e) => {
    updateNewItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
        id="newItem"
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleDeleteItem(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  newItem: state.newItem,
  items: state.items,
});

const mapDispatchToProps = {
  addItem,
  deleteItem,
  updateNewItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);