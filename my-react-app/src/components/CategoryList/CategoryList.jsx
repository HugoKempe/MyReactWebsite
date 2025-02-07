
import "./CategoryList.css";

function CategoryList() {
  const category1 = "Visual Studio Code";
  const category2 = "Ableton Live 12";

  return (
    <div className="category-list">
      <ul>
        <li>{category1}</li>
        <li>{category2}</li>
      </ul>
    </div>
  );
}

export default CategoryList;
