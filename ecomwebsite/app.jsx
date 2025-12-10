function App() {
  const cardData = [
    {
      title: "Mountain Adventure",
      description: "A thrilling hiking experience through the Alps.",
      category: "Travel",
      tags: ["Hiking", "Nature", "Europe"]
    },
    {
      title: "React Basics",
      description: "Learn how components, props, and hooks work.",
      category: "Education",
      tags: ["JavaScript", "Frontend", "React"]
    },
    {
      title: "Healthy Meal Plan",
      description: "A simple weekly meal plan for a balanced diet.",
      category: "Health",
      tags: ["Food", "Fitness", "Nutrition"]
    },
    {
      title: "Productivity Hacks",
      description: "Improve your workflow with these simple tips.",
      category: "Lifestyle",
      tags: ["Focus", "Work", "Habits"]
    }
  ];

  return (
    <div>
      {cardData.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          description={item.description}
          category={item.category}
          tags={item.tags}
        />
      ))}
    </div>
  );
}

export default App;
