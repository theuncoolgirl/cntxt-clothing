const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Women's",
    },
    {
      id: 5,
      title: "Men's",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="category-background" />
          <div className="category-body-container">
            <h2 className="category-title">{title}</h2>
            <p className="category-subtitle">Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
