"use client"
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchType, setSearchType] = useState('number');
  const [query, setQuery] = useState('');

  const handleSearchTypeChange = (type: string) => {
    setSearchType(type);
    setQuery('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Логика поиска будет реализована здесь
    console.log(`Поиск ${searchType}: ${query}`);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${searchType === 'number' ? styles.active : ''}`}
          onClick={() => handleSearchTypeChange('number')}
        >
          Поиск по номеру
        </button>
        <button
          className={`${styles.tab} ${searchType === 'brand' ? styles.active : ''}`}
          onClick={() => handleSearchTypeChange('brand')}
        >
          Поиск по марке
        </button>
        <button
          className={`${styles.tab} ${searchType === 'name' ? styles.active : ''}`}
          onClick={() => handleSearchTypeChange('name')}
        >
          Поиск по названию товара
        </button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Введите ${searchType === 'number' ? 'номер' : searchType === 'brand' ? 'марку' : 'название товара'}`}
          value={query}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>ИСКАТЬ</button>
      </form>
    </div>
  );
};

export default SearchBar;
