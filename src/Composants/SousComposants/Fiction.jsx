import React, { useState, useEffect } from 'react';

const fictionData = [
  // ... (vos objets title, img, description)
  {
    title: 'Legends of tomorrow',
    img: '../Photos/download-22.jpg',
    description: "Groupe des héros aux super-pouvoirs qui protègent la terre des ménances extra-terreste",
  },
  {
    title: 'Justice league',
    img: '../Photos/download-21.jpg',
    description: "Groupe des héros aux super-pouvoirs qui protègent la terre des ménances extra-terreste",
  },
  {
    title: 'Avengers',
    img: '../Photos/download-20.jpg',
    description: "Groupe des héros aux super-pouvoirs qui protègent la terre des ménances extra-terreste",
  },
  {
    title: 'Eternal',
    img: '../Photos/download-59.jpg',
    description: "Des dieux vénus de l'espace atterissent sur la terre, les uns veulent coloniser la terre et les autres s'opposent",
  },
  {
    title: 'Green arrow',
    img: '../Photos/download-23.jpg',
    description: "Un miliardaire qui depuis un super hero après s'être assorti d'un drame qui a frappé sa vie",
  },
  {
    title: 'Avatar',
    img: '../Photos/download-5.jpg',
    description: "Un policier doit éliminer des androïdes rebelles dans un monde futuriste.",
  },
  {
    title: 'Vampire diarlies',
    img: '../Photos/download-62.jpg',
    description: "L'histoire d'une jeune fille qui tombe amoureuse d'un vampire et se fait mordre",
  },
  {
    title: 'Alice in boadland',
    img: '../Photos/download-77.jpg',
    description: "Une metéorite tombe sur le japon et les victimes font le même rêve étant dans le comma",
  },
  {
    title: 'blood',
    img: '../Photos/download-94.jpg',
    description: "Un boxeur renconte un autre boxeur ancien militaire et font équipe pour venger les innocents",
  },
];

const Fiction = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(fictionData);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = fictionData.filter(item =>
      item.title.toLowerCase().includes(lower)
    );
    const rest = fictionData.filter(item =>
      !item.title.toLowerCase().includes(lower)
    );
    setResults([...filtered, ...rest]);
  }, [search]);

  return (
    <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Films de Science-Fiction</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={search}
          placeholder="Rechercher un film"
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', flex: 1 }}
        />
        <button onClick={() => setSearch('')} style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
          ✕
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {results.map((item, index) => (
          <div key={index} style={{
            width: '285px',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f9f9f9'
          }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fiction;